'use client'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'

export default function Header({children}) {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    // Apply the saved theme to the body
    document.body.classList.add(savedTheme)
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    // Toggle the class on the body element
    document.body.classList.remove(theme)
    document.body.classList.add(newTheme)
    // Save the new theme to localStorage
    localStorage.setItem('theme', newTheme)
  }

  if (!mounted) {
    return null
  }

return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                Origin Medical
            </Link>
            <div className="hidden md:flex space-x-4 items-center">
                <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-white">Home</Link>
                <Link to="/dicom-image-parser" className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-white">Upload</Link>
                <Link to="/help" className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-white">Help</Link>
                
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-gray-200 dark:bg-white dark:hover:bg-gray-700 transition duration-300 ease-in-out"
                >
                    {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                </button>
            </div>
            
            <div className="md:hidden">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-full hover:bg-gray-200  dark:hover:bg-gray-700 transition duration-300 ease-in-out"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>

        {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 py-4">
                <div className="container mx-auto px-4 flex flex-col space-y-4">
                    <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-white">Home</Link>
                    <Link to="/dicom-image-parser" className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-white">Upload</Link>
                    <Link to="/help" className="hover:text-blue-600 dark:hover:text-blue-400 dark:text-white">Help</Link>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-700 dark:bg-white dark:hover:bg-gray-900 transition duration-300 ease-in-out inline-flex items-center"
                    >
                        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                        <span className="ml-2">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                    </button>
                </div>
            </div>
        )}
        {children && (
            <div className="container mx-auto px-4 py-4">
                {children}
            </div>
        )}
    </header>
)
}
