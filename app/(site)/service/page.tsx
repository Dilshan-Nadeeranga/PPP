import Link from 'next/link'
import Image from 'next/image'

export default function Service() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white py-12 sm:py-16 md:py-20 text-center">
        <div className="container">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">Our Services</h1>
          <p className="text-base sm:text-lg md:text-xl opacity-95 px-4 sm:px-0">Professional solutions for all your glass, hardware, and material needs</p>
        </div>
      </div>

      {/* Services Introduction Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-4 sm:mb-6">What We Offer</h2>
            <p className="text-base sm:text-lg text-text-light leading-relaxed mb-4">
              At <strong className="text-text-dark">Prasanna Picture Palace</strong>, we specialize in providing high-quality glass work, door hardware installation, aluminum pantry cupboard fabrication, and board-cutting solutions for homes and businesses. Our services combine precision, durability, and expert craftsmanship.
            </p>
            <p className="text-base sm:text-lg text-text-light leading-relaxed">
              With years of experience and a commitment to excellence, we deliver reliable, professional services that meet the highest standards. Whether you&apos;re a homeowner, builder, interior designer, or business owner, we have the expertise and resources to handle your project with care and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Service 1: Custom Glass Cutting & Installation */}
      <section className="py-12 sm:py-16 md:py-20 bg-background-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/service-glass.png"
                alt="Custom Glass Cutting & Installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-4 sm:mb-6">
                Custom Glass Cutting & Installation
              </h2>
              <p className="text-base sm:text-lg text-text-light leading-relaxed mb-6">
                We provide supply and cutting of tempered glass, mirrors, partitions, door glass, and table tops. Our skilled technicians handle on-site installation with precision and care, ensuring a perfect fit for your space.
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-text-dark mb-3">Included Tasks:</h3>
                <ul className="text-text-light space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Measuring your space accurately</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Cutting glass to exact size specifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Edge polishing for safety and aesthetics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Delivery and professional installation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">Benefits:</h3>
                <ul className="text-text-light space-y-2 text-sm sm:text-base">
                  <li>• Perfect fit for any home or business</li>
                  <li>• Durable, safe, high-quality materials</li>
                  <li>• Professional fitting ensures long life</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Door Hardware Supply & Fitting */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-4 sm:mb-6">
                Door Hardware Supply & Fitting
              </h2>
              <p className="text-base sm:text-lg text-text-light leading-relaxed mb-6">
                We supply and install door locks, hinges, door handles, closers, and sliding accessories. Our expert team ensures proper installation and smooth operation of all door hardware components.
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-text-dark mb-3">Included Tasks:</h3>
                <ul className="text-text-light space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Removing old hardware safely</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Fitting new locks, hinges, and handles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Adjusting door alignment for smooth operation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Ensuring smooth operation and security</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background-light p-4 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">Benefits:</h3>
                <ul className="text-text-light space-y-2 text-sm sm:text-base">
                  <li>• Strong and secure doors</li>
                  <li>• Premium hardware options</li>
                  <li>• Fast and reliable installation</li>
                </ul>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/service-door-hardware.png"
                alt="Door Hardware Supply & Fitting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Aluminum Pantry Cupboard Fabrication */}
      <section className="py-12 sm:py-16 md:py-20 bg-background-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/service-aluminum-pantry.png"
                alt="Aluminum Pantry Cupboard Fabrication"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-4 sm:mb-6">
                Aluminum Pantry Cupboard Fabrication
              </h2>
              <p className="text-base sm:text-lg text-text-light leading-relaxed mb-6">
                We design, fabricate, and install custom aluminum pantry cupboards for kitchens. Our solutions are tailored to your kitchen layout, providing modern, durable, and waterproof pantry designs.
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-text-dark mb-3">Included Tasks:</h3>
                <ul className="text-text-light space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Taking accurate measurements of your kitchen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Making custom frames and doors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Installing glass or board panels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Adding handles and fittings</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">Benefits:</h3>
                <ul className="text-text-light space-y-2 text-sm sm:text-base">
                  <li>• Modern, durable, waterproof pantry designs</li>
                  <li>• Custom-made for your kitchen layout</li>
                  <li>• Stylish and long-lasting materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Board Cutting & Supply */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-dark mb-4 sm:mb-6">
                Board Cutting & Supply
              </h2>
              <p className="text-base sm:text-lg text-text-light leading-relaxed mb-6">
                We supply and cut plywood, MDF, chipboard, hardboard, and whiteboard to your exact specifications. Our precision cutting ensures accurate sizes perfect for furniture makers and construction projects.
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-text-dark mb-3">Included Tasks:</h3>
                <ul className="text-text-light space-y-2 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Custom board cutting to your specifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Laminated board finishing available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Edge banding (optional service)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Reliable delivery service</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background-light p-4 sm:p-6 rounded-xl">
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">Benefits:</h3>
                <ul className="text-text-light space-y-2 text-sm sm:text-base">
                  <li>• Accurate sizes for furniture makers</li>
                  <li>• High-quality materials</li>
                  <li>• Fast and clean cutting</li>
                </ul>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/category-board.png"
                alt="Board Cutting & Supply"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background-light">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-text-dark mb-8 sm:mb-12 px-4 sm:px-0">
            Why Choose Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center">
              <div className="text-4xl sm:text-5xl mb-4">🎯</div>
              <h3 className="text-primary text-xl sm:text-2xl font-bold mb-3">Expert Craftsmanship</h3>
              <p className="text-text-light text-sm sm:text-base">Years of experience and skilled technicians ensure professional results every time.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center">
              <div className="text-4xl sm:text-5xl mb-4">⚡</div>
              <h3 className="text-primary text-xl sm:text-2xl font-bold mb-3">Fast Service</h3>
              <p className="text-text-light text-sm sm:text-base">We understand deadlines and work efficiently to complete your project on time.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center">
              <div className="text-4xl sm:text-5xl mb-4">💎</div>
              <h3 className="text-primary text-xl sm:text-2xl font-bold mb-3">Quality Materials</h3>
              <p className="text-text-light text-sm sm:text-base">We use only the finest quality materials that meet industry standards.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center">
              <div className="text-4xl sm:text-5xl mb-4">📏</div>
              <h3 className="text-primary text-xl sm:text-2xl font-bold mb-3">Precision Work</h3>
              <p className="text-text-light text-sm sm:text-base">Accurate measurements and precise cutting ensure perfect fit for your needs.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center">
              <div className="text-4xl sm:text-5xl mb-4">🛡️</div>
              <h3 className="text-primary text-xl sm:text-2xl font-bold mb-3">Reliable Service</h3>
              <p className="text-text-light text-sm sm:text-base">Count on us for consistent, dependable service that you can trust.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center">
              <div className="text-4xl sm:text-5xl mb-4">💰</div>
              <h3 className="text-primary text-xl sm:text-2xl font-bold mb-3">Fair Pricing</h3>
              <p className="text-text-light text-sm sm:text-base">Competitive prices without compromising on quality or service standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white py-12 sm:py-16 md:py-20 text-center">
        <div className="container">
          <div className="max-w-2xl mx-auto px-4 sm:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Get Started?</h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-95">
              Contact us today to discuss your project needs. We&apos;re here to help you achieve the perfect solution for your home or business.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg text-sm sm:text-base font-semibold transition-all shadow-md hover:-translate-y-0.5 hover:shadow-lg inline-block no-underline"
            >
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
