import type { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import { defaultLocale } from '@/src/i18n/config'

export async function generateMetadata({ params }: {
  params: {locale:string }
}): Promise<Metadata | undefined> {

  const post = allPosts.find((post) => post.slug.startsWith(params.locale+"/about"))

  if (!post) return

  const { title, description } = post

  return {
    title,
    description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}${params.locale==defaultLocale?'':'/'+params.locale}/about`,
    },
  }
}

export default async function About({ params }: {
  params: { locale:string }
}) {

  return (
   <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold mb-8
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-purple-400 to-pink-500">
              About US
            </h1>
            
            <div className="space-y-6 text-gray-400">
              <p>Eggy Car is a physics-based driving game where you control an egg-shaped car through challenging tracks. Drive your egg car through multiple levels while collecting coins and avoiding obstacles. The game features unique egg-shaped vehicles with different characteristics.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
