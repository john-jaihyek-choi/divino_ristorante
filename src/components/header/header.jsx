import React from 'react';
import "./header.module.css"

const Header = props => {
    return (
        <header className="row topper">
            <h6 id="orderNow" className='col-4 text-white text-center justify-content-center align-self-center'><u>Order Now</u></h6>
            <h2 id="divinoMain" className='col-4 text-white text-center justify-content-center align-self-center'>Divino</h2>
            <span className='col-4 h2 text-white text-center justify-content-center align-self-center'><i className="fas fa-bars"></i></span>
        </header>
    )
}

export default Header;