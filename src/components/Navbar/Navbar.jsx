import React from 'react';

const Navbar = ({selectedProduct,price,profiles}) => {
  
    return (
      <div className=''>
        
        <div className=" flex items-center justify-between px-5 py-5 md:py-2">

            
              <div> <img className='w-10 md:w-20 rounded-full' src={profiles[0].img} alt="" /></div>
            
               <div>
                 <ul className='flex gap-5 font-bold items-center'>
                     <li>HOME</li>
                    <li>PRODUCT</li>
                    <li>CART {selectedProduct.length}</li>
                    <li className=' shadow-2xs font-black text-black text-sm border-emerald-500 border-2 px-3 my-2 bg-amber-500 rounded-tr-2xl rounded-bl-2xl'>$ {price}</li>
                 </ul>
               </div>
        </div>
      </div>

    );
};

export default Navbar;