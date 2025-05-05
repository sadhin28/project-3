const SelecCart = ({selectedProduct}) => {
    return (
        <div>
            <div className="card bg-base-600 h-20  md:w-60 mx-auto lg:w-120   shadow-sm">
                
                <div className=" font-bold text-xl  card-body grid ">
                <h1>{selectedProduct.name}</h1>
                </div>
               
            </div>
        </div>
    );
};

export default SelecCart;