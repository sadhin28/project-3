import React from 'react';
import { ToastContainer } from 'react-toastify';

const Product = ({ products , handelselectedProduct}) => {
    const { name, image, price, description } = products
    
    return (
        <div className="card bg-base-600 w-50 lg:w-70 md:w-60 h-130 my-auto mx-auto not-visited:shadow-sm">
            <img className=' w-60 h-70 p-3 mx-auto mt-5' src={image} alt="" />
            <div className=' mb-3 p-3 text-start font-bold'>
                <h1 className='card-title text-xl lg:text-2xl'>{name}</h1>
                <p>Price : {price}</p>
                <p>Description : {description}</p>
                <div className='text-start p-3 '>
                <button onClick={()=> handelselectedProduct(products)} className=' text-xl lg:text-2xl btn font-bold bg-black text-white mb-5 w-full'>Add To Cart</button>
                <ToastContainer position='top-center'/>
            </div>
            </div>
            
        </div>
    );
};

export default Product;