const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

const EMAIL_KEY = process.env.MAILERLITE_API_KEY;
const EMAIL_GROUP = process.env.MAILERLITE_GROUP_ID;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/subscribe', async (req, res) => {
    try {
        const { name, email, phone, age, sex, ip } = req.body;

        // Server-side validation
        if (!name || !/^[a-zA-Z\s]{2,50}$/.test(name.trim())) {
            return res.status(400).json({ message: 'Invalid name' });
        }
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            return res.status(400).json({ message: 'Invalid email' });
        }
        if (!phone || !/^\+?[1-9]\d{1,14}$/.test(phone.trim())) {
            return res.status(400).json({ message: 'Invalid phone number' });
        }
        if (!age || isNaN(age) || age < 18 || age > 120) {
            return res.status(400).json({ message: 'Invalid age' });
        }
        if (!sex || !['male', 'female'].includes(sex)) {
            return res.status(400).json({ message: 'Invalid sex' });
        }

        const params = {
            email: email,
            fields: {
                name: name,
                phone: phone,
                age: age,
                sex: sex,
                ip: ip
            },
            groups: [EMAIL_GROUP],
            status: "active"
        };

        const response = await axios.post('https://connect.mailerlite.com/api/subscribers', params, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${EMAIL_KEY}`
            }
        });

        res.status(200).json({ message: 'Subscription successful', data: response.data });
    } catch (error) {
        console.error('Subscription error:', error.response ? error.response.data : error.message);
        if (error.response && error.response.data.message === 'Unauthenticated.') {
            res.status(401).json({ message: 'Authentication failed. Please check your API key.' });
        } else {
            res.status(500).json({ message: 'Subscription failed', error: error.response ? error.response.data : error.message });
        }
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});