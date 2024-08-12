import React from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import './index.css';

const App = () => {
    return (
        <div className="app">
            <Banner />
            <Dashboard />
        </div>
    );
};

export default App;
