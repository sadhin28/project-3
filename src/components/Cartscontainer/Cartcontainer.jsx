import About from "../About/About";
import Cart from "../Cart/Cart";
import './Cartcontainer.css'
const Cartcontainer = ({handleisActive,isactive, selectedProduct}) => {
    //  console.log(isactive)
//    console.log(handleisActive)
    return (
        <div className=" text-center w-1/3 ">
            <h1 className="text-2xl font-bold">Cart Container</h1>
            <div className="flex justify-center gap-5 mt-5 ">
                <button onClick={()=>handleisActive('cart')} className={` ${isactive.cart?'btn active':'btn'}`}>CART</button>
                <button onClick={()=>handleisActive('about')} className={`${isactive.cart?'btn':'active btn'}`}>ABOUT</button>
            </div>
            <div className="divider md:w-60 mx-auto lg:w-120"></div>
            <div className="mt-3">
                    {
                        isactive.cart?<Cart selectedProduct={selectedProduct}></Cart>:<About></About>
                    }
            </div>
        </div>
    );
};

export default Cartcontainer;