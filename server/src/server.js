const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let deviceStates = {};

app.post('/update', (req, res) => {
    const { deviceId, state } = req.body;
    deviceStates[deviceId] = state;
    res.status(200).send('State updated');
});

app.get('/status/:deviceId', (req, res) => {
    const { deviceId } = req.params;
    res.status(200).json({ state: deviceStates[deviceId] || 'unknown' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
