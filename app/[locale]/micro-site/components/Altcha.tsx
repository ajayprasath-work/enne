import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react'
import { useScopedI18n } from '@/locales/client';

import 'altcha'

interface AltchaProps {
  onStateChange?: (ev: Event | CustomEvent) => void;
}

const Altcha = forwardRef<{ value: string | null }, AltchaProps>(({ onStateChange }, ref) => {
  
  const widgetRef = useRef<HTMLElement>(null)
  const [value, setValue] = useState<string | null>(null)

  useImperativeHandle(ref, () => {
    return {
      get value() {
        return value;
      }
    };
  }, [value])

  useEffect(() => {
    const handleStateChange = (ev: Event | CustomEvent) => {
      if ('detail' in ev) {
        setValue(ev.detail.payload || null)
        onStateChange?.(ev)
      }
    }

    const { current } = widgetRef

    if (current) {
      current.addEventListener('statechange', handleStateChange)
      return () => current.removeEventListener('statechange', handleStateChange)
    }
  }, [onStateChange])

  return (
    <altcha-widget
  
    hidefooter
    hidelogo
      ref={widgetRef}
      style={{
        '--altcha-max-width': '100%',
        '--altcha-color-border': '#FFC9CB',
        '--altcha-color-border-focus': '#B9ABC8',
        '--altcha-color-text': '#041B37',
     
      }}
      debug
      test
    ></altcha-widget>
  ) 
})

export default Altcha
