import React, { useEffect, useState } from 'react';

import albumData from '../dummyData.json';

import '../styles/todayTop.scss';

export function TodayTop10({ albums }) {
    const getClassName = (change) => {
        if (change > 0) return 'rank-up';
        if (change < 0) return 'rank-down';
        return 'rank-same';
    };

    const getChangeSymbol = (change) => {
        if (change > 0) return `▲ ${change}`;
        if (change < 0) return `▼ ${Math.abs(change)}`;
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
                {albums.slice(0, 10).map((album, index) => (
                    <li className="chart-list" key={album.id}>
                        <div className="chart-list-detail rank">{index + 1}</div>
                        <div className={getClassName(album.change)}>{getChangeSymbol(album.change)}</div>
                        <img className="album-img" src={album.image} alt={album.title} />
                        <div className="chart-list-detail list-info">
                            <div className="chart-list-title">{album.title}</div>
                            <div className="chart-list-artist">{album.artist}</div>
                        </div>
                        <img className="play-icon" src={`${process.env.PUBLIC_URL}/images/play.svg`} alt="재생" />
                    </li>
                ))}
            </ul>
        </div>
    );
}
