'use client'

import Button from '@mui/material/Button';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useState, useEffect } from 'react';


export default function shoppingCart(){
    const [allCart, setAllCart] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setAllCart(JSON.parse(storedCart));
        }
    }, []);
    
    const uniqueProducts = allCart.filter((item, index) => {
        const itemId = item?.id;
        return allCart.findIndex(item => item?.id === itemId) === index;
    });

    const removeFromCart = (productt) => {
        const firstProduct = allCart.findIndex(product => product?.id === productt?.id);
        const newProductList = allCart.splice(firstProduct, 1);
        localStorage.setItem('cart', JSON.stringify(allCart));
        setAllCart(JSON.parse(localStorage.getItem('cart')))
    };
    
    const addProductCart = (product) => {
        localStorage.setItem('cart', JSON.stringify([...allCart, product]));
        setAllCart([...allCart, product])
    }

    const removeProduct = (productt) => {
        const newProductList = uniqueProducts.filter(product => product !== productt);
        localStorage.setItem('cart', JSON.stringify(newProductList));
        setAllCart(newProductList)
    }

    const totalPrice = () => {
        const getTotal = allCart.reduce((total, product) => total + product.price, 0);
        return getTotal.toFixed(2);
    }

    return(
    <>
        <div className="flex sm:flex-row flex-col justify-between gap-5 sm:w-full w-60 sm:px-16 px-1 sm:pt-28 pt-16 sm:pb-10 pb-5">
            <div className="flex flex-col gap-5 left sm:w-3/4 w-full">
                <h2 className="text-lg">Your Selections ({allCart.length}) </h2>
                {uniqueProducts?.map((product) => (
                
                <div className='flex sm:flex-row flex-col gap-2 sm:w-full w-52 items-center sm:justify-between justify-start border-y-2 sm:px-8 px-1 sm:py-5 py-1'>
                    <div><img className='cart-image sm:w-28 w-12 sm:h-36 h-16' src={product?.image} /></div>
                    <div className="flex justify-between gap-2 items-center ">
                    
                        <div className='w-96 sm:block hidden'>{product?.title}</div>

                        <div className='flex gap-1 justify-center items-center'>
                            <button className='border-2 sm:px-2 px-1 bg-gray-200 rounded' onClick={() => removeFromCart(product)}>-</button>
                            <input type="text" className='sm:w-11 w-5 sm:py-2 py-1 text-center border-2 rounded' value={allCart.filter(item => item?.id === product?.id).length} />
                            <button className='border-2 sm:px-2 px-1 bg-gray-200 rounded' onClick={()=>addProductCart(product)}>+</button>
                        </div>
                
                    </div>
                    <div className='flex items-center gap-2'>
                        <div>{allCart.filter(item => item?.id === product?.id).length * product?.price} $</div>
                        <div className='text-lg cursor-pointer' onClick={() => removeProduct(product)}><DeleteOutlinedIcon /></div>
                    </div>
                </div>
                ))}
            </div>

            <div className="right flex flex-col gap-3 border-2 sm:w-1/4 w-48 sm:px-5 px-1 py-3">
                <div className="border-b-2 pb-2">
                    <h3 className="text-lg">ORDER SUMMARY</h3>
                </div>
                <div className="flex flex-col gap-5 border-b-2 pb-2">
                    <div className="flex justify-between sm:text-base text-sm">
                        <span>Product Total</span>
                        <span>$ {totalPrice()}</span>
                    </div>
                    <div className="flex justify-between sm:text-base text-sm">
                        <span>Shipping Cost</span>
                        <span>$ 16</span>
                    </div>
                    <div className="flex justify-between font-bold sm:text-base text-sm">
                        <span>TOTAL</span>
                        <span className='text-xl'>$ {Number(totalPrice()) + 16} </span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <input className="border p-1 sm:w-full w-28" placeholder="İndirim Kodu Gir"/>
                    <Button variant="outlined" color="inherit" className='text-gray-800 border-gray-400'>Submit</Button>
                </div>
                <div>
                    <button className='border px-5 py-3 w-full rounded bg-black text-white hover:duration-300 hover:scale-90 '>Checkout</button>
                </div>
            </div>
        </div>


    </>
    )
}