'use client'

import { useState, useEffect } from 'react';
import Popup from './popup';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Trending() {
    
    const [trendingData, setTrendingData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null)

    const trendingFunc = async() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            setTrendingData(data.filter((trend) => trend.id > 10))
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        trendingFunc();
    }, []);

    // POPUP Open
    const open = (productId) => {
        const findProduct = trendingData.find((card)=> card?.id === productId)
        setSelectedProduct(findProduct)
    };

    //Left-Right Arrows
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1300,
        prevArrow: (
            <div>
                <div className="next-slick-arrow rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/>
                    </svg>
                </div>
            </div>
            ),
        nextArrow: (
        <div>
            <div className="next-slick-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24">
                    <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/>
                </svg>
            </div>
        </div>
        ),
    };

    return(
        <>
        <div className='flex flex-col gap-5 my-0 mx-auto pb-40 px-5 py-0' style={{maxWidth:"1200px"}}>
            <div className="flex justify-center">
                <h3 className="font-bold text-3xl">Trending Now</h3>
            </div>

            {/* Npm Slick-Carousel */}
            <Slider {...settings}>
                {trendingData.map((product) => (
                    <div className='trending-slider' key={product.id}>
                        <div onClick={()=>open(product?.id)} className=" flex flex-col gap-2 cursor-pointer">
                        <div className="item-header  p-2">
                            <img src={product.image} alt="product" style={{width: "210px", height:"210px"}} />
                        </div>
                        <div className="item-description flex flex-col gap-1 px-2 text-wrap h-auto" 
                        style={{ width:"210px"}}>
                            <p className='text-lg'>{product.title}</p>
                            <p className='text-3xl font-bold'>{product.price} $</p>
                        </div>
                    </div>
                    </div>
                ))}
            </Slider>

        </div>
        {selectedProduct ? <Popup  selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} /> : null}
        </>
    )
}