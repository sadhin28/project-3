import React from 'react';

const Navbar = ({selectedProduct,price}) => {
   
    return (

        <div className="   px-10 p-8 flex justify-between items-center navbar bg-base-100 shadow-sm">

            <div>
                <h1 className='font-bold  lg:text-3xl md:text-2xl'>LOGO</h1>
            </div>

            <div>

                <ul className='font-bold  lg:text-3xl md:text-2xl flex items-center lg:gap-10 md:gap-6 gap-5'>
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