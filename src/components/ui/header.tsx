import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import {useTranslations} from 'next-intl';
import type { Locale } from "@/src/i18n/config"
import { LanguageSwitcher } from "../language-switcher"
import { Button } from './button'
import { Github } from 'lucide-react'; 

export default function Header({lang, nav = true}: {
  nav?: boolean,
  lang: Locale,
}) {
  const t = useTranslations('nav'); 

  return (
    <header className="fixed w-full z-30 
                      bg-gray-900/50 backdrop-blur-md
                      border-b border-gray-800/50
                      shadow-lg shadow-purple-500/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Link 
              className="block transition-transform duration-200 hover:scale-105" 
              href="/" 
              aria-label="Cruip"
            >
              <Image 
                src={Logo} 
                width={100} 
                height={100} 
                priority 
                alt="Eggy Car Unblocked - Play Eggy Car & Fun Egg Game Online"
                className="rounded-full"
              />
            </Link>
          </div>

          {nav && (
            <nav className="flex grow justify-end">
              <ul className="flex items-center gap-2 list-none">
                <li>
                  <Link href={`/${lang}/blog`}>
                    <Button 
                      variant="ghost" 
                      size="lg"
                      className="h-9 px-4 
                                text-gray-300 hover:text-white
                                hover:bg-purple-500/10
                                transition-colors duration-200"
                    >
                      {t('blog')}
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/TEACHMASTER/eggycarunblocked.com" target="_blank">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="text-gray-300 hover:text-white
                                hover:bg-purple-500/10
                                transition-colors duration-200"
                    >
                      <Github className="h-[1.6rem] w-[1.6rem]"/>
                    </Button>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}