'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background-light to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#667eea] text-white py-16 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)'
          }}></div>
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 animate-[fadeInUp_0.8s_ease-out]">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl opacity-95 max-w-2xl mx-auto px-4 sm:px-0 animate-[fadeInUp_1s_ease-out]">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Information Cards */}
      <section className="py-12 sm:py-16 md:py-20 -mt-8 sm:-mt-12 md:-mt-16 relative z-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Address Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-text-dark mb-2 text-center sm:text-left">Address</h3>
              <p className="text-text-light text-sm sm:text-base leading-relaxed text-center sm:text-left">
                5/34 Negombo Road<br />Mirigama
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-text-dark mb-2 text-center sm:text-left">Email</h3>
              <a 
                href="mailto:Prasannapp@gmail.com" 
                className="text-primary hover:text-[#667eea] transition-colors text-sm sm:text-base break-all block text-center sm:text-left"
              >
                Prasannapp@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-text-dark mb-2 text-center sm:text-left">Phone</h3>
              <div className="space-y-1 text-center sm:text-left">
                <a 
                  href="tel:+94332276118" 
                  className="text-primary hover:text-[#667eea] transition-colors text-sm sm:text-base block"
                >
                  +94 332276118
                </a>
                <a 
                  href="tel:+94774509011" 
                  className="text-primary hover:text-[#667eea] transition-colors text-sm sm:text-base block"
                >
                  +94 774509011
                </a>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-text-dark mb-2 text-center sm:text-left">Business Hours</h3>
              <div className="text-text-light text-sm sm:text-base space-y-1 text-center sm:text-left">
                <p className="m-0">Mon - Sat: 8:30 AM – 6:00 PM</p>
                <p className="m-0">Sunday: 8:30 AM – 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-3">
                  Send us a Message
                </h2>
                <p className="text-text-light text-sm sm:text-base">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-text-dark font-semibold mb-2 text-sm sm:text-base">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="p-3.5 sm:p-4 border-2 border-gray-200 rounded-xl text-sm sm:text-base transition-all focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-gray-50 focus:bg-white"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-text-dark font-semibold mb-2 text-sm sm:text-base">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="p-3.5 sm:p-4 border-2 border-gray-200 rounded-xl text-sm sm:text-base transition-all focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-gray-50 focus:bg-white"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-text-dark font-semibold mb-2 text-sm sm:text-base">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                    className="p-3.5 sm:p-4 border-2 border-gray-200 rounded-xl text-sm sm:text-base transition-all focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-gray-50 focus:bg-white"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-text-dark font-semibold mb-2 text-sm sm:text-base">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                    className="p-3.5 sm:p-4 border-2 border-gray-200 rounded-xl text-sm sm:text-base font-inherit transition-all focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-y min-h-[140px] bg-gray-50 focus:bg-white"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-4 sm:mb-6">
                  Visit Our Location
                </h2>
                <p className="text-text-light text-sm sm:text-base mb-6">
                  We&apos;re located at 5/34 Negombo Road, Mirigama. Feel free to visit us during our business hours.
                </p>
                <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps?q=5/34+Negombo+Road+Mirigama&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>

              {/* Additional Info Card */}
              <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] p-6 sm:p-8 rounded-2xl text-white shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Quick Response</h3>
                <p className="text-white/90 text-sm sm:text-base mb-4 leading-relaxed">
                  We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:+94774509011" 
                    className="bg-white text-primary px-6 py-3 rounded-lg font-semibold text-center transition-all hover:bg-gray-100 hover:shadow-lg"
                  >
                    Call Now
                  </a>
                  <a 
                    href="mailto:Prasannapp@gmail.com" 
                    className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold text-center border-2 border-white/30 transition-all hover:bg-white/20"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
