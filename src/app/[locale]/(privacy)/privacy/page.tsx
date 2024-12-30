import type { Metadata } from 'next'
import { allPosts } from 'contentlayer/generated'
import { defaultLocale } from '@/src/i18n/config'
export async function generateMetadata({ params }: {
  params: {locale:string }
}): Promise<Metadata | undefined> {

  const post = allPosts.find((post) => post.slug.startsWith(params.locale+"/privacy"))

  if (!post) return

  const { title, description } = post

  return {
    title,
    description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}${params.locale==defaultLocale?'':'/'+params.locale}/privacy`,
    },
  }
}

export default async function Privacy({ params }: {
  params: { locale:string }
}) {
  return (
   <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold relative inline-block mb-8">
              <span className="text-transparent bg-clip-text 
                           bg-gradient-to-r from-purple-400 to-pink-500">
                Privacy Policy
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-0.5 
                           bg-gradient-to-r from-purple-500 to-pink-500 
                           rounded-full opacity-70"></span>
            </h1>
            
            <div className="mb-8 p-4 rounded-lg bg-gray-800/30 backdrop-blur-sm 
                          border border-gray-700/50">
              <p className="text-gray-400 m-0">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="space-y-8 text-gray-400">
              <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm 
                          border border-gray-700/50">
                <p>eggy-car-unblocked.com has created this privacy statement in order to demonstrate our firm commitment to privacy. Hooda Math is intended to provide fun and educational resources for kids and teens to use under the guidance of their parents and teachers. As required by The Children's Online Privacy Protection Act ("COPPA"), we provide this privacy policy to inform parents and legal guardians (collectively, "Parents") about our privacy practices on our site http://eggy-car-unblocked.com/.</p>
              </div>

              <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm 
                          border border-gray-700/50">
                <p>We use third-party advertising companies to serve ads when you visit our Web site. In response to the new COPPA rules, eggy-car-unblocked.com has opted out of behaviorally targeted ads from all of our advertising networks, and instead only shows contextually-based ads or other carefully-selected ads which are not based on a user's browsing behavior.</p>
              </div>

              <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm 
                          border border-gray-700/50">
                <p>We have asked all of our advertising networks to turn off all behaviorally targeted ads that would track a user or attempt to create a profile on any of our users. We have also alerted our advertising agencies that a portion of our audience is "under 13" and that they need to adhere to all COPPA rules and regulations.</p>
              </div>

              <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm 
                          border border-gray-700/50">
                <p className="mb-4">You can view the privacy policies for each ad company by following the links below:</p>
                <ul className="list-none pl-0 space-y-2">
                  <li>
                    <a href="https://policies.google.com/privacy" 
                       className="text-purple-400 hover:text-pink-400 transition-colors duration-200">
                      Google Adsense Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://tools.google.com/dlpage/gaoptout" 
                       className="text-purple-400 hover:text-pink-400 transition-colors duration-200">
                      Google Analytics Opt-out
                    </a>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm 
                          border border-gray-700/50">
                <h2 className="text-xl font-bold mb-4 text-transparent bg-clip-text 
                           bg-gradient-to-r from-purple-400 to-pink-500">
                  Children's Guidelines
                </h2>
                <p>We care about children and understand that they have special privacy needs. Therefore, we have adopted the following privacy policy regarding children: We will NOT collect, use, or distribute to third parties personally identifiable information.</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
