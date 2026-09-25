import { BrowserRouter , Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import RootLayout from "./layouts/RootLayout"
import Products from "./pages/Products"
import Contacts from "./pages/Contacts"
import About from "./pages/About"
import ProductDetail from "./pages/ProductDetail"
function App() {
  return (
    <BrowserRouter>
       <Routes>
            <Route path="/" element={<RootLayout/>} > 
                <Route index element={<Home/>}></Route>
                <Route path="/products" element= {<Products/>}></Route>
                <Route path="/contact" element= {<Contacts/>}></Route>
                <Route path="/about" element ={<About/>}></Route>
                <Route path="/product/:id" element ={<ProductDetail/>}></Route>
                
            </Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App