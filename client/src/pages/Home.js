import React from 'react';
import { RecentAlbum } from '../components/RecentAlbum';
import { TodayTop10 } from '../components/TodayTop10';
import { GenreMusic } from '../components/GenreMusic';

import albumData from '../dummyData.json';

export default function Home() {
    return (
        <div>
            <RecentAlbum albums={albumData} />
            <TodayTop10 albums={albumData} />
            <GenreMusic albums={albumData} />
        </div>
    );
}
