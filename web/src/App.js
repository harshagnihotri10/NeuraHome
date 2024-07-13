import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:3000/devices');
            setDevices(result.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>IoT Home Automation System</h1>
            <ul>
                {devices.map(device => (
                    <li key={device.id}>{device.name}: {device.state}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
