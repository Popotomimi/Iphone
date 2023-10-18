import React from 'react'

// React Icons
import {BsApple} from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
            <li>
                <a href="#"><BsApple/></a>
            </li>
            <li className='navResponse'>
                <a href="#">Loja</a>
            </li>
            <li className='navResponse'>
                <a href="#">Mac</a>
            </li>
            <li className='navResponse'>
                <a href="#">iPad</a>
            </li>
            <li className='navResponse'>
                <a href="#">iPhone</a>
            </li>
            <li className='navResponse'>
                <a href="#">Watch</a>
            </li>
            <li className='navResponse'>
                <a href="#">AirPods</a>
            </li>
            <li className='navResponse'>
                <a href="#">Só na Apple</a>
            </li>
            <li className='navResponse'>
                <a href="#">Acessórios</a>
            </li>
            <li className='navResponse'>
                <a href="#">Suporte</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;