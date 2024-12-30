"use client"

import { Button } from './ui/button'
import { locales, localeNames, type Locale,defaultLocale } from '@/src/i18n/config'
import { Menu, Transition } from '@headlessui/react'
import { Globe } from 'lucide-react'
import { Fragment } from 'react'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const currentLocale = useLocale() as Locale

  const switchLanguage = (locale: Locale) => {
    let newPathname: string;
    
    if (locale === currentLocale) {
      // 如果切换为默认语言，移除语言子目录
      return
    } else if (currentLocale === defaultLocale) {
      // 当前是默认语言，添加新语言前缀
      newPathname = `/${locale}${pathname}`;
    } else {
      // 替换现有语言前缀
      newPathname = pathname.replace(/^\/[^/]+/, `/${locale}`);
    }

    // 更新路由
    router.replace(newPathname);
  }

  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="inline-flex items-center justify-center w-9 h-9 rounded-full text-sm font-medium transition-colors  ">
        <Globe className="h-[1rem] w-[1rem]" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {Object.entries(locales).map(([locale, label]) => (
              <Menu.Item key={locale}>
                {({ active }) => (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => switchLanguage(label)}
                    className={`${
                      active ? 'bg-slate-100 dark:bg-slate-700' : ''
                    } ${
                      currentLocale === label ? 'text-blue-500' : 'text-slate-900 dark:text-slate-100'
                    } w-full justify-start px-4 py-2`}
                  >
                    {localeNames[label as Locale]}
                  </Button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
