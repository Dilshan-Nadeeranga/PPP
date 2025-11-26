import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  // Logo image path - files in public folder are served from root
  const logoPath = '/FullLogo.jpg'
  const showLogo = true // Logo is enabled
  const showTextWithLogo = false // Set to true to show text alongside logo
  
  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 py-4">
          <Link href="/" className="flex items-center gap-3 text-primary no-underline">
            {showLogo && (
              <Image 
                src={logoPath}
                alt="Prasanna Picture Palace Logo"
                width={150}
                height={50}
                className="h-auto max-h-[50px] max-w-[200px] object-contain"
                priority
              />
            )}
            {(showTextWithLogo || !showLogo) && (
              <h2 className="text-primary text-2xl font-bold m-0 whitespace-nowrap">
                Prasanna Picture Palace
              </h2>
            )}
          </Link>
          <ul className="flex list-none gap-4 md:gap-8 m-0 p-0 text-sm md:text-base">
            <li>
              <Link href="/" className="text-text-dark font-medium hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-text-dark font-medium hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/service" className="text-text-dark font-medium hover:text-primary transition-colors">
                Service
              </Link>
            </li>
            <li>
              <Link href="/category" className="text-text-dark font-medium hover:text-primary transition-colors">
                Category
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-text-dark font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
