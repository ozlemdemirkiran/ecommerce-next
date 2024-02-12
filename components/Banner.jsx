import Image from "next/image"
import Bookshelf from '../public/images/banner-img.jpg';
import Button from '@mui/material/Button';

export default function Banner() {
    return(
        <>
        <div className="bg-gray-900 max-w-7xl mx-auto my-10" style={{backgroundColor: "#E9E9E9", height: "auto", maxWidth: "1300px"}}>
            <div className="flex gap-2 ">

                <div className="flex flex-col justify-center w-1/2 p-36 gap-14">
                    <h1 className="font-bold text-2xl">Creative harmonious living</h1>
                    <p>Products are all made to standard sizes so that you can mix and match them freely.</p>
                    <Button className="banner-button hover:bg-slate-500 hover:text-white" variant="outlined" style={{}}>Primary</Button>
                </div>

                <div className="w-1/2">
                    <Image className="" style={{maxHeight: "550px"}} src={Bookshelf} alt='Bookshelf'/>
                </div>

            </div> 
        </div>
        </>
    )
}