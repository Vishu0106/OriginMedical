import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Header from '../components/Header';

const Help = () => {
    return (
        <div className="help-container bg-gray-100 dark:bg-gray-800 min-h-screen p-6">
            <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">Help Page</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">This website only contains three features:</p>
            <ul className="feature-list space-y-4">
                <li className="bg-white dark:bg-gray-700 p-4 rounded shadow">
                    <Link to="/image-manipulation" className="text-blue-500 dark:text-blue-300 hover:underline">
                        Image Manipulation Tools
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Description of Feature 1.</p>
                </li>
                <li className="bg-white dark:bg-gray-700 p-4 rounded shadow">
                    <Link to="/dicom-image-parser" className="text-blue-500 dark:text-blue-300 hover:underline">
                        DICOM Image Parser
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Description of Feature 2.</p>
                </li>
                <li className="bg-white dark:bg-gray-700 p-4 rounded shadow">
                    <Link to="/real-world-measurements" className="text-blue-500 dark:text-blue-300 hover:underline">
                        Real-World Measurements like cm, mm, pixels etc.
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Description of Feature 3.</p>
                </li>
                <li className="bg-white dark:bg-gray-700 p-4 rounded shadow">
                    <p className="text-gray-600 dark:text-gray-400 mt-2">For further assistance, contact me at:</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Email: kattameedivishnu2003@gmail.com</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">Phone: +91 9542614017</p>
                </li>
            </ul>
        </div>
    );
};

function Help1() {
    return (
        <div>
            <Header>
                <Help />
            </Header>
        </div>
    );
    }
    export default Help1;