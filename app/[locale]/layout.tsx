// app/[locale]/client/layout.tsx
import { ReactElement } from 'react'
import { I18nProviderClient } from '../../locales/client'
import { getStaticParams } from '../../locales/server'
import { setStaticParamsLocale } from 'next-international/server'

export function generateStaticParams() {
    return getStaticParams()
  }

// If you are using Next.js < 15, you don't need to await `params`:
// export default function SubLayout({ params: { locale }, children }: { params: { locale: string }, children: ReactElement }) {
export default async function Layout({ params, children }: { params: Promise<{ locale: string }>, children: ReactElement }) {
  const { locale } = await params
  setStaticParamsLocale(locale)

  return (
   
        <I18nProviderClient locale={locale}>
      {children}
    </I18nProviderClient>

    
  )
}