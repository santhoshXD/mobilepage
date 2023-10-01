import React from 'react'
import './MainPage.css'
import { AiOutlineMenu } from "react-icons/ai"

export default function MainPage() {
    
    return (
        <div>
            <header className='header'>
                <h1>Eleganza <span>From 1997</span></h1>
                <nav className='nav-list'>
                    <ul className='list'>
                        <li><a href='#'>ABOUT</a></li>
                        <li className='listselect'><a>
                            <select className='select'>
                                <option className='option'>PRODUCTS</option>
                                <option className='option'>PRODUCTS 1</option>
                            </select></a> </li>
                        <li><a href='#'>SERVICES</a></li>
                        <li><a href='#'>FAQ</a></li>
                        <li><a href='#'>CONTACT</a></li>
                        <li><a><AiOutlineMenu /></a></li>
                    </ul>
                </nav>
            </header>
            <p>Technology   <span className='tech'>iPhone 12</span></p>
        </div>

    )
}
