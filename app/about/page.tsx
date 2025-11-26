export default function About() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white py-16 text-center">
        <div className="container">
          <h1 className="text-5xl font-extrabold mb-4">About Us</h1>
          <p className="text-xl opacity-95">Learn more about our company and our mission</p>
        </div>
      </div>

      <section className="py-16">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-text-dark mb-6">Our Story</h2>
            <p className="text-lg text-text-light leading-relaxed mb-6">
              Founded with a vision to transform businesses through innovation and excellence, 
              we have been serving clients with dedication and passion. Our journey began with 
              a simple goal: to provide exceptional services that make a real difference.
            </p>
            <p className="text-lg text-text-light leading-relaxed mb-6">
              Over the years, we have grown into a trusted partner for businesses of all sizes, 
              helping them achieve their goals and reach new heights of success. Our commitment 
              to quality and customer satisfaction has been the cornerstone of our growth.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-text-dark mb-6">Our Mission</h2>
            <p className="text-lg text-text-light leading-relaxed mb-6">
              Our mission is to empower businesses with innovative solutions and exceptional 
              service that drives growth and success. We believe in building long-term 
              partnerships based on trust, quality, and results.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-text-dark mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              <div className="bg-background-light p-8 rounded-2xl text-center transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-primary text-2xl mb-2">Excellence</h3>
                <p className="text-text-light m-0">We strive for excellence in everything we do</p>
              </div>
              <div className="bg-background-light p-8 rounded-2xl text-center transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-primary text-2xl mb-2">Integrity</h3>
                <p className="text-text-light m-0">Honesty and transparency guide our actions</p>
              </div>
              <div className="bg-background-light p-8 rounded-2xl text-center transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-primary text-2xl mb-2">Innovation</h3>
                <p className="text-text-light m-0">We embrace new ideas and creative solutions</p>
              </div>
              <div className="bg-background-light p-8 rounded-2xl text-center transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="text-5xl mb-4">❤️</div>
                <h3 className="text-primary text-2xl mb-2">Commitment</h3>
                <p className="text-text-light m-0">We are dedicated to our clients&apos; success</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-text-dark mb-6">Our Team</h2>
            <p className="text-lg text-text-light leading-relaxed mb-6">
              We are a diverse team of professionals with expertise in various fields. 
              Our team members bring years of experience and a passion for delivering 
              outstanding results. Together, we work towards a common goal: helping 
              our clients succeed.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
