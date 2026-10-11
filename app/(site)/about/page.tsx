import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white py-12 sm:py-16 md:py-20 text-center">
        <div className="container">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">About Us</h1>
          <p className="text-base sm:text-lg md:text-xl opacity-95 px-4 sm:px-0">Learn more about Prasanna Picture Palace and our commitment to quality</p>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-4 sm:mb-6">Who We Are</h2>
              <p className="text-base sm:text-lg text-text-light leading-relaxed mb-4">
                <strong className="text-text-dark">Prasanna Picture Palace</strong> is a trusted supplier of high-quality glass products, door hardware, aluminum pantry cupboards, and board materials in Sri Lanka. Located in Mirigama, we have been serving our community and beyond with dedication and excellence.
              </p>
              <p className="text-base sm:text-lg text-text-light leading-relaxed mb-4">
                With years of experience in the industry, we proudly support homeowners, builders, interior designers, and commercial projects with reliable and durable materials. Our commitment to quality and customer satisfaction has made us a preferred choice for all your glass and hardware needs.
              </p>
              <p className="text-base sm:text-lg text-text-light leading-relaxed">
                We serve various industries including residential construction, commercial projects, interior design, and renovation works, providing comprehensive solutions for all your material requirements.
              </p>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service-glass.png"
                alt="Prasanna Picture Palace - Glass Products"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-text-dark mb-8 sm:mb-12 px-4 sm:px-0">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-background-light p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center">
              <div className="text-4xl sm:text-5xl mb-4">⭐</div>
              <h3 className="text-primary text-xl sm:text-2xl font-bold mb-3">High Quality Products</h3>
              <p className="text-text-light text-sm sm:text-base">We source and supply only the finest quality materials that meet industry standards and exceed customer expectations.</p>
            </div>
            <div className="bg-background-light p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center">
              <div className="text-4xl sm:text-5xl mb-4">🔧</div>
              <h3 className="text-primary text-xl sm:text-2xl font-bold mb-3">Professional Installation</h3>
              <p className="text-text-light text-sm sm:text-base">Our expert team provides professional installation services ensuring perfect fit and finish for all your projects.</p>
            </div>
            <div className="bg-background-light p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center">
              <div className="text-4xl sm:text-5xl mb-4">💰</div>
              <h3 className="text-primary text-xl sm:text-2xl font-bold mb-3">Reasonable Prices</h3>
              <p className="text-text-light text-sm sm:text-base">We offer competitive pricing without compromising on quality, making premium materials accessible to everyone.</p>
            </div>
            <div className="bg-background-light p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center">
              <div className="text-4xl sm:text-5xl mb-4">✅</div>
              <h3 className="text-primary text-xl sm:text-2xl font-bold mb-3">Reliable Service</h3>
              <p className="text-text-light text-sm sm:text-base">Count on us for consistent, dependable service. We deliver on our promises and stand behind our work.</p>
            </div>
            <div className="bg-background-light p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center">
              <div className="text-4xl sm:text-5xl mb-4">📦</div>
              <h3 className="text-primary text-xl sm:text-2xl font-bold mb-3">Wide Selection</h3>
              <p className="text-text-light text-sm sm:text-base">From glass to hardware to boards, we offer an extensive range of products to meet all your project needs.</p>
            </div>
            <div className="bg-background-light p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center">
              <div className="text-4xl sm:text-5xl mb-4">🎓</div>
              <h3 className="text-primary text-xl sm:text-2xl font-bold mb-3">Expert Knowledge</h3>
              <p className="text-text-light text-sm sm:text-base">Our experienced team provides expert advice and guidance to help you choose the right products for your needs.</p>
            </div>
            <div className="bg-background-light p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center">
              <div className="text-4xl sm:text-5xl mb-4">🚚</div>
              <h3 className="text-primary text-xl sm:text-2xl font-bold mb-3">Fast Delivery</h3>
              <p className="text-text-light text-sm sm:text-base">We understand the importance of timely delivery and work hard to ensure your materials arrive when you need them.</p>
            </div>
            <div className="bg-background-light p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center">
              <div className="text-4xl sm:text-5xl mb-4">😊</div>
              <h3 className="text-primary text-xl sm:text-2xl font-bold mb-3">Customer Satisfaction</h3>
              <p className="text-text-light text-sm sm:text-base">Your satisfaction is our priority. We go the extra mile to ensure every customer is happy with our products and services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background-light">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-md">
              <div className="text-4xl sm:text-5xl mb-4 text-center">🎯</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-4 sm:mb-6 text-center">Our Mission</h2>
              <p className="text-base sm:text-lg text-text-light leading-relaxed">
                Our mission is to provide strong, safe, and high-quality glass and hardware solutions with exceptional service. We are committed to helping our customers achieve their project goals by offering reliable materials, professional installation, and expert guidance. We believe in building lasting relationships based on trust, quality, and customer satisfaction.
              </p>
            </div>
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-md">
              <div className="text-4xl sm:text-5xl mb-4 text-center">👁️</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-dark mb-4 sm:mb-6 text-center">Our Vision</h2>
              <p className="text-base sm:text-lg text-text-light leading-relaxed">
                Our vision is to become one of the most trusted and preferred suppliers for glass and hardware solutions in Sri Lanka. We aim to expand our reach while maintaining our commitment to quality, service excellence, and customer satisfaction. We envision a future where Prasanna Picture Palace is the first choice for all glass, hardware, and material needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-text-dark mb-8 sm:mb-12 px-4 sm:px-0">
              Our Story
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-8">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
                <Image
                  src="/service-door-hardware.png"
                  alt="Prasanna Picture Palace - Our Story"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-base sm:text-lg text-text-light leading-relaxed mb-4">
                  Prasanna Picture Palace was founded with a vision to provide high-quality glass and hardware solutions to the people of Sri Lanka. What started as a small local business has grown into a trusted name in the industry, serving customers across the region.
                </p>
                <p className="text-base sm:text-lg text-text-light leading-relaxed mb-4">
                  Our journey began with a simple yet powerful goal: to offer quality materials and professional services that help people build and improve their homes and businesses. Over the years, we have expanded our product range and services, always keeping quality and customer satisfaction at the heart of everything we do.
                </p>
                <p className="text-base sm:text-lg text-text-light leading-relaxed">
                  Today, we are proud to serve homeowners, builders, interior designers, and commercial clients with a comprehensive range of glass products, door hardware, aluminum pantry systems, and board materials. Our experience in the industry has taught us the importance of reliability, quality, and excellent customer service.
                </p>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service-aluminum-pantry.png"
                alt="Prasanna Picture Palace - Quality Products"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
