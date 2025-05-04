import About from "../About/About";
import Cart from "../Cart/Cart";
const Cartcontainer = ({handleisActive,isactive}) => {
     console.log(isactive)
//    console.log(handleisActive)
    return (
        <div className=" text-center w-1/3 border border-amber-400">
            <h1 className="text-2xl font-bold">Cart Container</h1>
            <div className="flex justify-center gap-5 mt-5 ">
                <button onClick={()=>handleisActive('cart')} className="btn">CART</button>
                <button onClick={()=>handleisActive('about')} className="btn">ABOUT</button>
            </div>
            <div>
                    
            </div>
        </div>
    );
};

export default Cartcontainer;