import React from 'react'
import Homepage from './Component/HomePage/Homepage'
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import Dashboard from './Pages/Dashboard'
const App = () => {
  return (
    <BrowserRouter>
       <Routes>
           <Route path='/' element={<Homepage/>}/>
           <Route path='dashboard' element={<Dashboard/>}/>
       </Routes>
    </BrowserRouter>
  )
}
export default App