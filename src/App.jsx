import './App.css'
import Navbar from './components/Navbar/Navbar'
import Allproducts from './components/Allproducts/Allproducts'
import Cartcontainer from './components/Cartscontainer/Cartcontainer'
import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
 const [isactive,setisactive]=useState({
  cart :true,
  Status:'cart'
 })
//  console.log(isactive)
const handleisActive =(Status)=>{
    if(Status == "cart"){
      setisactive({
        cart : true,
        Status:'cart'
      })
    }else{
      setisactive({
        cart:false,
        Status:'about'
      })
    }
}



const [price,setprice]=useState(5000)
const handleincrementPrice=(pr)=>{
      setprice(price+pr)
}

const handeldecrementPrice=(pr)=>{
  
}
const [selectedProduct,setsectedProducts]=useState([])
const handelselectedProduct=(product)=>{
  const isexist = selectedProduct.find(p=>p.id == product.id)
  if(isexist){
    toast.error('This product has already been added to the card. Cannot be added more than once');
    
  }else{
    handleincrementPrice(product.price)
    const newselecProduct =[...selectedProduct,product]
    setsectedProducts(newselecProduct)
  }
    
   
}

  return (
    <div>
   
    <Navbar price={price} selectedProduct={selectedProduct}></Navbar>
    {/* All Product Div */}
    <div className='flex justify-between mt-10'>
      <Allproducts 
        handelselectedProduct={ handelselectedProduct}></Allproducts>
      
      <Cartcontainer
       
      selectedProduct={selectedProduct}
      isactive={isactive}
      handleisActive={handleisActive}></Cartcontainer>
    </div>
    
    </div>
  )
}

export default App
