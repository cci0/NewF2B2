import React, { useEffect, useState } from 'react';
import albumData from '../dummyData.json';

import '../styles/genreMusic.scss';

export function GenreMusic() {
    const [albums, setAlbums] = useState([]);
    const [activeCate, setActiveCate] = useState('All');
    const [data, setData] = useState(albumData);

    useEffect(() => {
        setAlbums(albumData);
    }, []);

    const categories = ['All', ...new Set(albumData.map((album) => album.genre))];

    const activeCategory = (category) => {
        setActiveCate(category);
        if (category === 'All') {
            setData(albumData);
        } else {
            setData(albumData.filter((album) => album.genre === category));
        }
    };

    return (
        <div className="genre-music-wrap">
            <div className="title">장르별 음악</div>
            <div>
                {categories.map((cate) => (
                    <button
                        key={cate}
                        className={`cat_btn hover ${activeCate === cate ? 'active' : ''}`}
                        onClick={() => activeCategory(cate)}
                    >
                        {cate}
                    </button>
                ))}
            </div>

            <ul className="cata-list-wrap">
                {data.map((album, index) => (
                    <li key={album.id}>
                        <img src={album.image} alt={album.title} />
                        <div>{album.albumName}</div>
                        <div>{album.title}</div>
                        <div>{album.artist}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
