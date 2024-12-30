import { redirect } from 'next/navigation'

export default function CatchAll({
  params: { locale }
}: {
  params: { locale: string }
}) {
  // 301 永久重定向到首页
  redirect(`/${locale}`)
} 