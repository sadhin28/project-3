import SelecCart from "../SelectCart/SelecCart";

const Cart = ({selectedProduct,handelDelate}) => {
 

    return (
        <div className="grid gap-5">
            {
                selectedProduct.map(product=><SelecCart key={product.id} handelDelate={handelDelate} selectedProduct={product}></SelecCart>)
            }
        </div>
    );
};

export default Cart;