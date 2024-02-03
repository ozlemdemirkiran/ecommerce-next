'use client'

import { useState, useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Popup from './popup';
import { Button } from '@mui/material';


export default function Trending() {

    const [trendingData, setTrendingData] = useState([]);

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


    const [isActive, setIsActive] = useState(false);
    const open = event => {
        setIsActive(true);
    };



    // const [isActive, setIsActive] = useState(false);

    // const close = event => {
    //     setIsActive(current => !current);
    // };

    // const gizleme = isActive ? 'hidden' : '';

    // console.log(isActive)
    
    // function aa(){
    //     if(isActive === 'true'){
    //         console.log("isActive: True")
    //     }else{
    //         console.log("isActive: False")
    //     }
    // }
    
    

    const element = isActive ? <Popup/> : null;

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

             {/* <Popup /> prop={[close] [gizleme]} */}
            
            <Button className='bg-gray-700' onClick={open}>
            Link
            </Button>
            {element}
            

            <div className="row-container" style={{display:"flex", width:"100%", gap:"2.2rem", overflowX:"scroll", overflowY:"hidden", whiteSpace:"nowrap", scrollBehavior:"smooth", position: "relative",
                padding: "1rem .6rem"}}>

                {/* card */}

                {trendingData.map((product) => (
                    // <div onClick={acma}>
                    <div className="flex flex-col gap-2" style={{outline: "2px solid rgba(0, 0, 0, .205)", width:"210px", height:"440px", cursor: "pointer"}}>
                        <div className="item-header  p-2">
                            <img src={product.image} alt="product" style={{width: "210px", height:"210px"}} />
                        </div>
                        <div className="item-description flex flex-col gap-1 px-2 text-wrap" style={{ width:"210px", height:"auto"}}>
                            <p style={{fontSize:"1.2rem"}}>{product.title}</p>
                            <p style={{fontWeight:"bold", fontSize:"1.7rem"}}>{product.price}$</p>
                        </div>
                    </div>
                    // </div>
                ))}

            </div>

        </div>
        </>
    )
}