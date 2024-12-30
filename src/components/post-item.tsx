import Link from 'next/link'
import Image from 'next/image'
import PostDate from './post-date'

export default function PostItem({ ...props }) {
  return (
    <Link 
      href={props.slug}
      className="group block rounded-xl 
                bg-gray-800/30 backdrop-blur-sm 
                border border-gray-700/50
                shadow-lg shadow-purple-500/5
                hover:shadow-purple-500/20
                hover:border-purple-500/50
                transition-all duration-300"
      style={!['All', props.category].includes(props.selectedCategory) ? { display: 'none' } : {}}
    >
      <div className="p-6 flex flex-col sm:flex-row items-start gap-6">
        <div className="flex-grow min-w-0">
          <h3 className="font-hkgrotesk text-xl font-bold 
                       text-transparent bg-clip-text 
                       bg-gradient-to-r from-purple-400 to-pink-500 
                       mb-2 truncate">
            {props.title}
          </h3>
          
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
            <button 
              onClick={(e) => {
                e.preventDefault()
                props.onCategoryClick?.(props.category)
              }}
              className="font-medium text-purple-400 hover:text-pink-400 
                       transition duration-150"
            >
              {props.category}
            </button>
            <span className="text-gray-600">•</span>
            <PostDate dateString={props.publishedAt} />
            <span className="text-gray-600">•</span>
            <span>Episode {props.episode}</span>
          </div>
          
          <p className="text-gray-400 line-clamp-2">{props.summary}</p>
        </div>
      </div>
    </Link>
  )
}
