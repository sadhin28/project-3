import './App.css'
import Navbar from './components/Navbar/Navbar'
import Allproducts from './components/Allproducts/Allproducts'
import Cartcontainer from './components/Cartscontainer/Cartcontainer'
import { useState } from 'react'

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

  return (
    <div>
    <Navbar></Navbar>
    {/* All Product Div */}
    <div className='flex justify-between '>
      <Allproducts></Allproducts>
      <Cartcontainer
      isactive={isactive}
      handleisActive={handleisActive}></Cartcontainer>
    </div>
    
    </div>
  )
}

export default App
