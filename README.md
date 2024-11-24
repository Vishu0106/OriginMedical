
# Image Processing and Measurement Tool

A full-stack application providing tools for image manipulation, DICOM image parsing, and real-world measurement conversions. The application is responsive and supports both dark and light modes.
### LIVE DEMO
🌐 **[Visit the Website](https://origin-medical-pi.vercel.app/)**

## 🌟 Features

1. **Image Manipulation**  (`https://origin-medical-pi.vercel.app/image-manipulation`)
   Perform various image transformations using an intuitive UI. Powered by `Konva.js` for high-performance canvas-based manipulations. 

2. **DICOM Image Parser**  (`https://origin-medical-pi.vercel.app/dicom-image-parser`)
   Upload and parse DICOM images to extract medical imaging data.

3. **Real-World Measurement Converter**  (`https://origin-medical-pi.vercel.app/real-world-measurements`)
   Accurately convert and visualize measurements using advanced scaling algorithms.



## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS, Konva.js  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  

## 📂 Project Structure

```
root/
├── frontend/   # Contains React.js code for the frontend
└── backend/    # Contains Node.js and Express.js code for the backend
```

## 🖥️ Installation and Setup

### Prerequisites

Make sure you have the following installed:

- Node.js and npm  
- MongoDB  

### Steps to Install and Run Locally

1. Clone the repository:
   ```bash
   git clone <https://github.com/Vishu0106/OriginMedical.git>
   cd <OriginMedical>
   ```

2. Set up the backend:  
   Navigate to the backend folder:  
   ```bash
   cd backend
   ```
   Install dependencies:  
   ```bash
   npm install
   ```
   Create a `.env` file in the backend directory with the following variables:  
   ```
   MONGO_URI=<your-mongodb-connection-string>
   PORT=<port-number>
   ORIGIN=<your-origin-cors>
   UPLOAD_DIR=<place-to-store-files>
   ```
   Start the backend server:  
   ```bash
   npm start
   ```

3. Set up the frontend:  
   Navigate to the frontend folder:  
   ```bash
   cd ../frontend
   ```
   Install dependencies:  
   ```bash
   npm install
   ```
   Start the development server:  
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the provided frontend URL (usually `http://localhost:5173`) to access the application.

## 🛡️ License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](#).

## 📬 Contact

For any inquiries or support, please reach out:  

- **Email:** [kattameedivishnu2003@gmail.com](mailto:kattameedivishnu2003@gmail.com)  
- **Phone:** +91 9542614017
