'use client'

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Image from "next/image";
import livingroom from '../public/images/livingroom.jpg';
import kitchen from '../public/images/kitchen.jpg';
import electronics from '../public/images/electronic.jpg';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: 0,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function HomeContainer(){
    return(
        <>
        <div className="pt-24">
            <div className="max-w-7xl px-18 mx-auto">
                <div className=" h-1/2 mt-5 py-5 my-5">
                    <div>
                    
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <Item>
                                    <Image className="h-full m-0 p-0 cursor-pointer" src={kitchen} alt='logo'/>
                                </Item>
                                <p className="absolute bottom-32 left-36 z-10 text-white font-bold text-2xl">Kitchen</p>
                            </Grid>
                            <Grid item xs={6}>
                                <Item>
                                    <Image className="h-full m-0 p-0 cursor-pointer" style={{height: "455px"}} src={livingroom} alt='logo'/>
                                    <p className="absolute bottom-32 inset-x-32 z-10 text-white font-bold text-2xl">Live Comfortable</p>
                                </Item>
                            </Grid>
                            <Grid item xs>
                                <Item>
                                    <Image className="h-full m-0 p-0 cursor-pointer" src={electronics} alt='logo'/>
                                    <p className="absolute bottom-32 right-36 z-10 text-white font-bold text-2xl">Electronics</p>
                                </Item>
                            </Grid>
                        </Grid>
    
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}