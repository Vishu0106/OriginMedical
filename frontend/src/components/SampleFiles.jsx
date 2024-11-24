import case1 from '../assets/case1_062.dcm';
import case2 from '../assets/case1_064.dcm';
import case3 from '../assets/case1_066.dcm';
import case4 from '../assets/case1_068.dcm';
const sampleFiles = [
    { name: 'Sample1.dcm', url: case1 },
    { name: 'Sample2.dcm', url: case2 },
    { name: 'Sample3.dcm', url: case3 },
    { name: 'Sample4.dcm', url: case4 },
  ]
  
  export default function SampleFiles() {
    return (
        <>
          <div className="text-center mb-8">
    <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
      Don&apos;t have a DICOM file to test? No worries! Download one of the sample files below and explore our medical application.
      <br />
      These files are perfect for testing how DICOM images are processed in our system.
    </p>
  </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {sampleFiles.map((file) => (
          <div key={file.name} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{file.name}</p>
            <a
              href={file.url}
              download
              className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-offset-gray-900"
            >
              Download
            </a>
          </div>
        ))}
      </div>
        </>
    )
  }
  
  