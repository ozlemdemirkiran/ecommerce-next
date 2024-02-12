'use client'

import Button from '@mui/material/Button';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
// import ReduxDeneme from '../../../components/reduxdeneme';


export default function shoppingCart(){

    return(
    <>
        <div className="flex justify-between gap-5 w-full px-16 pt-28 pb-10">
            <div className="flex flex-col gap-5 left w-3/4">
                <h2 className="text-lg">Your Selections</h2>
                <div className="flex justify-between items-center border-y-2 py-5">
                    <div><img src={"https://picsum.photos/150/200"}/></div>
                    <div className='w-96'><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fugiat dolore itaque.</span></div>
                    <div className='flex gap-1 justify-center items-center'>
                        <button className='border-2 px-2 bg-gray-200 rounded'>-</button>
                        <input type='text' value={1} pattern='0-9' className='w-11 py-2 text-center border-2 rounded'/>
                        <button className='border-2 px-2 bg-gray-200 rounded'>+</button>
                    </div>
                    {/* <ReduxDeneme/> */}
                    <div>122 $</div>
                    <div className='text-lg'><DeleteOutlinedIcon /></div>
                </div>
            </div>

            <div className="right flex flex-col gap-3 border-2 w-1/4 px-5 py-3">
                <div className="border-b-2 pb-2">
                    <h3 className="text-lg">ORDER SUMMARY</h3>
                </div>
                <div className="flex flex-col gap-5 border-b-2 pb-2">
                    <div className="flex justify-between"><span>Ürün toplam</span><span>$ 126</span></div>
                    <div className="flex justify-between"><span>Kargo bedeli</span><span>$ 16</span></div>
                    <div className="flex justify-between font-bold"><span>TOPLAM</span><span className='text-xl'>$ 142</span></div>
                </div>
                <div className="flex justify-between">
                    <input className="border p-1" placeholder="İndirim Kodu Gir"/>
                    <Button variant="outlined" color="inherit" className='text-gray-800 border-gray-400'>Uygula</Button>
                </div>
                <div>
                    <button className='border px-5 py-3 w-full rounded bg-black text-white hover:duration-300 hover:scale-90 '>Sepeti Onayla</button>
                </div>
            </div>
        </div>
    </>
    )
}