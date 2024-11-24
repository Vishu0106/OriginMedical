import express from 'express';
import fileUpload from '../middlewares/fileupload.js';
import { uploadDicomFile } from '../controllers/dicom.controller.js';

const router = express.Router();

// Upload route
router.post('/upload', fileUpload.single('dicomFile'), uploadDicomFile);

export default router;
