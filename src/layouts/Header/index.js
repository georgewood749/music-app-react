import React from 'react';
import { NavLink } from 'react-router-dom';
import { BackButton } from '../../components';

import './style.css';

export default function Header() {
    const activeClass = ({ isActive }) => isActive ? 'current' : undefined

    return (
        <div className='headerDiv'>
            <h1><BackButton /> Music App</h1>
            <ul>
                <li><NavLink className={activeClass} to="/">Home</NavLink></li>
                <li><NavLink className={activeClass} to="/artists">Artists</NavLink></li>
                <li><NavLink className={activeClass} to="/albums">Albums</NavLink></li>
            </ul>
        </div>
    )
}
