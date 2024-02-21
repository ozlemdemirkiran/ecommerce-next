import Image from "next/image"
import Bookshelf from '../public/images/banner-img.jpg';
import Button from '@mui/material/Button';

export default function Banner() {
    return(
        <>
        <div className="banner-div bg-gray-900 sm:w-10/12 w-52 sm:mx-auto mx-0 sm:my-10 my-0 h-auto" 
        style={{backgroundColor: "#E9E9E9"}}>
            <div className="flex sm:gap-2 gap-1 flex-row sm:justify-center justify-start">

                <div className="flex flex-col justify-center sm:w-1/2 w-52 sm:p-36 p-2 gap-14">
                    <h1 className="font-bold text-2xl">Creative harmonious living</h1>
                    <p>Products are all made to standard sizes so that you can mix and match them freely.</p>
                    <Button className="banner-button hover:bg-slate-500 hover:text-white" 
                    variant="outlined">Primary</Button>
                </div>

                <div className="w-1/2 sm:block hidden">
                    <Image style={{maxHeight: "550px"}} src={Bookshelf} alt='Bookshelf'/>
                </div>

            </div> 
        </div>
        </>
    )
}