'use client'

import { useState, useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
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
            //setArra(data)
            setTrendingData(data.filter((trend) => trend.id > 10))
            
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        trendingFunc();
    }, []);


    const open = (productId) => {
       const findProduct = trendingData.find((card)=> card?.id === productId)
       setSelectedProduct(findProduct)
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return(
        <>
        {/* style: box-sizing:"border-box" */}
        <div style={{maxWidth:"1200px", margin: "0 auto", padding:"0 19px", paddingBottom:"10rem"}}>
            <div className="flex justify-between px-3">
                <h3 className="font-bold text-2xl">Trending Now</h3>
                <div className='flex gap-3'>
                    <ArrowBackIosIcon className='cursor-pointer'/>
                    <ArrowForwardIosIcon className='cursor-pointer'/>
                </div>
            </div>

            {/* <div className="row-container" style={{display:"flex", width:"100%", gap:"2.2rem", overflowX:"scroll", overflowY:"hidden", whiteSpace:"nowrap", scrollBehavior:"smooth", position: "relative",
                padding: "1rem .6rem"}}>

                
                {trendingData.map((product) => (
                    <div onClick={()=>open(product?.id)} className="flex flex-col gap-2" style={{outline: "2px solid rgba(0, 0, 0, .205)", width:"210px", height:"440px", cursor: "pointer"}}>
                        <div className="item-header  p-2">
                            <img src={product.image} alt="product" style={{width: "210px", height:"210px"}} />
                        </div>
                        <div className="item-description flex flex-col gap-1 px-2 text-wrap" style={{ width:"210px", height:"auto"}}>
                            <p style={{fontSize:"1.2rem"}}>{product.title}</p>
                            <p style={{fontWeight:"bold", fontSize:"1.7rem"}}>{product.price}$</p>
                        </div>
                    </div>
                ))}
            </div>
             */}
            <Slider {...settings}>
                {trendingData.map((product) => (
                    <div className='trending-slider'>
                        <div onClick={()=>open(product?.id)} className=" flex flex-col gap-2 cursor-pointer">
                        <div className="item-header  p-2">
                            <img src={product.image} alt="product" style={{width: "210px", height:"210px"}} />
                        </div>
                        <div className="item-description flex flex-col gap-1 px-2 text-wrap" style={{ width:"210px", height:"auto"}}>
                            <p style={{fontSize:"1.2rem"}}>{product.title}</p>
                            <p style={{fontWeight:"bold", fontSize:"1.7rem"}}>{product.price}$</p>
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