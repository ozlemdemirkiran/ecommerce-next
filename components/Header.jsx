'use client'

import React from "react";
import Image from "next/image";
import logo from '../public/images/logo.jpg';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useRouter } from "next/navigation";

export default function Header() {

    const router = useRouter();

    return (
    <>
    <div className="z-20 fixed flex justify-between px-40 items-center h-24 w-full shadow-md bg-white">
        <div className="flex items-center gap-5">
            <Image onClick={() => router.push('/')} className="w-24 cursor-pointer" src={logo} alt='logo'/>
            <h1 className="font-bold text-2xl">Shopping Website</h1>
        </div>
        <div className="flex items-center gap-12">
    
            <button className="font-bold text-lg" onClick={() => router.push('/categories')}
            >CATEGORIES
            </button>

            <ShoppingCartCheckoutIcon onClick={() => router.push('/shopping-cart')} className="cursor-pointer"/>
        </div>

    </div>
    </>
    )
}


