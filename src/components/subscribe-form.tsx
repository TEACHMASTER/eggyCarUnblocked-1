"use client"
import { useTranslations } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useState, useRef } from 'react'

export default function Cargamesunblocked() {
    const [url, setUrl] = useState<string>(`${process.env.NEXT_PUBLIC_URL}${usePathname()}`)

    const input = useRef<HTMLInputElement>(null)

    const copyUrl = () => {
        navigator.clipboard.writeText(url)
        input.current?.select()
    }
    const t = useTranslations("ShareModel");
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-16 md:pt-10">
                    <div className="relative">
                        {/* 背景装饰 - 渐变效果 */}
                        <div
                            className="absolute inset-0 rounded-3xl -mx-20 -z-10 overflow-hidden
                                     bg-gradient-to-br from-gray-800/80 to-gray-900/90 
                                     backdrop-blur-xl"
                            aria-hidden="true"
                        >
                            {/* 背景装饰 - 光晕效果 */}
                            <div className="absolute -top-16 left-1/2 -translate-x-1/3 md:-translate-x-1/2 
                                          pointer-events-none -z-10 blur-2xl opacity-40">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2106" height="1327">
                                    <defs>
                                        <filter id="hi-a" width="133.3%" height="131.3%" x="-16.7%" y="-15.6%" filterUnits="objectBoundingBox">
                                            <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
                                        </filter>
                                    </defs>
                                    <g fill="none" fillRule="evenodd">
                                        <path
                                            fill="#6D28D9" fillOpacity=".72"
                                            d="M1110.164 893.257C1191.124 1079.102 1484 839.962 1484 626.315S883.228 0 669.507 0s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
                                            filter="url(#hi-a)" transform="translate(0 -605)"
                                        />
                                    </g>
                                </svg>
                            </div>
                        </div>

                        {/* 内容区域 */}
                        <div className="py-12 md:py-20 -mx-20 px-20">
                            <div className="max-w-3xl mx-auto text-center">
                                {/* 标题区域 */}
                                <h2 className="font-hkgrotesk text-3xl md:text-4xl font-bold mb-8
                                             text-transparent bg-clip-text 
                                             bg-gradient-to-r from-purple-400 to-pink-500">
                                    {t('desc')}
                                    <span className="font-permanent-marker whitespace-nowrap">
                                        {' '}
                                        <span className="inline-flex relative">
                                            {/* 标题下划线装饰 */}
                                            <svg className="absolute right-0 top-full mt-1 max-w-none -z-10"
                                                 width="235" height="8" viewBox="0 0 235 8">
                                                <path className="fill-purple-500/50"
                                                      d="m62.122 0 .736.129 11.33-.031c1.516-.002 3.042-.003 4.584 0l6.493.028c4.172.02 8.378.046 12.711.104l2.178.032c4.478.074 8.218-.013 12.786.08l5.106.116c15.559.37 32.114.991 49.489 1.857l2.27.114c4.391.228 8.539.39 12.888.613 4.35.224 8.7.434 12.968.64 2.695.115 5.633.3 8.282.455 2.803.138 5.692.303 8.652.495a751.7 751.7 0 0 1 16.286 1.355l2.375.226c4.123.399 4.492.865 2.788 1.244-1.817.475-5.678.645-10.959.483l-2.783-.098c-.313-.012-.63-.026-.95-.04l-3.894-.206-7.828-.405c-5.099-.23-10.236-.481-15.456-.746-4.35-.22-8.504-.377-12.789-.57l-2.59-.122c-5.22-.256-10.24-.433-15.585-.693a464.63 464.63 0 0 0-9.088-.312c-2.989-.09-5.979-.17-8.846-.228L126.6 4.313l-12.14-.117c-8.102-.069-16.139-.108-23.613-.04-7.163.012-13.797.136-20.43.259l-14.243.434-5.209.222c-2.755.122-5.439.255-7.891.428-3.062.223-5.756.507-8.409.796l-1.417.162c-2.088.248-4.053.512-6.458.701-1.342.094-2.356.237-3.698.331-4.845.33-8.099.201-13.623-.446l-.647-.077c-1.383-.155-2.758-.32-4.114-.496l-.544-.076C.469 5.852-.843 5.161.534 4.526l1.08-.44c.822-.333 1.71-.662 2.892-.948 1.252-.304 2.946-.54 4.676-.77l1.882-.25c2.177-.296 5.255-.455 8.12-.654l.57-.04c3.02-.218 6.408-.36 9.714-.53l3.409-.141C42.04.389 51.8.138 62.122 0Z"/>
                                            </svg>
                                            <span className="text-transparent bg-clip-text 
                                             bg-gradient-to-r from-purple-300 to-pink-300 
                                             drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                                {t('title')}
                                            </span>
                                        </span>
                                    </span>
                                </h2>

                                {/* 按钮组 */}
                                <div className="-m-1.5 max-w-xl mx-auto mb-8">
                                    <button className="btn text-white bg-gradient-to-r from-purple-500 to-pink-500 
                                                     hover:from-purple-600 hover:to-pink-600 
                                                     shadow-lg shadow-purple-500/25
                                                     m-1.5 transition-all duration-200">
                                        {t('k1')}
                                    </button>
                                    <button className="btn text-white bg-gradient-to-r from-purple-500 to-pink-500 
                                                     hover:from-purple-600 hover:to-pink-600
                                                     shadow-lg shadow-purple-500/25 
                                                     m-1.5 transition-all duration-200">
                                        {t('k2')}
                                    </button>
                                    <button className="btn text-white bg-gradient-to-r from-purple-500 to-pink-500 
                                                     hover:from-purple-600 hover:to-pink-600
                                                     shadow-lg shadow-purple-500/25 
                                                     m-1.5 transition-all duration-200">
                                        {t('k3')}
                                    </button>
                                    <button className="btn text-white bg-gradient-to-r from-purple-500 to-pink-500 
                                                     hover:from-purple-600 hover:to-pink-600
                                                     shadow-lg shadow-purple-500/25 
                                                     m-1.5 transition-all duration-200">
                                        {t('k4')}
                                    </button>
                                </div>

                                {/* URL 输入框 */}
                                <div className="max-w-[400px] mx-auto">
                                    <div className="w-full">
                                        <label className="sr-only" htmlFor="url">URL</label>
                                        <div className="relative flex items-center">
                                            {/* 输入框背景 */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-gray-800/80 to-gray-800/60 
                                                          rounded-full pointer-events-none -z-10"
                                                aria-hidden="true" />
                                            {/* 输入框 */}
                                            <input
                                                id="url"
                                                type="text"
                                                className="form-input w-full bg-transparent border-transparent 
                                                         text-gray-300 focus:border-purple-500 focus:ring-0 
                                                         pr-24 text-sm"
                                                defaultValue={url}
                                                ref={input}
                                                onChange={(e) => setUrl(e.target.value)}
                                            />
                                            {/* 复制按钮 */}
                                            <button className="absolute inset-0 left-auto text-sm pl-2 pr-3 
                                                           font-medium text-purple-400 hover:text-pink-400 
                                                           transition-colors duration-200"
                                                    onClick={copyUrl}>
                                                <span className="absolute inset-0 right-auto w-px -ml-px my-2 
                                                               bg-gray-700" 
                                                      aria-hidden="true" />
                                                <span>Copy URL</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}