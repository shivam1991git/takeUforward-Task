import React, { useState, useEffect } from 'react';
import { getBanner, updateBanner } from '../services/bannerService';

const Dashboard = () => {
    const [banner, setBanner] = useState({
        description: '',
        timer: 0,
        link: '',
        visible: false,
    });

    useEffect(() => {
        const fetchBanner = async () => {
            const data = await getBanner();
            setBanner(data);
        };

        fetchBanner();
    }, []);

    const handleChange = (e) => {
        setBanner({ ...banner, [e.target.name]: e.target.value });
    };

    const handleToggle = () => {
        setBanner({ ...banner, visible: !banner.visible });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateBanner(banner);
        alert('Banner updated successfully');
    };

    return (
        <div className="dashboard">
            <h2>Banner Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Banner Description:
                    <input
                        type="text"
                        name="description"
                        value={banner.description}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Banner Timer (in seconds):
                    <input
                        type="number"
                        name="timer"
                        value={banner.timer}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Banner Link:
                    <input
                        type="text"
                        name="link"
                        value={banner.link}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Banner Visible:
                    <input
                        type="checkbox"
                        checked={banner.visible}
                        onChange={handleToggle}
                    />
                </label>
                <button type="submit">Update Banner</button>
            </form>
        </div>
    );
};

export default Dashboard;
