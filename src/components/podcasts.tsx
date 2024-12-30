'use client'

import { useState } from 'react'
import { allPosts } from 'contentlayer/generated'
import PostItem from './post-item'
import { useLocale } from 'next-intl'

export default function Podcasts() {
  const locale = useLocale()
  const [category, setCategory] = useState<string>('eggycar')

  const posts = allPosts.filter((post) => post.slug.startsWith(locale + "/blog/")).sort((a, b) => {
    return (new Date(a.publishedAt || '') > new Date(b.publishedAt || '')) ? -1 : 1
  })

  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-24">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              Latest Podcasts
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto rounded-full"></div>
          </div>

          {/* Podcasts grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, postIndex) => (
              <div key={postIndex} >
                <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
                  <PostItem selectedCategory={category} {...post} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}