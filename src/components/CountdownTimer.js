import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ timer }) => {
    const [timeLeft, setTimeLeft] = useState(timer);

    useEffect(() => {
        setTimeLeft(timer);
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timer]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="countdown-timer">
            Time left: {formatTime(timeLeft)}
        </div>
    );
};

export default CountdownTimer;
