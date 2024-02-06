import CloseIcon from '@mui/icons-material/Close';

export default function Popup({selectedProduct, setSelectedProduct}){

    console.log(selectedProduct);

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

        {/* {selectedProduct.map((product)=>())} */}

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

        <button className="urun-olustur-butonu text-white py-2 border-2 rounded-lg text-xl bg-orange-600">Sepete Ekle</button>
    </div>
    </div>
    </>
    )
}

/* 
image: https://picsum.photos/400/500
title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"
category: "electronics"
price: 109

description: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer 
speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache 
Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks 
and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC 
(Error Checking & Correction) to provide the optimized performance and enhanced reliability."
*/