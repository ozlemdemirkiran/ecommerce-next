import { useState, useEffect } from "react";
import Popup from "../popup";

export default function Electronics () {

    const [electronicsData, setElectronicsData] = useState([]);
    const [selectedElectronics, setSelectedElectronics] = useState(null);

    const electronicFunc = async() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            setElectronicsData(data.filter((item) => item.category == "electronics"))
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        electronicFunc();
    }, []);

    const open = (productId) => {
        const findProduct = electronicsData.find((card) => card?.id === productId);
        setSelectedElectronics(findProduct);
    };
    
    return(
        <>
            <div className='container-products sm:block hidden h-auto my-0 mx-auto flex items-center justify-center '>
                <div className='products-grid grid gap-5 mb-24' style={{gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>

                    {electronicsData.map((product) => (
                        <div onClick={()=>open(product?.id)} className='flex flex-col gap-2 outline outline-2 outline-offset-2' 
                        style={{width: "220px", height: "410px"}}>
                            <div className='product-img m-0 p-0 box-border scroll-smooth p-2 w-full'>
                                <img src={product.image} alt="product" style={{ height: "250px"}} />
                            </div>
                            <div className='product-details flex flex-col gap-1 px-2 pb-2'>
                                <p className='text-base'>{product.title}</p>
                                <p className='font-bold text-xl'>{product.price}$</p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>

            <div className='block sm:hidden'>
                <div className='products-grid flex flex-col gap-5 mb-24'>

                    {electronicsData.map((product) => (
                        <div onClick={()=>open(product?.id)} className='flex flex-col gap-2 outline outline-2 outline-offset-2' 
                        style={{width: "200px", height: "390px"}}>
                            <div className='product-img m-0 p-0 box-border scroll-smooth p-2 w-full'>
                                <img src={product.image} alt="product" style={{ height: "240px"}} />
                            </div>
                            <div className='product-details flex flex-col gap-1 px-2 pb-2'>
                                <p className='text-base'>{product.title}</p>
                                <p className='font-bold text-xl'>{product.price}$</p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
            {selectedElectronics ? <Popup  selectedProduct={selectedElectronics} setSelectedProduct={setSelectedElectronics} /> : null}
        </>
    )
}