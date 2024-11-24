import fs from 'fs';
import path from 'path';
import dicomParser from 'dicom-parser';
import { DicomMetadata } from '../models/dicom.model.js';

// Helper function to format study date
const formatStudyDate = (rawDate) => {
  if (!rawDate || rawDate.length !== 8) return 'Invalid Date'; // Ensure rawDate is in the format YYYYMMDD
  const year = rawDate.slice(0, 4);
  const month = rawDate.slice(4, 6);
  const day = rawDate.slice(6, 8);
  return `${year}-${month}-${day}`;
};

// Extract metadata from the DICOM file
const extractMetadata = (filePath) => {
  try {
    const buffer = fs.readFileSync(filePath);
    const dataSet = dicomParser.parseDicom(buffer);

    const rawStudyDate = dataSet.string('x00080020') || 'Unknown';

    return {
      patientName: dataSet.string('x00100010') || 'Unknown',
      studyDate: formatStudyDate(rawStudyDate),
      modality: dataSet.string('x00080060') || 'Unknown',
      description: dataSet.string('x00081030') || 'No Description',
    };
  } catch (error) {
    throw new Error('Failed to parse DICOM file');
  }
};

// Handle file upload and metadata extraction
export const uploadDicomFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const filePath = req.file.path;

    // Extract metadata
    const metadata = extractMetadata(filePath);

    // Save metadata in the database
    const dicom = new DicomMetadata({
      ...metadata,
      fileName: req.file.originalname,
      filePath,
    });
    await dicom.save();

    res.status(200).json({
      message: 'File uploaded and metadata extracted successfully',
      metadata,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process the DICOM file', details: error.message });
  }
};
