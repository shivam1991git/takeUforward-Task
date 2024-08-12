import React, { useState, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import { getBanner } from '../services/bannerService';

const Banner = () => {
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        const fetchBanner = async () => {
            const data = await getBanner();
            setBanner(data);
        };

        fetchBanner();
    }, []);

    if (!banner || !banner.visible) return null;

    return (
        <div className="banner">
            <h1>{banner.description}</h1>
            <CountdownTimer timer={banner.timer} />
            <a href={banner.link} target="_blank" rel="noopener noreferrer">Click Here</a>
        </div>
    );
};

export default Banner;
