import React, { useState } from 'react'
import data from './data'
import './DisplayImg.css'
import {AiOutlineZoomIn} from "react-icons/ai"
import {AiTwotoneHeart} from "react-icons/ai"

const DisplayImg = () => {
  console.log("DEBUG :: ", data)

  const [mainImage, setMainImage] = useState(data.url[0])

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const colors = ["red", "black", "green", "grey","yellow"];


  return (
    <div className='container'>
      {
        data.url.map((data, index) =>
          <div className='left'>
            <img className='products' key={index} src={data} alt={data.name} onClick={() => setMainImage(data)} />
          </div>
        )
      }

      <div className='center'>
        <img className='main-image' src={mainImage} alt={mainImage.url} />
        <p className='zoom'><AiOutlineZoomIn/> Click on the image to zoom in</p>
      </div>

      <div className='right'>
        <h1>{data.name}</h1>
        <h5>{data.price}</h5>
        <h4>BRAND :{data.brand}</h4>
        <h4>COLOR: {data.color}</h4>
        <div className='color-div'>
        <ul className='color-ul'>
       {
        colors.map((color,index) => (
        <li key={index} style={{ backgroundColor: color }}/>
        ))
       }
       </ul>
       </div>
        
        <div className='buttons'>
          <select className='button1'>
            <option>Size: 64GB</option>
            <option>Size: 128GB</option>
          </select>
          
          <button className='button2' onClick={handleDecrement}>-</button>
          <span className='span2'>{quantity}</span>
          <button className='button2b' onClick={handleIncrement}>+</button>
        

          <button className='button3'>ADD TO CART</button>
          <div className='wishlist'>
          <p>👉See technical specifications</p>
          <p><AiTwotoneHeart/>Add to wishlist</p>
          </div> 
          <h3>DESCRIPTION</h3>
          <ul className='ul'>
            <li className='justify'>{data.description[0]}</li>
            <li className='justify'>{data.description[1]}</li>
            <li className='justify'>{data.description[2]}</li>
            <li className='justify' >{data.description[3]}</li>
          </ul>
          <h3>TECHNICAL SHEET</h3>
          <li>{data.description[4]}</li>
        </div>
      </div>


    </div >

  )

}

export default DisplayImg
