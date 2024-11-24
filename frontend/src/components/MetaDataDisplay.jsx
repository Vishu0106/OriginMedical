import React from 'react'

export default function MetadataDisplay({ metadata }) {
  return (
    <div className="mt-8 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">DICOM Metadata</h3>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700">
        <dl>
          {Object.entries(metadata).map(([key, value]) => (
            <div key={key} className="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-300">{key}</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

