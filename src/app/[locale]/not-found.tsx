// src/app/not-found.tsx
'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');
  const locale = useLocale();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div 
        data-aos="fade-down"
        className="text-center"
      >
        <h1 className="font-permanent-marker text-6xl md:text-8xl text-slate-800 dark:text-slate-100 mb-6">
          404
        </h1>
        <div className="relative w-64 h-64 mx-auto mb-8">
          <Image
            src="/images/logo.png"
            alt="404 image"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          {t('title')}
        </h2>
        <p className="mb-8 max-w-md mx-auto text-slate-600 dark:text-slate-300">
          {t('message')}
        </p>
        <Link 
          href={`/${locale}`}
         
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {t('backHome')}
        </Link>
      </div>
    </div>
  );
}
