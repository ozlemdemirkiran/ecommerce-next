import { useState, useEffect } from "react";

export default function Jewelery () {
    const [jeweleryData, setJeweleryData] = useState([]);

    const jeweleryFunc = async() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            setJeweleryData(data.filter((item) => item.category == "jewelery"))
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        jeweleryFunc();
    }, []);

    console.log(jeweleryData);

    return(
        <>

            <div className='container-products h-auto my-0 mx-auto flex items-center justify-center '>
                <div className='products-grid grid gap-5 mb-24' style={{gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
                    
                    
                    {jeweleryData.map((product) => (
                        <div className='flex flex-col gap-2' style={{width: "220px", height: "410px", outline: "2px solid", outlineOffset: "-2px", transition: "all 0.15s ease-in"}}>
                                
                            <div className='product-img m-0 p-0 box-border scroll-smooth p-2'>
                                <img src={product.image} alt="product" style={{width: "100%", height: "250px"}} />
                            </div>
                            <div className='product-details flex flex-col gap-1 px-2 pb-2'>
                                <p className='text-base'>{product.title}</p>
                                <p className='font-bold text-xl'>{product.price}$</p>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}