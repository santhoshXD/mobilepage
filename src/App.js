import React from 'react'
import MainPage from './components/MainPage'
import DisplayImg from './components/DisplayImg'
import ProductDescription from './components/ProductDescription'
import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"


export default function App() {
  return (
    <div >
      <MainPage/>
      <DisplayImg/> 
      <ProductDescription/>

      <BrowserRouter>
      <Routes>
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
