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
    <div className="z-20 fixed flex sm:justify-between justify-between sm:px-40 px-3 items-center sm:h-24 h-18 sm:w-full w-52 shadow-md bg-white">
        <div className="flex items-center gap-5">
            <Image onClick={() => router.push('/')} className="sm:w-24 w-14 cursor-pointer" src={logo} alt='logo'/>
            <h1 className="font-bold text-2xl sm:block hidden">Shopping Website</h1>
        </div>
        <div className="flex items-center sm:gap-12 gap-5">
    
            <button className="sm:font-bold font-normal sm:text-lg text-sm" onClick={() => router.push('/categories')}
            >CATEGORIES
            </button>

            <ShoppingCartCheckoutIcon onClick={() => router.push('/shopping-cart')} className="cursor-pointer"/>
        </div>

    </div>
    </>
    )
}


