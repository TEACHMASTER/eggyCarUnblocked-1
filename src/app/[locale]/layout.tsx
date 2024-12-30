import {NextIntlClientProvider} from 'next-intl';
import {getMessages,getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import { routing } from '@/src/i18n/routing';
import '@/src/app/css/style.css'
import { Inter, Permanent_Marker } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'
import { Locale } from '@/src/i18n/config';
import Header from '@/src/components/ui/header'
import Footer from '@/src/components/ui/footer'
import { Metadata } from 'next';
import { Breadcrumb } from '@/src/components/ui/breadcrumb'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const permanent_marker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-permanent-marker',
  display: 'swap'
})


const hkgrotesk = localFont({
  src: [
    {
      path: '../fonts/HKGrotesk-Medium.woff2',
      weight: '500',
    },
    {
      path: '../fonts/HKGrotesk-ExtraBold.woff2',
      weight: '800',
    },        
  ],
  variable: '--font-hkgrotesk',
  display: 'swap',  
})


export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const t = await getTranslations();
  const url = process.env.NEXT_PUBLIC_URL || 'https://eggy-car-unblocked.com/';
  const title = t('metadata.title');
  const description = t('metadata.description');
  
  return {
    title: {
      default: title,
      template: `%s | ${title}`
    },
    description: description,
    icons: {
      icon: '/images/logo.png',      // 设置 favicon
      shortcut: '/images/logo.png',     // 快捷方式图标
      apple: '/images/logo.png',     // 苹果设备上的图标
    },
    metadataBase: new URL(url),
    alternates: {
      canonical: `${url}/${params.locale}`,
      languages: {
        'en-US': `${url}/en-US`,
        // 添加其他支持的语言
      },
    },
    openGraph: {
      type: 'website',
      locale: params.locale,
      url: `${url}/${params.locale}`,
      title: title,
      description: description,
      siteName: t('common.name'),
      // images: [
      //   {
      //     url: `${url}/images/og-image.jpg`, // 添加 Open Graph 图片
      //     width: 1200,
      //     height: 630,
      //     alt: title,
      //   }
      // ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  }
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
 
  return (
    <html lang={locale} className="dark">
      <head>
        <meta name="google-adsense-account" content="ca-pub-3394687558379500"/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3394687558379500"
        crossOrigin="anonymous"></script>
      </head>
      <body suppressHydrationWarning={true} className={`${inter.variable} ${permanent_marker.variable} ${hkgrotesk.variable} font-inter antialiased bg-gray-900 text-slate-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header lang={params.locale as Locale} />
            <main className="grow">
              <Breadcrumb lang={params.locale} />
              {children}
            </main>
            <Footer/>
          </NextIntlClientProvider>
        </div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B4P7XCJTG6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B4P7XCJTG6');
          `}
        </Script>
      </body>
    </html>
  )
}