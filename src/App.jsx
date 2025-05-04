import './App.css'
import Navbar from './components/Navbar/Navbar'
import Allproducts from './components/Allproducts/Allproducts'
import Cartcontainer from './components/Cartscontainer/Cartcontainer'
import { useState } from 'react'

function App() {
 const [isactive,setisactive]=useState({
  cart : true,
  Status:'active'
 })
const handleisActive =(Status)=>{
    if(Status == 'cart'){
        setisactive({
           cart : true,
          Status:'active'
        })
    }
    else{
      setisactive({
         cart :false,
        Status:'active'
      })
    }
}
  return (
    <div>
    <Navbar></Navbar>
    {/* All Product Div */}
    <div className='flex justify-between '>
      <Allproducts></Allproducts>
      <Cartcontainer></Cartcontainer>
    </div>
    
    </div>
  )
}

export default App
