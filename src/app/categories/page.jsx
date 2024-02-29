'use client'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import All from '../../../components/categories-pages/All';
import Jewelery from '../../../components/categories-pages/Jewelery';
import WomensClothing from '../../../components/categories-pages/WomensClothing';
import MensClothing from '../../../components/categories-pages/MensClothing';
import Electronics from '../../../components/categories-pages/Electronics';
import { useRouter } from "next/navigation";


export default function categories(){
    const [value, setValue] = useState('all');

    const router = useRouter();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return(
        <>
        
        <div className="sm:w-full w-60 sm:px-5 px-0 sm:pt-24 pt-12">
                <div className="catego-header flex flex-col items-center sm:w-full w-60  pt-4 gap-6">
                    <div className="title-home flex items-center sm:w-full w-60">
                        <button className='flex items-center text-left'
                        onClick={() => router.push('/')}> 
                            <ArrowBackIosIcon className='text-base'/>
                            Home
                        </button>
                        <h3 className='text-2xl font-bold uppercase text-center my-0 mx-auto'>{value}</h3>
                    </div>
                    <div className="sm:m-0 ml-0 filter-btns flex flex-col items-center sm:gap-10 gap-2 sm:w-full w-60 justify-center">

                        <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="secondary tabs example"
                        className='sm:block hidden'
                        >
                            <Tab value="all" label="All"/>
                            <Tab value="jewellery" label="Jewellery"/>
                            <Tab value="women's clothing" label="Women's Clothing"/>
                            <Tab value="men's clothing" label="Men's Clothing" />
                            <Tab value="electronics" label="Electronics" />
                        </Tabs>

                        <Tabs
                        orientation="vertical"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className='sm:hidden block'
                        >
                            <Tab value="all" label="All" />
                            <Tab value="jewellery" label="Jewellery" />
                            <Tab value="women's clothing" label="Women's Clothing" />
                            <Tab value="men's clothing" label="Men's Clothing" />
                            <Tab value="electronics" label="Electronics" />
                        </Tabs>

                        <div >
                        {value === "all" && (
                            <div>
                                <All/>
                            </div>
                        )}
                        {value === "jewellery" && (
                            <div>
                                <Jewelery/>
                            </div>
                        )}
                        {value === "women's clothing" && (
                            <div>
                                <WomensClothing/>
                            </div>
                        )}
                        {value === "men's clothing" && (
                            <div>
                                <MensClothing/>
                            </div>
                        )}
                        {value === "electronics" && (
                            <div>
                                <Electronics/>
                            </div>
                        )}
                        </div>
                        
                    </div>
                </div>
        </div>

        </>
    )
}

