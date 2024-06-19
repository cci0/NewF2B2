import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.scss';

export function Header() {
    const [mbSidebar, setMbSidebar] = useState(false);

    const toggleMbSidebar = () => {
        setMbSidebar(!mbSidebar);
    };

    const closeMbSidebar = () => {
        setMbSidebar(false);
    };

    return (
        <header>
            <nav className="navbar">
                {/* 모바일 버전 */}

                <Link to={'/'}>
                    <img className="logo" src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" />
                </Link>

                <div className="mb-hamburger-menu" onClick={toggleMbSidebar}>
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
            </nav>
            {/* 모바일 사이드 바 */}
            {mbSidebar && (
                <div className="mb-sidebar">
                    <div className="mb-hamburger-menu" onClick={closeMbSidebar}>
                        <span className="line line1">-</span>
                        <span className="line line2">-</span>
                        <span className="line line3">-</span>
                    </div>
                    <ul className="mb-sidebar-menu">
                        <li class="main-search">
                            <input class="main-search-input" type="text" placeholder="FloB 검색" />
                            <button class="main-search-button" type="button" onclick="searchAlbum()">
                                <img
                                    className="search-icon"
                                    src={`${process.env.PUBLIC_URL}/images/search.svg`}
                                    alt="검색"
                                />
                            </button>
                        </li>
                        <li>
                            <Link to={'/Login'}>
                                <span>로그인</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Signup'}>
                                <span>회원가입</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/Calendar'}>
                                <span>최신앨범</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/TodoList'}>
                                <span>FloB 차트</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/MyDiary'}>
                                <span>장르별음악</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/MyDiary'}>
                                <span>보관함</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
