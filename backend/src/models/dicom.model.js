import mongoose from 'mongoose';

const dicomMetadataSchema = new mongoose.Schema({
  patientName: { type: String, default: 'Unknown' },
  studyDate: { type: String, default: 'Unknown' },
  modality: { type: String, default: 'Unknown' },
  description: { type: String, default: 'No Description' },
  fileName: { type: String, required: true },
  filePath: { type: String, required: true },
}, { timestamps: true });

export const DicomMetadata = mongoose.model('DicomMetadata', dicomMetadataSchema);

