'use client'

import { useState } from 'react'
import { allPosts } from 'contentlayer/generated'
import PostItem from './post-item'
import { useLocale } from 'next-intl'

export default function BlogList() {
  const locale = useLocale()
  const [category, setCategory] = useState<string>('eggycar')

  // Sort posts by date
  const posts = allPosts.filter((post) => post.slug.startsWith(locale + "/blog/")).sort((a, b) => {
    return (new Date(a.publishedAt || '') > new Date(b.publishedAt || '')) ? -1 : 1
  })

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-0 relative">
              <span className="relative inline-block">
                Latest Posts
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
              </span>
            </h2>
            
            {/* Filters */}
            <div className="flex flex-wrap justify-center md:justify-end gap-3">
              <button
                className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 ease-in-out 
                  ${category === 'All' 
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                  }`}
                onClick={() => setCategory('All')}
              >
                All Posts
              </button>
              {/* <button
                className={`font-medium text-sm bg-white hover:bg-slate-100 px-3 py-0.5 rounded-full inline-flex transition duration-150 ease-in-out m-1 shadow-sm ${category === 'Indie Stories' ? 'text-blue-500 !bg-white' : 'text-slate-500'
                  }`}
                onClick={() => setCategory('Indie Stories')}
              >
                Indie Stories
              </button>
              <button
                className={`font-medium text-sm bg-white hover:bg-slate-100 px-3 py-0.5 rounded-full inline-flex transition duration-150 ease-in-out m-1 shadow-sm ${category === 'Software Social' ? 'text-blue-500 !bg-white' : 'text-slate-500'
                  }`}
                onClick={() => setCategory('Software Social')}
              >
                Software Social
              </button>
              <button
                className={`font-medium text-sm bg-white hover:bg-slate-100 px-3 py-0.5 rounded-full inline-flex transition duration-150 ease-in-out m-1 shadow-sm ${category === 'Interviews' ? 'text-blue-500 !bg-white' : 'text-slate-500'
                  }`}
                onClick={() => setCategory('Interviews')}
              >
                Interviews
              </button> */}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, postIndex) => (
              <div 
                key={postIndex} 
                className="group bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm 
                         border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300
                         hover:shadow-xl hover:shadow-purple-500/10"
              >
                <PostItem selectedCategory={category} {...post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}