import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-gradient-to-b from-gray-900/0 to-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-12">
          {/* Top section with logo and copyright */}
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="mb-4 md:mb-0">
              <div className="shrink-0 flex flex-col md:flex-row items-center">
                <Link 
                  className="inline-flex mb-2 md:mb-0 
                            transition-transform duration-200 hover:scale-105" 
                  href="/" 
                  aria-label="Eggy Car Unblocked - Home"
                >
                  <Image 
                    src={Logo} 
                    width={50} 
                    height={50} 
                    alt="Eggy Car Unblocked - Play Fun Car Games Online" 
                    priority
                    className="rounded-full"
                  />
                </Link>
                <p className="text-sm ml-4 text-gray-400">
                  Copyright © {new Date().getFullYear()} Eggy Car Unblocked
                  <span className="md:hidden lg:inline">. All rights reserved.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Navigation sections */}
          <nav className="grid grid-cols-1 md:grid-cols-3 gap-8" aria-label="Footer Navigation">
            {/* Popular Games */}
            <div>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/blog" 
                    className="text-sm text-gray-400 
                              hover:text-purple-400
                              transition-colors duration-200"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Featured Games */}
            <div>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/privacy" 
                    className="text-sm text-gray-400 
                              hover:text-purple-400
                              transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Special Games */}
            <div>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-sm text-gray-400 
                              hover:text-purple-400
                              transition-colors duration-200">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}
