import { getLocale } from 'next-intl/server'
import GameIframe from './GameIframe'
import { allPosts } from 'contentlayer/generated'
import { useLocale } from 'next-intl';

export default function ShowGame({ slug }: { slug: string }) {
  const locale = useLocale();
  const post = allPosts.find((post) => post.slug === `${locale}`+slug)

  if (!post?.src) return

  return (
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="w-full flex justify-center">
            <div className="w-full md:w-[900px] lg:w-[1100px] xl:w-[1400px] pt-4 pb-12 md:pt-8 md:pb-20 min-h-[250px] md:min-h-[500px]">
              <GameIframe 
                src={post.src || ''} 
                title={post.title || ''} 
                logoSrc={`${process.env.NEXT_PUBLIC_URL}/images/${post.logoSrc}`}
              />
            </div>
          </div>
        </div>
      </section>
  )
}