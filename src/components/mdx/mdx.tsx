import { useMDXComponent } from 'next-contentlayer/hooks'
import AudioBookmark from './audio-bookmark'
import Contributor from './contributor'

const mdxComponents = {
  AudioBookmark: AudioBookmark,
  Contributor: Contributor
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article className=' prose-a:underline hover:prose-a:no-underline'>
      <Component components={{ ...mdxComponents }} />
    </article>
  )
}
