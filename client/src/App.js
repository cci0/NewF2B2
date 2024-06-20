import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './styles/reset.css';

import Home from './pages/Home.js';
import { Header } from './components/Header.js';
import Login from './pages/Login.js';
import NotFound from './pages/404.js';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
