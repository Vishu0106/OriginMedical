import { Upload, Search, FileOutput } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: 'Upload',
    description: 'Securely upload your medical images',
  },
  {
    icon: Search,
    title: 'Analyze',
    description: 'Use our advanced tools for image analysis',
  },
  {
    icon: FileOutput,
    title: 'Export Results',
    description: 'Generate and download detailed reports',
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-white dark:bg-gray-800 rounded-full p-4 mb-4">
                <step.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block w-16 h-1 bg-blue-600 dark:bg-blue-400 mt-4 rotate-90 md:rotate-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

