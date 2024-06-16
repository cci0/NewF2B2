import React from 'react';
import { RecentAlbum } from '../components/RecentAlbum';
import { TodayTop10 } from '../components/TodayTop10';
import { GenreMusic } from '../components/GenreMusic';

export default function Home() {
    return (
        <div>
            <RecentAlbum />
            <TodayTop10 />
            <GenreMusic />
        </div>
    );
}
