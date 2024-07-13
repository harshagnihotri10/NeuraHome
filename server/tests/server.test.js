const request = require('supertest');
const express = require('express');
const app = express();

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

describe('POST /update', () => {
    it('should update device state', async () => {
        const response = await request(app).post('/update').send({ deviceId: 'device1', state: 'active' });
        expect(response.statusCode).toBe(200);
    });
});

describe('GET /status/:deviceId', () => {
    it('should return device state', async () => {
        deviceStates['device1'] = 'active';
        const response = await request(app).get('/status/device1');
        expect(response.statusCode).toBe(200);
        expect(response.body.state).toBe('active');
    });
});
