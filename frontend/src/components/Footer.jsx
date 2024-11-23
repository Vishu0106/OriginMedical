import {Link} from 'react-router-dom';
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">LabTech</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Revolutionizing medical image analysis for healthcare professionals.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Features</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Pricing</Link></li>
              <li><Link to="/about" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">Newsletter</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Stay updated with our latest features and news.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-3 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-r-md border border-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <Mail className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} LabTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

