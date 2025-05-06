import About from "../About/About";
import Cart from "../Cart/Cart";
import './Cartcontainer.css'
const Cartcontainer = ({handleisActive,isactive, selectedProduct,handelDelate}) => {
    //  console.log(isactive)
//    console.log(handleisActive)
    return (
        <div className="text-center w-1/3 ">
            <h1 className="lg:text-2xl md:tex-xl font-bold">Cart & About</h1>
            <div className="grid lg:flex md:flex gap-2 lg:justify-center md:justify-center">
                <button onClick={()=>handleisActive('cart')} className={` ${isactive.cart?'btn active':'btn'}`}>CART</button>
                <button onClick={()=>handleisActive('about')} className={`${isactive.cart?'btn':'active btn'}`}>ABOUT</button>
            </div>
            <div className="divider md:w-40 mx-auto lg:w-90"></div>
            <div className="mt-3">
                    {
                        isactive.cart?<Cart handelDelate={handelDelate} selectedProduct={selectedProduct}></Cart>:<About></About>
                    }
            </div>
        </div>
    );
};

export default Cartcontainer;