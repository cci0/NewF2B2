import React, { useState } from 'react';

import '../styles/todayTop.scss';

export function TodayTop10() {
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

    const getClassName = (change) => {
        if (change > 0) return 'rank-up';
        if (change < 0) return 'rank-down';
        return 'rank-same';
    };

    const getChangeSymbol = (change) => {
        if (change > 0) return `▲${change}`;
        if (change < 0) return `▼${Math.abs(change)}`;
        return '-';
    };

    return (
        <div className="music-board-chart-wrap">
            <div className="chart-title">
                <div className="title">오늘의 TOP10</div>
                <div className="more-view">
                    <img
                        className="more-view-icon"
                        src={`${process.env.PUBLIC_URL}/images/chevron-right.svg`}
                        alt="더보기"
                    />
                    더보기
                </div>
            </div>

            <ul className="top-chart-wrap">
                {albums.map((album, index) => (
                    <li className="chart-list" key={album.id}>
                        <div className="chart-list-detail rank">{index + 1}</div>
                        <div className={getClassName(album.change)}>{getChangeSymbol(album.change)}</div>
                        <img src={album.image} alt={album.title} style={{ height: '50px', width: '50px' }} />
                        <div className="chart-list-detail chart-list-title">{album.title}</div>
                        <div className="chart-list-detail chart-list-artist">{album.artist}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
