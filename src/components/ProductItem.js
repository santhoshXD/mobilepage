import React from 'react'
import './MainPage.css'
import data from './data'

export default function MainPage() {
    console.log(data.name)
    return (
        <div>
            <header className='header'>
                <h1>Eleganza <span>From 1997</span></h1>
                <nav className='nav-list'>
                    <ul className='list'>
                        <li><a href='#'>ABOUT</a></li>
                        <li><a href='#'>PRODUCTS</a></li>
                        <li><a href='#'>SERVICES</a></li>
                        <li><a href='#'>FAQ</a></li>
                        <li><a href='#'>CONTACT</a></li>
                    </ul>
                </nav>
            </header>
        </div>
        
    )
}
