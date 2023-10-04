import React, { useState } from 'react'
import data from './data'
import './DisplayImg.css'
import { AiFillHeart, AiOutlineZoomIn } from "react-icons/ai"



const DisplayImg = () => {

  const [mainImage, setMainImage] = useState(data.url[0])

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };




  return (
    <div className='container'>
      <div className="left-main">
        <div>
        {
          data.url.map((data, index) =>
            <div className='left'>
              <img className='products' key={index} src={data} alt={data.name} onClick={() => setMainImage(data)} />
            </div>
          )
        }
       </div>

      <div className='center'>
        <img className='main-image' src={mainImage} alt={mainImage.url} />
        <p className='zoom'><AiOutlineZoomIn/>click on the image to zoom in</p>
      </div>
      </div>


      <div className='right'>
        <h1>{data.name}</h1>
        <p>{data.price}</p>
        <p>BRAND :{data.brand}</p>
        <p>COLOR:{data.color}</p>
        <ul className='color-ul'>
          {
            data.colors.map((colors, index) =>
              <li key={index} style={{ backgroundColor: colors }} />
            )
          }
        </ul>
        <div className="boxes">

          <div className="custom-select">
            <div className={`select-box ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
              {selectedOption || 'Size: 32 GB'}
              <i className={`arrow ${isOpen ? 'up' : 'down'}`} />
            </div>
            <ul className={`options ${isOpen ? 'open' : ''}`}>
              {data.options.map((option) => (
                <li key={option} onClick={() => handleOptionClick(option)}>
                  {option}
                </li>
              ))}
            </ul>

          </div>

          <div className='count'>
            <div className='decrement' onClick={handleDecrement}>-</div>
            <div>{quantity}</div>
            <div className='increment' onClick={handleIncrement}>+</div>
          </div>


          <div className='addcart'>
            <button className='add'>ADD TO CART</button>
          </div>
        </div>
        <p className='wish'>👉see technical specifications</p>
        <p className='wish1'><AiFillHeart /> Add to wishlist</p>
        <h4>DESCRIPTION</h4>
        <div className='description'>
          <ul style={{width:"70%"}}>
            <li>{data.description[0]}</li>
            <li>{data.description[1]}</li>
            <li>{data.description[2]}</li>
            <li>{data.description[3]}</li>
          </ul>
        </div>
        <h4>TECHNICAL SHEETS</h4>
        <ul>
          <li>{data.technicalsheets[0]}</li>
        </ul>


      </div>



    </div >

  )

};

export default DisplayImg
