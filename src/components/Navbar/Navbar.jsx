import React from 'react';

const Navbar = ({selectedProduct,price}) => {
   
    return (

        <div className=" grid justify-center items-center md:flex  md:items-center md:justify-between md:content-center shadow-sm px-2 h-20">

            
                <h1 className=' text-center font-bold  lg:text-3xl md:text-2xl'>MJS Gadgets</h1>
            

            <div className=''>

                <ul className='font-bold flex gap-3 lg:gap-6 mg:gap-4 justify-center '>
                    <li>HOME</li>
                    <li>PRODUCT</li>
                    <li>CART {selectedProduct.length}</li>
                    <li>$ {price}</li>
                </ul>

            </div>
        </div>

    );
};

export default Navbar;