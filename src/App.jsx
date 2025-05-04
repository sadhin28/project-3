import './App.css'
import Navbar from './components/Navbar/Navbar'
import Allproducts from './components/Allproducts/Allproducts'
import Cartcontainer from './components/Cartscontainer/Cartcontainer'
function App() {
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
