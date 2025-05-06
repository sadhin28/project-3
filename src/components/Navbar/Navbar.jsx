import React from 'react';

const Navbar = ({selectedProduct,price}) => {
   
    return (

        <div className="flex  items-center justify-between content-center shadow-sm px-2 h-20">

            <div>
                <h1 className='font-bold  lg:text-3xl md:text-2xl'>MJS Gadgets</h1>
            </div>

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