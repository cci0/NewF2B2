import React from 'react';
import { useNavigate } from 'react-router';

import '../styles/header.scss';

export function Header() {
    const navigate = useNavigate();

    return (
        <header>
            <nav className="navbar">
                <img className="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
            </nav>
        </header>
    );
}
