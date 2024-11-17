// Client Component
'use client'
import { useI18n, useScopedI18n } from '../../locales/client'
 
export default function Page() {
  const t = useI18n()
  const scopedT = useScopedI18n('Footer')
 
  return (
    <div>
 
      {/* Both are equivalent: */}
      <p>{scopedT("copyright")}</p>
 
     
    </div>
  )
}
 
