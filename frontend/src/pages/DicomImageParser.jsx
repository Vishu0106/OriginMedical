import { useState } from 'react'
import DragDropArea from '../components/DragDropArea'
import SampleFiles from '../components/SampleFiles'
import MetadataDisplay from '../components/MetaDataDisplay'
import Header from '../components/Header'
 function Home() {
  const [metadata, setMetadata] = useState(null)

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8 dark:text-white">DICOM File Uploader & Data Extractor</h1>
        <SampleFiles />
        <DragDropArea setMetadata={setMetadata} />
        {metadata && <MetadataDisplay metadata={metadata} />}
      </div>
    </div>
  )
}

function DicomImageParser() {
    return (
        <div>
            <Header>
                <Home />
            </Header>
        </div>
    );
    }
    export default DicomImageParser;

