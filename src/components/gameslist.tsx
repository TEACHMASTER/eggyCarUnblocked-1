import Image from 'next/image'
import { allPosts } from 'contentlayer/generated'
import { Fragment } from 'react'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

export default function GamesList({ slug }: { slug: string }) {
  const t = useTranslations('gameslist')
  const locale = useLocale()
  const Games = allPosts
    .find(post => 
        post.slug.startsWith(`${locale}/gameList/${slug}-games-list`)
  )
  const gamelist = Games?.items
  if (!gamelist) return null

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-10">
          {/* Section header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">{ t('title') }</h2>
          </div>

          {/* Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gamelist.map((game,key) => (
              <Fragment key={key}>
                <Link href={`/${locale}/${game.name}`}>
                  <div className="p-5 glass rounded-3xl transition-transform duration-300">
                    <div className="flex items-start mb-4">
                      <div className="relative w-12 h-12 mr-3">
                        <Image 
                          className="rounded-full object-cover"
                          src={`${process.env.NEXT_PUBLIC_URL}/images/${game.logoSrc}`}
                          fill
                          sizes="(max-width: 48px) 100vw"
                          alt={game.alt || ''} 
                        />
                      </div>
                      <div>
                        <h3 className="font-hkgrotesk font-extrabold">{game.title}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-blue-500">Slope</span>
                          <span className="text-sm text-slate-400">•</span>
                          <span className="text-sm text-slate-400">Free to Play</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 line-clamp-2">
                      {game.description}
                    </p>
                  </div>
                </Link>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 