import About from "../About/About";
import Cart from "../Cart/Cart";
const Cartcontainer = () => {

    return (
        <div className=" text-center w-1/3 border border-amber-400">
            <h1 className="text-2xl font-bold">Cart Container</h1>
            <div className="flex justify-center gap-5 mt-5 ">
                <button className="btn">CART</button>
                <button className="btn">ABOUT</button>
            </div>
            <Cart></Cart>
            <About></About>
        </div>
    );
};

export default Cartcontainer;