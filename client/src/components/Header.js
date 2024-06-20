import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';
import dummyData from '../dummyData.json'; // 데이터 임포트

export function Header() {
    const [mbSidebar, setMbSidebar] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const toggleMbSidebar = () => {
        setMbSidebar(!mbSidebar);
    };

    const closeMbSidebar = () => {
        setMbSidebar(false);
    };

    // 검색어 변경 시 검색 수행
    useEffect(() => {
        if (searchQuery) {
            const results = dummyData.filter(
                (album) =>
                    album.albumName.includes(searchQuery) ||
                    album.title.includes(searchQuery) ||
                    album.artist.includes(searchQuery)
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    // 검색 입력 처리
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
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
                    <div className="open-hamburger-menu" onClick={closeMbSidebar}>
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>
                    <ul className="mb-sidebar-menu">
                        <li className="main-search">
                            <input
                                className="main-search-input"
                                type="text"
                                placeholder="FloB 검색"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <button className="main-search-button" type="button">
                                <img
                                    className="search-icon"
                                    src={`${process.env.PUBLIC_URL}/images/search.svg`}
                                    alt="검색"
                                />
                            </button>
                        </li>
                        {/* 검색 결과 표시 */}
                        {searchResults.length > 0 && (
                            <ul className="search-results">
                                {searchResults.map((album) => (
                                    <li className="search-list" key={album.id}>
                                        <Link className="search-toAlbum" to={`/album/${album.id}`}>
                                            <img className="search-img" src={album.image} alt={album.albumName} />
                                            <div className="search-info">
                                                <div className="search-title">
                                                    {album.title} &#183; {album.albumName}
                                                </div>
                                                <div className="search-artist"> {album.artist}</div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <li className="bar-list">
                            <Link to={'/Login'}>
                                <span>로그인</span>
                            </Link>
                        </li>
                        <li className="bar-list">
                            <Link to={'/Signup'}>
                                <span>회원가입</span>
                            </Link>
                        </li>
                        <li className="bar-list">
                            <Link to={'/Calendar'}>
                                <span>최신앨범</span>
                            </Link>
                        </li>
                        <li className="bar-list">
                            <Link to={'/TodoList'}>
                                <span>FloB 차트</span>
                            </Link>
                        </li>
                        <li className="bar-list">
                            <Link to={'/MyDiary'}>
                                <span>장르별음악</span>
                            </Link>
                        </li>
                        <li className="bar-list">
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
