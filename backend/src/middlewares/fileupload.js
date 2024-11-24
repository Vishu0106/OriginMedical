import multer from 'multer';
import path from 'path';


// Storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, process.env.UPLOAD_DIR),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});

// File filter to allow only DICOM files
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/dicom' || file.originalname.endsWith('.dcm')) {
        cb(null, true);
    } else {
        cb(new Error('Only DICOM files are allowed'), false);
    }
};

export default multer({ storage, fileFilter });
