import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Allproducts = ({ handelselectedProduct}) => {
   const [products,setproducts]=useState([]);
   useEffect(()=>{
     fetch('fakedata.json')
     .then(res=>res.json())
     .then(product=>{
        setproducts(product)
     })
   },[])
    return (
        <div className="w-2/3 text-center">
            <h1 className=" md:text-xl lg:text-2xl font-bold">Available Products : {products.length}</h1>
            <div className="gap-10 mt-5 grid lg:grid-cols-3 md:grid-cols-2">
                {
                    products.map((p)=><Product key={p.id}
                    handelselectedProduct={ handelselectedProduct}
                    products={p} ></Product>)
                }
            </div>
        </div>
    );
};

export default Allproducts;