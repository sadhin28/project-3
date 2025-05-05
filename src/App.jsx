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

//tost msg

const [selectedProduct,setsectedProducts]=useState([])
const handelselectedProduct=(product)=>{
  const isexist = selectedProduct.find(p=>p.id == product.id)
  if(isexist){
    toast.error('This product has already been added to the card. Cannot be added more than once');
    
  }else{
    const newselecProduct =[...selectedProduct,product]
    setsectedProducts(newselecProduct)
  }
  
   
}

  return (
    <div>
    <Navbar></Navbar>
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
