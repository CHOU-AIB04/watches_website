import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Contact from './component/Contact/Contact'
import Categorie from "./component/Categorie/Categorie"
import Detail from './component/Details/Detail'
import { Data } from './context/Data'
import { useEffect } from 'react'
import axios from "axios"
import toast, {Toaster} from "react-hot-toast"

function App() {
  const [count, setCount] = useState(0)
  // this usestate to get all product data from database
  const [AllProduct,setAllProduct] = useState(()=>{
    const data = JSON.parse(window.sessionStorage.getItem("data"))
    return data ? data : []
  });
  // this useeffect to send an axios request to the end point
  useEffect(()=>{
    axios.get("http://localhost/MY_PROJECTS/watches_project/product.php").then((res)=>{
      window.sessionStorage.setItem("data",JSON.stringify(res.data))
      setAllProduct(res.data)
    })
  },[])
   // this function for confirming  all fields that are not empty in a specific form
   const Formconfirmation = (formData)=>{
    let check = 0
      Object.keys(formData).map((input)=>{
          let current = formData[input]
          if (current === "") {
              toast.error(`the ${input} field is required`)
          }else{
              check++
          }
      })
    return check
  }
  // this function for handling change for inputs field
  const Handlechange = (event,setFormData,FormData)=>{
    let {tagName,name,value}  = event.target
    // handle the input type 
    if (tagName === "INPUT") {
      let {type} = event.target
      if (type !== "file") {
        setFormData({...FormData,[name]:value}) 
      }else{
          let {files} = event.target
          setFormData({...FormData,[name]:files[0]})
      }
    }else{
      setFormData({...FormData,[name]:value})
    }
  }
  return (
    <>
    <Data.Provider value={{AllProduct,setAllProduct,Formconfirmation,Handlechange}}>
    <Router>
      <Toaster position='top-right' />
      <Header />
      <Routes>
        <Route  index element={<Home />}/>
        <Route  path='/Categorie' element={<Categorie />}/>
        <Route  path='/Contact' element={<Contact />}/>
        <Route path='/ProductDetails/:id' element={<Detail />} />
      </Routes>
      <Footer />
    </Router>
    </Data.Provider>
    
    </>
  )
}

export default App
