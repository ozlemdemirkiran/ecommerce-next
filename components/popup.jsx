import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';


export default function Popup({selectedProduct, setSelectedProduct}){

    const [wholeData, setWholeData] = useState([]);
    //const [cart, setCart] = useState([]);
    const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
    });

    const DataFunc = async() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            setWholeData(data)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        DataFunc();
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // POPUP Close
    const close = () => {
        
        setSelectedProduct(null)
    };

    //Add to cart
    const itemPush = () => {
        const findProduct = wholeData.find((card)=> card?.id === selectedProduct?.id)
        kkk(findProduct)
    }
    
    function kkk (item) {
        const controlProduct = cart.find((card)=> card?.id === selectedProduct?.id)
        setTimeout(() => {
            if(controlProduct){
                setCart([...cart, item])
                console.log(cart)
                //console.log("bu ürün var...")  
            }else{
                setCart([...cart, item])
                console.log(cart)
            }
        }, 1100)
    }

    return(
    <>
    <div className={ selectedProduct ? '' : 'hidden'}>
    <div className="popup-kapsayici rounded-lg w-3/5 z-30 flex flex-col gap-1 py-1 px-4 h-1/3 bg-gray-100 
    fixed right-0 left-0 top-0 bottom-0 m-auto overflow-y-auto" 
    style={{height: "610px"}}>

        <button className=" flex justify-end carpi-butonu h-6  w-auto r-4">
            <CloseIcon onClick={close}/>
        </button>

        <div className="w-full flex gap-3">
            <img src={selectedProduct?.image} alt="product" className="urun-adi w-1/2  border-2 rounded-lg"
            style={{ height:"340px"}} />

            <div className="flex flex-col text-slate-500 text-xl text-end gap-6 urun-fiyati w-1/2 px-4 border-2 py-10 rounded-lg">
                <h1 className="font-medium">{selectedProduct?.title}</h1>
                <span className="font-normal">Category : {selectedProduct?.category}</span>
                <h2 className="font-extrabold">Price : {selectedProduct?.price}$</h2>
            </div>
        </div>

        <div className=" urun-aciklamasi flex flex-col gap-1 px-4 border-2 py-2 rounded-md">
            <h1 className="font-bold text-slate-400">DESCRİPTİON</h1>
            <span>{selectedProduct?.description}</span>
        </div>

        <button className="urun-olustur-butonu text-white py-2 border-2 rounded-lg text-xl bg-orange-600">Add to cart</button>

        <button onClick={() => itemPush()} className='border p-2 bg-gray-500'>Add</button>
    </div>
    </div>

    </>
    )
}
