import React, { useState } from 'react'
import '../index.css'
import Header from '../components/Header'

function MeasurementConverter() {
  const [pixelDistance, setPixelDistance] = useState('')
  const [pixelSpacing, setPixelSpacing] = useState('')
  const [unit, setUnit] = useState('mm')
  const [result, setResult] = useState(null)

  const handleConvert = () => {
    if (pixelDistance && pixelSpacing) {
      const distanceInMm = parseFloat(pixelDistance) * parseFloat(pixelSpacing)
      const distanceInSelectedUnit = unit === 'cm' ? distanceInMm / 10 : distanceInMm
      setResult(distanceInSelectedUnit.toFixed(2))
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Pixel to Real-World Converter</h1>
        
        <div className="mb-4">
          <label htmlFor="pixelDistance" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Pixel Distance
          </label>
          <input
            type="number"
            id="pixelDistance"
            value={pixelDistance}
            onChange={(e) => setPixelDistance(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter pixel distance"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="pixelSpacing" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Pixel Spacing (mm/pixel)
          </label>
          <input
            type="number"
            id="pixelSpacing"
            value={pixelSpacing}
            onChange={(e) => setPixelSpacing(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Enter pixel spacing"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="unit" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Output Unit
          </label>
          <select
            id="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="mm">Millimeters (mm)</option>
            <option value="cm">Centimeters (cm)</option>
          </select>
        </div>

        <button
          onClick={handleConvert}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
        >
          Convert
        </button>

        {result !== null && (
          <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-md">
            <p className="text-gray-900 dark:text-white">
              Result: {result} {unit}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function MeasureMent_Converter() {
    return (
        <div>
            <Header>
                <MeasurementConverter />
            </Header>
        </div>
    );
    }
    export default MeasureMent_Converter;

