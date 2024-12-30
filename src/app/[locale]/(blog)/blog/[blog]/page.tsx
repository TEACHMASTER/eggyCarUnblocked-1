import Link from 'next/link'
import type { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/src/components/mdx/mdx'
import PostDate from '@/src/components/post-date'
import Sidebar from '@/src/components/sidebar'
import { locales, defaultLocale } from "@/src/i18n/config";
import { redirect } from 'next/navigation'
export async function generateMetadata({ params }: {
  params: { blog: string,locale:string }
}): Promise<Metadata | undefined> {

  const post = allPosts.find((post) => post.slug === params.locale+"/blog/"+params.blog)

  if (!post) return

  const { title, summary: description } = post

  return {
    title,
    description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}${params.locale==defaultLocale?'':'/'+params.locale}/blog/${params.blog}`,
    },
  }
}

export default async function SinglePost({ params }: {
  params: { blog: string,locale:string }
}) {
  const post = allPosts.find((post) =>  post.slug.startsWith(params.locale+"/blog/"+params.blog))

  if (!post) redirect(`/${params.locale}/blog`)

  return (
    <main className="grow overflow-hidden px-6 mt-12">
      <div className="w-full h-full max-w-[1072px] mx-auto flex flex-col">
        <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">
          {/* Middle area */}
          <div className="grow">
            <div className="max-w-[900px]">
              <article>
                {/* Post header */}
                <header>
                  <div className="flex items-center justify-between mb-1">
                    {/* Post date */}
                    <div className="text-xs text-slate-900 dark:text-slate-100 uppercase">
                      <span className="text-sky-500">—</span> <PostDate dateString={post.publishedAt || ''} /> <span className="text-slate-400 dark:text-slate-600">·</span> 4 Min read
                    </div>
                    {/* Share buttons */}
                    <ul className="inline-flex list-none">
                      <li>
                        <a
                          className="flex justify-center items-center text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-500 transition duration-150 ease-in-out"
                          href="#0"
                          aria-label="Twitter"
                        >
                          <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex justify-center items-center text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-500 transition duration-150 ease-in-out"
                          href="#0"
                          aria-label="Facebook"
                        >
                          <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.023 24 14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex justify-center items-center text-slate-400 dark:text-slate-500 hover:text-sky-500 dark:hover:text-sky-500 transition duration-150 ease-in-out"
                          href="#0"
                          aria-label="Share"
                        >
                          <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 14c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .223.029.439.075.649l-3.22 2.012A2.97 2.97 0 0 0 12 13c-1.654 0-3 1.346-3 3s1.346 3 3 3a2.97 2.97 0 0 0 1.855-.661l3.22 2.012c-.046.21-.075.426-.075.649 0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3a2.97 2.97 0 0 0-1.855.661l-3.22-2.012c.046-.21.075-.426.075-.649 0-.223-.029-.439-.075-.649l3.22-2.012A2.97 2.97 0 0 0 20 14Z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h1 className="h1 font-aspekta mb-4">{post.title}</h1>
                </header>
                <Mdx code={post.body.code} />
              </article>
            </div>
          </div>

          <aside className="md:w-[240px] lg:w-[300px] shrink-0">
            <div className="space-y-6">
              <Sidebar post={post} />
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
