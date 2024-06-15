import React, { useState } from 'react';

import '../styles/recentAlbum.scss';

export function RecentAlbum() {
    const [albums, setAlbums] = useState([
        {
            id: '1',
            albumName: '앨범 이름 1',
            title: 'HEY A',
            genre: '팝',
            artist: 'IVE',
            releaseDate: '2024-06-01',
            image: 'https://via.placeholder.com/100',
            change: 0, // 순위 변동 없음
        },
        {
            id: '2',
            albumName: '앨범 이름 2',
            title: 'SPOT!',
            genre: '인디',
            artist: 'ZICO',
            releaseDate: '2024-06-02',
            image: 'https://via.placeholder.com/100',
            change: 0, // 순위 변동 없음
        },
        {
            id: '3',
            albumName: '앨범 이름 3',
            title: 'Magnetic',
            genre: '댄스/아이돌',
            artist: 'ILLIT',
            releaseDate: '2024-06-03',
            image: 'https://via.placeholder.com/100',
            change: 1, // 1단계 상승
        },
        {
            id: '4',
            albumName: '앨범 이름 4',
            title: 'Armageddon',
            genre: '댄스/아이돌',
            artist: 'aespa',
            releaseDate: '2024-06-04',
            image: 'https://via.placeholder.com/100',
            change: -1, // 1단계 하락
        },
        {
            id: '5',
            albumName: '앨범 이름 5',
            title: '나는 아픈 건 딱 질색이니까',
            genre: '댄스/아이돌',
            artist: '(여자)아이들',
            releaseDate: '2024-06-05',
            image: 'https://via.placeholder.com/100',
            change: 0, // 순위 변동 없음
        },
        {
            id: '6',
            albumName: '앨범 이름 6',
            title: '첫 만남은 계획대로 되지 않아',
            genre: '댄스/아이돌',
            artist: 'WS (투어스)',
            releaseDate: '2024-06-05',
            image: 'https://via.placeholder.com/100',
            change: 0,
        },
        {
            id: '7',
            albumName: '앨범 이름 7',
            title: '미안해 미워해 사랑해',
            genre: 'OST',
            artist: 'Crush',
            releaseDate: '2024-06-05',
            image: 'https://via.placeholder.com/100',
            change: 0,
        },
        {
            id: '8',
            albumName: '앨범 이름 8',
            title: '한 페이지가 될 수 있게',
            genre: '밴드',
            artist: 'DAY6 (데이식스)',
            releaseDate: '2024-06-05',
            image: 'https://via.placeholder.com/100',
            change: 3,
        },
        {
            id: '9',
            albumName: '앨범 이름 9',
            title: '천상연',
            genre: 'OST',
            artist: '이창섭',
            releaseDate: '2024-06-05',
            image: 'https://via.placeholder.com/100',
            change: -2,
        },
        {
            id: '10',
            albumName: '앨범 이름 10',
            title: '예뻤어',
            genre: '밴드',
            artist: 'DAY6 (데이식스)',
            releaseDate: '2024-06-05',
            image: 'https://via.placeholder.com/100',
            change: 0,
        },
    ]);

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
