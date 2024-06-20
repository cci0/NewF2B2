import React, { useEffect, useState } from 'react';

import '../styles/recentAlbum.scss';

export function RecentAlbum({ albums }) {
    return (
        <div className="recentAlbum-wrap">
            <div className="title">최근 앨범</div>
            <ul className="recent-album">
                {albums.map((album) => (
                    <li className="recent-album-list" key={album.id}>
                        <img src={album.image} alt={album.title} style={{ height: '100px', width: '100px' }} />
                        <div className="recent-title">
                            <div className="recent-album-detail recent-album-name">{album.albumName}</div>
                            <div className="recent-album-detail recent-album-genre">{album.genre}</div>
                        </div>
                        <div className="recent-album-detail recent-album-artist">{album.artist}</div>
                        <div className="recent-album-detail recent-album-release-date">{album.releaseDate}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
