import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prasanna Picture Palace - Custom Glass, Door Hardware & Aluminum Solutions',
  description: 'Professional glass cutting & installation, door hardware supply & fitting, and custom aluminum pantry cupboard fabrication. Quality services for your home and business needs in Mirigama.',
}

export default function Home() {
  // Background media settings
  // Option 1: Use a background image
  const backgroundImage = '/hero-bg.jpg' // Place your image in public folder
  const useImage = false // Set to true to use image, false to use video
  
  // Option 2: Use a background video
  const backgroundVideo = '/hero-video1.mp4' // Place your video in public folder
  const useVideo = true // Set to true to use video, false to use image
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Full Page Hero Section */}
      <section className="relative w-full h-screen min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
        {/* Background Image */}
        {useImage && !useVideo && (
          <div className="absolute top-0 left-0 w-full h-full z-[1]">
            <div 
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat animate-[zoomIn_20s_ease-in-out_infinite_alternate]"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[2]" />
          </div>
        )}
        
        {/* Background Video */}
        {useVideo && !useImage && (
          <div className="absolute top-0 left-0 w-full h-full z-[1]">
            <video 
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-[1]"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[2]" />
          </div>
        )}
        
        {/* Fallback gradient if no media */}
        {!useImage && !useVideo && (
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#667eea] to-[#764ba2] z-[1]" />
        )}
        
        {/* Hero Content */}
        <div className="relative z-[3] max-w-4xl px-4 sm:px-6 md:px-8 animate-[fadeInUp_1s_ease-out]">
          <div className="container">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight drop-shadow-lg tracking-tight">
              Welcome to Prasanna Picture Palace
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 opacity-95 leading-relaxed font-light drop-shadow-md px-2 sm:px-0">
              We provide exceptional services to help your business grow and succeed.
              Experience the difference with our professional team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link 
                href="/contact" 
                className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-semibold transition-all shadow-md hover:-translate-y-0.5 hover:shadow-lg inline-block w-full sm:w-auto text-center"
              >
                Get Started
              </Link>
              <Link 
                href="/about" 
                className="bg-transparent text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-semibold border-2 border-white transition-all hover:bg-white hover:text-primary inline-block w-full sm:w-auto text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <a 
          href="#features" 
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-[3] cursor-pointer no-underline transition-opacity hover:opacity-100 animate-[bounce_2s_infinite]"
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-white rotate-45 opacity-80"></div>
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 md:py-20 bg-background-light">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-text-dark px-4 sm:px-0">
            Our Services
          </h2>
          <p className="text-center text-text-light text-base sm:text-lg mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
            Discover what we can do for your business
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12">
            {/* Service 1: Custom Glass Cutting & Installation */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-md transition-all text-center hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 sm:mb-6 w-full h-40 sm:h-48 relative rounded-lg overflow-hidden">
                <Image
                  src="/service-glass.png"
                  alt="Custom Glass Cutting & Installation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-text-dark">Custom Glass Cutting & Installation</h3>
              <p className="text-text-light text-xs sm:text-sm mb-2 sm:mb-3 font-semibold">
                For: glass sheets, mirrors, glass doors, glass panels
              </p>
              <p className="text-text-light text-sm sm:text-base leading-relaxed">
                We provide precision glass cutting for any size or design, including mirrors, partitions, doors, windows, and decorative glass. Professional on-site installation ensures a perfect finish.
              </p>
            </div>

            {/* Service 2: Door Hardware Supply & Fitting */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-md transition-all text-center hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 sm:mb-6 w-full h-40 sm:h-48 relative rounded-lg overflow-hidden">
                <Image
                  src="/service-door-hardware.png"
                  alt="Door Hardware Supply & Fitting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-text-dark">Door Hardware Supply & Fitting</h3>
              <p className="text-text-light text-xs sm:text-sm mb-2 sm:mb-3 font-semibold">
                For: door locks, hinges, door handles
              </p>
              <p className="text-text-light text-sm sm:text-base leading-relaxed">
                High-quality door locks, hinges, and handles with expert fitting services. We ensure smooth operation, durability, and a premium finish for both home and commercial doors.
              </p>
            </div>

            {/* Service 3: Aluminum Pantry Cupboard Fabrication */}
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-md transition-all text-center hover:-translate-y-1 hover:shadow-xl md:col-span-2 lg:col-span-1">
              <div className="mb-4 sm:mb-6 w-full h-40 sm:h-48 relative rounded-lg overflow-hidden">
                <Image
                  src="/service-aluminum-pantry.png"
                  alt="Aluminum Pantry Cupboard Fabrication"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-text-dark">Aluminum Pantry Cupboard Fabrication</h3>
              <p className="text-text-light text-xs sm:text-sm mb-2 sm:mb-3 font-semibold">
                For: aluminum pantry systems
              </p>
              <p className="text-text-light text-sm sm:text-base leading-relaxed">
                Custom-designed aluminum pantry cupboards built to match your kitchen layout. Durable, stylish, and made with premium materials for long-lasting performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-background-light">
        <div className="container">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 text-text-dark">
              Categories
            </h2>
            <p className="text-center text-text-light text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Browse our wide range of products and services organized by category
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Category 1: Glass Products */}
            <Link 
              href="/category" 
              className="group bg-white rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden block border border-border/50"
            >
              <div className="w-full h-48 sm:h-56 relative overflow-hidden">
                <Image
                  src="/category-glass.png"
                  alt="Glass Products"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-text-dark group-hover:text-primary transition-colors duration-300">
                  Glass Products
                </h3>
                <div className="mt-2 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Explore</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Category 2: Door Hardware Items */}
            <Link 
              href="/category" 
              className="group bg-white rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden block border border-border/50"
            >
              <div className="w-full h-48 sm:h-56 relative overflow-hidden">
                <Image
                  src="/category-door-hardware.png"
                  alt="Door Hardware Items"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-text-dark group-hover:text-primary transition-colors duration-300">
                  Door Hardware Items
                </h3>
                <div className="mt-2 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Explore</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Category 3: Aluminum Pantry Cupboard Items */}
            <Link 
              href="/category" 
              className="group bg-white rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden block border border-border/50"
            >
              <div className="w-full h-48 sm:h-56 relative overflow-hidden">
                <Image
                  src="/category-aluminum-pantry.png"
                  alt="Aluminum Pantry Cupboard Items"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-text-dark group-hover:text-primary transition-colors duration-300">
                  Aluminum Pantry Cupboard Items
                </h3>
                <div className="mt-2 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Explore</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Category 4: Board Items */}
            <Link 
              href="/category" 
              className="group bg-white rounded-3xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden block border border-border/50"
            >
              <div className="w-full h-48 sm:h-56 relative overflow-hidden">
                <Image
                  src="/category-board.png"
                  alt="Board Items"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-text-dark group-hover:text-primary transition-colors duration-300">
                  Board Items
                </h3>
                <div className="mt-2 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Explore</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background-light">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 text-text-dark px-4 sm:px-0">
            Explore More
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10 md:mt-12">
            <Link 
              href="/about" 
              className="bg-background-light p-6 sm:p-8 rounded-xl sm:rounded-2xl transition-all block text-center border-2 border-transparent hover:-translate-y-1 hover:border-primary hover:shadow-xl"
            >
              <h3 className="text-primary text-xl sm:text-2xl mb-2">About Us</h3>
              <p className="text-text-light m-0 text-sm sm:text-base">Learn more about our company and mission</p>
            </Link>
            <Link 
              href="/service" 
              className="bg-background-light p-6 sm:p-8 rounded-xl sm:rounded-2xl transition-all block text-center border-2 border-transparent hover:-translate-y-1 hover:border-primary hover:shadow-xl"
            >
              <h3 className="text-primary text-xl sm:text-2xl mb-2">Our Services</h3>
              <p className="text-text-light m-0 text-sm sm:text-base">Discover all the services we offer</p>
            </Link>
            <Link 
              href="/category" 
              className="bg-background-light p-6 sm:p-8 rounded-xl sm:rounded-2xl transition-all block text-center border-2 border-transparent hover:-translate-y-1 hover:border-primary hover:shadow-xl"
            >
              <h3 className="text-primary text-xl sm:text-2xl mb-2">Categories</h3>
              <p className="text-text-light m-0 text-sm sm:text-base">Browse our product and service categories</p>
            </Link>
            <Link 
              href="/contact" 
              className="bg-background-light p-6 sm:p-8 rounded-xl sm:rounded-2xl transition-all block text-center border-2 border-transparent hover:-translate-y-1 hover:border-primary hover:shadow-xl"
            >
              <h3 className="text-primary text-xl sm:text-2xl mb-2">Contact Us</h3>
              <p className="text-text-light m-0 text-sm sm:text-base">Get in touch with our team</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-text-dark px-4 sm:px-0">
            Contact Us
          </h2>
          
          {/* Map and Form Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16">
            {/* Map Section */}
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
              <iframe
                src="https://www.google.com/maps?q=Prasanna+Picture+Palace,+64XH+393,+Mirigama&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Contact Form Section */}
            <div className="flex flex-col justify-center order-1 lg:order-2">
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 sm:py-3.5 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm sm:text-base"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-sm sm:text-base"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-semibold transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  Send now
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 md:mt-12">
            {/* Call Card */}
            <div className="text-center">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-text-dark mb-1 sm:mb-2">Call</h3>
              <p className="text-text-light text-sm sm:text-base break-words">+94 774509011</p>
            </div>

            {/* Email Card */}
            <div className="text-center">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-text-dark mb-1 sm:mb-2">Email</h3>
              <p className="text-text-light text-sm sm:text-base break-words">prasannapp@gmail.com</p>
            </div>

            {/* Location Card */}
            <div className="text-center">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-text-dark mb-1 sm:mb-2">Location</h3>
              <p className="text-text-light text-sm sm:text-base break-words px-2">Prasanna Picture Palace, 64XH+393, Mirigama</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
