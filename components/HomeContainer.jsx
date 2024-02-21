'use client'

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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
        <div className="sm:pt-24 pt-4 sm:w-full w-52">
            <div className="sm:max-w-7xl max-w-80 sm:px-18 px-0 sm:mx-auto mx-0">
                <div className=" h-1/2 mt-5 sm:py-5 py-0 sm:my-5 my-0">
                    <div>
                        <Grid container spacing={3} className='flex sm:flex-row flex-col'>
                            <Grid item xs>
                                <Item>
                                    <Image className="h-full sm:w-96 w-52 m-0 p-0 cursor-pointer" src={kitchen} alt='logo'/>
                                </Item>
                                <p className="sm:block hidden absolute bottom-32 left-36 z-10 text-white font-bold text-2xl">Kitchen</p>
                            </Grid>
                            <Grid item xs={6}>
                                <Item className='sm:w-full w-52'>
                                    <Image className=" container-image sm:w-full w-52 m-0 p-0 cursor-pointer" style={{height: "455px"}} src={livingroom} alt='logo'/>
                                    <p className=" sm:block hidden absolute bottom-32 inset-x-32 z-10 text-white font-bold text-2xl">Live Comfortable</p>
                                </Item>
                            </Grid>
                            <Grid item xs>
                                <Item>
                                    <Image className="h-full sm:w-96 w-52 m-0 p-0 cursor-pointer" src={electronics} alt='logo'/>
                                    <p className=" sm:block hidden absolute bottom-32 right-36 z-10 text-white font-bold text-2xl">Electronics</p>
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