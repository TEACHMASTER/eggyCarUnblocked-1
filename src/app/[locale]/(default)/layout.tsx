import 'aos/dist/aos.css'
import { allPosts } from 'contentlayer/generated'
import { locales, defaultLocale } from "@/src/i18n/config";

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  const post = allPosts.find((post) => post.slug === `${locale}/shouye`);

  return {
    title: post?.title || '',
    description: post?.description || '',
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}${params.locale==defaultLocale?'':'/'+params.locale}/`,
    },
  };
}

export default function DefaultLayout({
  children,
  params
}: {
    children: React.ReactNode,
    params: {locale:string}
}) { 
  return (
    <>
      <main className="grow">
        {children}
      </main>
    </>
  )
}
