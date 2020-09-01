import React from 'react';
import styles from "./header.module.css"

const Header = props => {
    return (
        <header className="container fixed-top p-0">
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <h6 id={styles.orderNow} className='col-4 align-self-center text-white text-center'><u>Order Now</u></h6>
                    <h2 className='col-4 align-self-center text-white text-center'>Divino</h2>
                    <span className='col-4 align-self-center text-white text-center h-2'><i className="fas fa-bars fa-2x"></i></span>
                </div>
            </div>
        </header>
    )
}

export default Header;