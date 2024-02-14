import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function Popup({selectedProduct, setSelectedProduct}){

    const [wholeData, setWholeData] = useState([]);
    // const [cartProduct, setCartProduct] = useState([]);

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
    }, []);

    // const addCart = (productId) => {
    //     const findProduct = wholeData.find((card)=> card?.id === productId)
    //     setCartProduct([...cartProduct, findProduct]);
    //     // setCartProduct(findProduct)
    //     console.log(cartProduct)
    // };

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    // const added = useSelector(state => state.items);

    // const add = (product) => {
    //     // const findProduct = wholeData.find((card)=> card?.id === productId)
    //     const newItem = {
    //         id: product.id,
    //         title: product.title,
    //         price: product.price,
    //         image: product.image
    //     }
    //     dispatch(addItem(newItem))
    // };

    // console.log(added)


    const close = () => {
        
        setSelectedProduct(null)
    };


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
        
        <button className='border p-2' onClick={()=>addCart(selectedProduct?.id)}>sepete ekle</button>
        <button className='border p-2' onClick={add(selectedProduct)}>ADD</button>

    </div>
    </div>


    {/* {wholeData.map((product) => (
                    <div className='trending-slider'>
                        <div onClick={()=>addCart(product?.id)} className=" flex flex-col gap-2 cursor-pointer">
                        <div className="item-header  p-2">
                            <img src={product.image} alt="product" style={{width: "210px", height:"210px"}} />
                        </div>
                        <div className="item-description flex flex-col gap-1 px-2 text-wrap" style={{ width:"210px", height:"auto"}}>
                            <p style={{fontSize:"1.2rem"}}>{product.title}</p>
                            <p style={{fontWeight:"bold", fontSize:"1.7rem"}}>{product.price}$</p>
                        </div>
                    </div>
                    </div>
        ))} */}
    </>
    )
}
