import { defineDocumentType, defineNestedType,makeSource } from 'contentlayer/source-files'

const GameItem = defineNestedType(() => ({
  name: 'GameItem',
  fields: {
    title: {type:'string',required:false},
    name: { type: 'string', required: false },
    alt: { type: 'string', required: false },
    logoSrc: { type: 'string', required: false },
    description: { type: 'string', required: false },
  },
}))
const Stats = defineNestedType(() => ({
  name: 'Stats',
  fields: {
    ranking: {type:'number',required:false},
    players: { type: 'number', required: false },
    difficulty: { type: 'number', required: false },
  },
}))


const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: false
    },
    showname: {
      type: 'string',
      required: false
    },
    name: {
      type: 'string',
      required: false
    },
    types: {
      type: 'string',
      required: false
    },
    publishedAt: {
      type: 'date',
      required: false
    },        
    image: {
      type: 'string',
      required: false
    },
    bg: {
      type: 'string',
      required: false
    },    
    audio: {
      type: 'string',
      required: false
    },    
    episode: {
      type: 'string',
      required: false
    },
    category: {
      type: 'string',
      required: false
    },
    summary: {
      type: 'string',
      required: false
    },
    description: {
      type: 'string',
      required: false
    },
    items: {
      type: 'list',
      of: GameItem,
      required: false
    },
    Stats: {
      type: 'list',
      of: Stats,
      required: false
    },
    src: {
      type: 'string',
      required: false
    },
    logoSrc: {
      type: 'string',
      required: false
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => {
        return doc._raw.flattenedPath
      },
    },    
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
})