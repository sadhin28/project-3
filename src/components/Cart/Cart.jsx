import SelecCart from "../SelectCart/SelecCart";

const Cart = ({selectedProduct}) => {
 

    return (
        <div className="grid gap-5">
            {
                selectedProduct.map(product=><SelecCart selectedProduct={product}></SelecCart>)
            }
        </div>
    );
};

export default Cart;