import dotenv from 'dotenv';
import express from 'express';
import dicomRoutes from './src/routes/dicom.route.js';
import cors from 'cors';


dotenv.config();

import path from 'path';
import { fileURLToPath } from 'url';

// Create __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({ origin: process.env.ORIGIN , credentials: true }));
app.use(express.json());

// Static file serving
app.use('/uploads', express.static(path.join(__dirname, 'public/upload')));

// Routes
app.use('/v1/api/dicom', dicomRoutes);

export { app };
