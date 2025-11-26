import Link from 'next/link'

export default function Service() {
  const services = [
    {
      icon: '🚀',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies to meet your business needs.'
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces designed to enhance user experience.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services to support your business growth.'
    },
    {
      icon: '🔒',
      title: 'Security Services',
      description: 'Comprehensive security solutions to protect your data and systems.'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.'
    },
    {
      icon: '🛠️',
      title: 'Consulting',
      description: 'Expert consulting services to help you make informed business decisions.'
    },
    {
      icon: '💼',
      title: 'Business Solutions',
      description: 'End-to-end business solutions tailored to your specific requirements.'
    }
  ]

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white py-16 text-center">
        <div className="container">
          <h1 className="text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-xl opacity-95">Comprehensive solutions to meet all your business needs</p>
        </div>
      </div>

      <section className="py-16 bg-background-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-10 rounded-2xl shadow-md transition-all text-center hover:-translate-y-1 hover:shadow-xl">
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-text-dark mb-4">{service.title}</h3>
                <p className="text-text-light leading-relaxed m-0">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white py-16 text-center">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg mb-8 opacity-95">
              We can create a tailored service package specifically for your business requirements.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-primary px-8 py-3.5 rounded-lg text-base font-semibold transition-all shadow-md hover:-translate-y-0.5 hover:shadow-lg inline-block no-underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
