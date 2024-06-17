import React, { useEffect, useState, useRef } from 'react';
import albumData from '../dummyData.json';

import '../styles/genreMusic.scss';

export function GenreMusic() {
    const [albums, setAlbums] = useState([]);
    const [activeCate, setActiveCate] = useState('All');
    const [data, setData] = useState(albumData);
    const categoryRefs = useRef([]);

    useEffect(() => {
        setAlbums(albumData);
    }, []);

    const categories = ['All', ...new Set(albumData.map((album) => album.genre))];

    const activeCategory = (category, index) => {
        setActiveCate(category);
        if (category === 'All') {
            setData(albumData);
        } else {
            setData(albumData.filter((album) => album.genre === category));
        }
        // 클릭된 카테고리로 포커스 이동
        categoryRefs.current[index].focus();
    };

    return (
        <div className="genre-music-wrap">
            <div className="title">장르별 음악</div>
            <ul className="genre-cate">
                {categories.map((cate, index) => (
                    <li
                        key={cate}
                        ref={(el) => (categoryRefs.current[index] = el)}
                        className={`cat-btn hover ${activeCate === cate ? 'active' : ''}`}
                        onClick={() => activeCategory(cate, index)}
                    >
                        <div className="cate-list">{cate}</div>
                    </li>
                ))}
            </ul>

            <ul className="cate-list-wrap">
                {data.map((album) => (
                    <li className="cate-list" key={album.id}>
                        <div className="image-container">
                            <img className="play-icon" src={`${process.env.PUBLIC_URL}/images/play.svg`} alt="재생" />
                            <img className="cate-album-img" src={album.image} alt={album.title} />
                        </div>
                        <div className="cate-album-info cate-album-title">{album.title}</div>
                        <div className="cate-album-info cate-album-artist">{album.artist}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
