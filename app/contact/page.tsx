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
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white py-16 text-center">
        <div className="container">
          <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-xl opacity-95">Get in touch with us. We'd love to hear from you!</p>
        </div>
      </div>

      <section className="py-16 bg-background-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-6">Get in Touch</h2>
              <p className="text-lg text-text-light leading-relaxed mb-8">
                Have a question or want to work together? Fill out the form or reach out 
                to us using the contact information below.
              </p>

              <div className="grid gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl mb-3">📍</div>
                  <h3 className="text-primary text-xl mb-2">Address</h3>
                  <p className="text-text-light m-0 leading-relaxed">
                    123 Business Street<br />City, State 12345<br />Country
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl mb-3">📧</div>
                  <h3 className="text-primary text-xl mb-2">Email</h3>
                  <p className="text-text-light m-0 leading-relaxed">
                    info@yourbusiness.com<br />support@yourbusiness.com
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl mb-3">📞</div>
                  <h3 className="text-primary text-xl mb-2">Phone</h3>
                  <p className="text-text-light m-0 leading-relaxed">
                    +1 (555) 123-4567<br />+1 (555) 987-6543
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-3xl mb-3">🕒</div>
                  <h3 className="text-primary text-xl mb-2">Business Hours</h3>
                  <p className="text-text-light m-0 leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-md">
              <h2 className="text-3xl font-bold text-text-dark mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-text-dark font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="p-3.5 border-2 border-border rounded-lg text-base transition-colors focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="text-text-dark font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="p-3.5 border-2 border-border rounded-lg text-base transition-colors focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="subject" className="text-text-dark font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                    className="p-3.5 border-2 border-border rounded-lg text-base transition-colors focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-text-dark font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Your message here..."
                    className="p-3.5 border-2 border-border rounded-lg text-base font-inherit transition-colors focus:outline-none focus:border-primary resize-y min-h-[120px]"
                  />
                </div>

                <button 
                  type="submit" 
                  className="bg-primary text-white px-8 py-4 rounded-lg text-base font-semibold transition-all mt-2 hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
