'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/src/lib/utils'

interface BreadcrumbProps {
  lang: string
  className?: string
}

export function Breadcrumb({ lang, className }: BreadcrumbProps) {
  const pathname = usePathname()
  
  const segments = pathname
    .split('/')
    .filter(segment => segment !== '' && segment !== lang)
  
  const breadcrumbItems = segments.map((segment, index) => {
    const path = `/${lang}/${segments.slice(0, index + 1).join('/')}`
    return {
      label: segment,
      path
    }
  })

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
      <nav 
        aria-label="Breadcrumb"
        className={cn(
          "flex items-center space-x-3 text-sm",
          "h-16 md:h-20 mt-16 md:mt-20",
          "bg-gray-800/30 backdrop-blur-sm rounded-lg px-4",
          "border border-gray-700/50",
          className
        )}
      >
        <Link 
          href={`/${lang}`}
          className="flex items-center text-purple-400 hover:text-purple-300 
                   transition-colors duration-200"
        >
          <Home className="h-4 w-4" />
          <span className="sr-only">Home</span>
        </Link>

        {breadcrumbItems.map((item, index) => (
          <div key={item.path} className="flex items-center">
            <ChevronRight 
              className="h-4 w-4 flex-shrink-0 text-gray-500" 
            />
            <Link
              href={item.path}
              className={cn(
                "ml-2 transition-all duration-200 hover:text-purple-400",
                index === breadcrumbItems.length - 1 
                  ? "font-medium text-white" 
                  : "text-gray-400 hover:text-purple-400"
              )}
            >
              <span className="capitalize">
                {item.label.replace(/-/g, ' ')}
              </span>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  )
} 