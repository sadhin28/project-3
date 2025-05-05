import SelecCart from "../SelectCart/SelecCart";

const Cart = ({selectedProduct}) => {
 

    return (
        <div>
            {
                selectedProduct.map(product=><SelecCart selectedProduct={product}></SelecCart>)
            }
        </div>
    );
};

export default Cart;