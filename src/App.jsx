import './App.css'
import Navbar from './components/Navbar/Navbar'
import Allproducts from './components/Allproducts/Allproducts'
import Cartcontainer from './components/Cartscontainer/Cartcontainer'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer'
import Divider from 'daisyui/components/divider'
import { ToastContainer } from 'react-toastify'


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

const [selectedProduct,setsectedProducts]=useState([])
const handeldecracePrice=(id)=>{
      const product=selectedProduct.find((p)=>p.id == id);
      setprice(price-product.price)
}
const handelDelate=(id)=>{
  handeldecracePrice(id)
    const newProduct=selectedProduct.filter((p)=>p.id !== id);
    setsectedProducts(newProduct)
}
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
const [profiles,setprofiles]=useState(arguments)

useEffect(()=>{
   fetch('profile.json')
   .then(res=>res.json())
   .then(data=>{
     setprofiles(data)
     
   }
 )
},[])

  return (
    <div className=''>
   
    <div className=' rounded-bl-2xl rounded-br-2xl z-40 mb-40 fixed top-0 w-11/12 mx-auto bg-gray-900  text-white ' >
        <Navbar profiles={profiles} price={price} selectedProduct={selectedProduct}></Navbar>
    </div>
    
    {/* All Product Div */}
    <div className='flex lg:flex  justify-between mt-30 gap-5'>
      <Allproducts 
        handelselectedProduct={ handelselectedProduct}></Allproducts>
      
      <Cartcontainer
      handelDelate={handelDelate}
      selectedProduct={selectedProduct}
      isactive={isactive}
      handleisActive={handleisActive}></Cartcontainer>
    </div>
     <div className='mt-20'>
       <Footer profiles={profiles}></Footer>
     </div>
     <ToastContainer position='top-center' autoClose='1200' />
    </div>
  )
}

export default App
