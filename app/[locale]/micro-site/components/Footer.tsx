import React from 'react'
import { useScopedI18n } from '@/locales/client';

function Footer() {
  const year = new Date().getFullYear();
  const tIndex = useScopedI18n("Footer")
  return (
    <footer className='py-5 bg-white'>
       <div className='text-center text-sm font-medium tracking-wider text-primary'>{tIndex("copyright")} © {year} <a href='#' title='Techstar'>Techstar</a> - {tIndex("rights")}</div>
    </footer>
  )
}

export default Footer