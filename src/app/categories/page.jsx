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


export default function categories(){
    const [value, setValue] = useState('all');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return(
        <>
        
        <div className="w-full px-5 pt-24">
                <div className="catego-header flex flex-col items-center pt-4 gap-6">
                    <div className="title-home flex items-center w-full">
                        <a className='flex items-center text-left'> 
                            <ArrowBackIosIcon className='text-base'/>
                            Home
                        </a>
                        <h3 className='text-2xl font-bold uppercase text-center my-0 mx-auto'>All</h3>
                    </div>
                    <div className="filter-btns flex flex-col items-center gap-10 w-full justify-center">

                        <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="secondary tabs example"
                        >
                            <Tab value="all" label="All"/>
                            <Tab value="jewellery" label="Jewellery"/>
                            <Tab value="women's clothing" label="Women's Clothing"/>
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

