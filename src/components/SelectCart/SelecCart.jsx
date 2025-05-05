const SelecCart = ({selectedProduct,handelDelate}) => {
    return (
        <div>
            <div className="card bg-base-600 lg:h-20  md:w-60 mx-auto lg:w-120   shadow-sm">
                
                <div className=" font-bold text-xl  card-body grid ">
                  <div className="grid lg:flex text-sm lg:justify-between items-center gap-5">
                    <div className="lg:mx-0 mx-auto">
                    <img className="h-10 w-10 rounded-full" src={selectedProduct.image} alt="" />
                    </div>
                  <h1>{selectedProduct.name}</h1>
                  <div>
                    <button onClick={()=>handelDelate(selectedProduct.id)} className="btn">Delate</button>
                  </div>
                  </div>
                 
                </div>
               
            </div>
        </div>
    );
};

export default SelecCart;