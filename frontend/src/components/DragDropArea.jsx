import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import MetadataDisplay from './MetadataDisplay'
import toast from 'react-hot-toast'

export default function DragDropArea() {
  const [file, setFile] = useState(null)
  const [metadata, setMetadata] = useState(null)

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/dicom': ['.dcm'] },
    multiple: false
  })

  const uploadFile = async () => {
    if (!file) return

    const formData = new FormData()
    formData.append('dicomFile', file)

    try {
      const response = await axios.post('https://originmedical-2.onrender.com/v1/api/dicom/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      setMetadata(response.data.metadata)
      if(response.status==200) {
        toast.success('File uploaded successfully and extracted metadata');
      } else {
        toast.error('Failed to upload file');
      }
    } catch (error) {
      console.error('Error uploading file:', error)
    }
  }

  return (
    <div className="mt-8">
      <div
        {...getRootProps()}
        className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer ${
          isDragActive
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900'
            : 'border-gray-300 dark:border-gray-600'
        } dark:text-gray-300`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-500 dark:text-blue-400">Drop the DICOM file here...</p>
        ) : (
          <p>Drag and drop a DICOM file here, or click to select a file</p>
        )}
      </div>
      {file && (
        <div className="mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">Selected file: {file.name}</p>
          <button
            onClick={uploadFile}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-offset-gray-900"
          >
            Upload
          </button>
        </div>
      )}
      {metadata && <MetadataDisplay metadata={metadata} />}
    </div>
  )
}

