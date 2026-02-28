import express from 'express';
import dotenv from 'dotenv';
import countryRoutes from './routes/countryRoutes.js'

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'API is online'
    });
});

app.use('/api', countryRoutes);

app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found'
    });
});

app.listen(serverPort, () => {
    console.log(`- Server online at: http://localhost:${serverPort}`);
});
