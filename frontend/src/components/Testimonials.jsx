const testimonials = [
    {
      quote: "This platform has significantly improved our lab's efficiency. The image analysis tools are top-notch!",
      author: "Dr. Sarah Johnson",
      role: "Lead Pathologist",
    },
    {
      quote: "The DICOM support and real-world measurements have been game-changers for our radiology department.",
      author: "Dr. Michael Chen",
      role: "Senior Radiologist",
    },
    {
      quote: "User-friendly interface combined with powerful features. It's exactly what we needed in our lab.",
      author: "Emily Rodriguez",
      role: "Lab Technician",
    },
  ]
  
  export default function Testimonials() {
    return (
      <section className="w-full py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  