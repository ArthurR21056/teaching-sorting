import React from 'react'
import { Link } from 'react-router-dom';
import './header.styles.scss'

const Header = () => (
    <header className='header'>
        <div className="options">
        <Link className='option' to='/shop'>
            Bubble Sort
            </Link>
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