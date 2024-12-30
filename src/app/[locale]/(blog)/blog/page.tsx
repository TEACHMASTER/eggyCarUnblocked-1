import type { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import BlogList from '@/src/components/bloglist'
import { locales, defaultLocale } from "@/src/i18n/config";

export async function generateMetadata({ params }: {
  params: {locale:string }
}): Promise<Metadata | undefined> {

  const post = allPosts.find((post) => post.slug.startsWith(params.locale+"/blog/"))

  if (!post) return

  const { title, summary: description } = post

  return {
    title,
    description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}${params.locale==defaultLocale?'':'/'+params.locale}/blog`,
    },
  }
}

export default async function SinglePost({ params }: {
  params: { locale:string }
}) {

  return (
    <BlogList/>
  )
}
