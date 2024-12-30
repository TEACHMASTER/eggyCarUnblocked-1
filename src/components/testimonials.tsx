import Image from 'next/image'
import { allPosts } from 'contentlayer/generated'
import { Fragment } from 'react'
import { useLocale } from 'next-intl'
import { Game} from '@/src/lib/dataType'
import { useTranslations } from 'next-intl'

export default function Testimonials({ slug }: { slug: string }) {
  const t = useTranslations('testimonials');
  const locale = useLocale();   
  const game = allPosts.find((post) => post.slug === `${locale}` + slug);
  if (!game) return
  const items = game?.items as Game[]
  if (!items) return

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mb-12 space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold relative inline-block
                            text-transparent bg-clip-text 
                            bg-gradient-to-r from-purple-400 to-pink-500">
                { t('title')}
                <span className="absolute -bottom-2 left-0 w-full h-0.5 
                               bg-gradient-to-r from-purple-500 to-pink-500 
                               rounded-full opacity-70"></span>
              </h2>
              <p className="text-base text-gray-400 max-w-3xl
                          border-l-4 border-purple-500/50 
                          pl-6 py-2 my-4
                          bg-purple-500/5 rounded-r-lg
                          backdrop-blur-sm">
                { t('desc')}
              </p>
          </div>
              
          {/* Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item, index) => (
              <Fragment key={index}>
                <div className={`
                  p-6 rounded-xl transition-all duration-300
                  bg-gray-800/30 backdrop-blur-sm
                  border border-gray-700/50
                  hover:border-purple-500/50
                  shadow-lg shadow-purple-500/5
                  hover:shadow-purple-500/20
                  odd:rotate-1 even:-rotate-1
                  group
                `}>
                  <div className="flex items-start mb-4">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <Image 
                        className="relative rounded-full transform transition-transform duration-300 group-hover:scale-105" 
                        src={`${process.env.NEXT_PUBLIC_URL}/images/${item.logoSrc}`} 
                        width={48} 
                        height={48} 
                        alt={item.name || ''} 
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}