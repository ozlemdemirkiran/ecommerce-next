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
        <div className="flex justify-between gap-5 w-full px-16 pt-28 pb-10">
            <div className="flex flex-col gap-5 left w-3/4">
                <h2 className="text-lg">Your Selections ({allCart.length}) </h2>
                {uniqueProducts?.map((product) => (
                    <div className="flex justify-between items-center border-y-2 py-5">
                    <div><img src={product?.image} style={{width: "170px", height: "180px"}}/></div>
                    <div className='w-96'>{product?.title}</div>
                    <div className='flex gap-1 justify-center items-center'>
                        <button className='border-2 px-2 bg-gray-200 rounded' onClick={() => removeFromCart(product)}>-</button>
                        <input type="text" className='w-11 py-2 text-center border-2 rounded' value={allCart.filter(item => item?.id === product?.id).length} />
                        <button className='border-2 px-2 bg-gray-200 rounded' onClick={()=>addProductCart(product)}>+</button>
                    </div>
                    <div>{allCart.filter(item => item?.id === product?.id).length * product?.price} $</div>
                    
                    <div className='text-lg cursor-pointer' onClick={() => removeProduct(product)}><DeleteOutlinedIcon /></div>
                </div>
                ))}
            </div>

            <div className="right flex flex-col gap-3 border-2 w-1/4 px-5 py-3">
                <div className="border-b-2 pb-2">
                    <h3 className="text-lg">ORDER SUMMARY</h3>
                </div>
                <div className="flex flex-col gap-5 border-b-2 pb-2">
                    <div className="flex justify-between">
                        <span>Product Total</span>
                        <span>$ {totalPrice()}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping Cost</span>
                        <span>$ 16</span>
                    </div>
                    <div className="flex justify-between font-bold">
                        <span>TOTAL</span>
                        <span className='text-xl'>$ {Number(totalPrice()) + 16} </span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <input className="border p-1" placeholder="İndirim Kodu Gir"/>
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