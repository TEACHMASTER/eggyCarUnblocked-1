import Image from 'next/image'
import { allPosts } from 'contentlayer/generated'
import { Fragment } from 'react'
import Link from 'next/link'
import { Game} from '@/src/lib/dataType'

export default function Timonials({ slug,locale }: { slug: string,locale:string }) {
  const game = allPosts.find((post) => post.slug === locale+'/gameList/' + slug);
  if (!game) return
  const items = game?.items as Game[]
  if (!items) return

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mb-12">
             
          </div>

          {/* Content */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((item, index) => (
              <Fragment key={index}>
                <div className="p-5 glass rounded-3xl odd:rotate-1 even:-rotate-1">
                  <Link href={`${process.env.NEXT_PUBLIC_URL}/${item.name||''}`}>
                    <div className="flex items-start mb-4">
                      <Image className="shrink-0 rounded-full mr-3" src={`${process.env.NEXT_PUBLIC_URL}/images/${item.logoSrc}`} width={48} height={48} alt={item.name || ''} />
                      <div>
                        <h3 className="font-hkgrotesk font-extrabold ">{item.title}</h3>
                      </div>
                    </div>
                    <p>
                      {item.description}
                    </p>
                  </Link>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
