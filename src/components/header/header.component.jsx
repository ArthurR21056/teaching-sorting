import React from 'react'
import { Link } from 'react-router-dom';
import './header.styles.scss'

const Header = () => (
    <header className='header'>
        <div className="logo-container">
        <Link className='logo-title' to="/">
            Sorting Algorthims
        </Link>
        </div>
        <div className="options">
            <div className="option">
                <Link to='/shop'>
                    Bubble Sort
            </Link>
            </div>
            <Link className='option' to='/shop'>
                Insertion Sort
            </Link>
            <Link className='option' to='/signin'>
                Merge Sort
        </Link>
        </div>

    </header>
);

export default Header