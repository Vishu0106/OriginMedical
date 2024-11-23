import {Link} from 'react-router-dom'; 
import ImageBg from '../assets/bg.avif'

export default function Hero() {
return (
    <section
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-50 dark:bg-blue-900 bg-cover bg-center"
        id="hero"
        style={{ backgroundImage: `url(${ImageBg})` }}
    >
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Revolutionize Medical Image Analysis
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Simplify diagnostics with powerful annotation and measurement tools.
            </p>
            <div className="flex justify-center space-x-4">
                <a
                    href="#features"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
                >
                    Get Started
                </a>
                <Link
                    className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-100 dark:hover:bg-gray-700 px-6 py-3 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
                >
                    Learn More
                </Link>
            </div>
        </div>
    </section>
)
}

