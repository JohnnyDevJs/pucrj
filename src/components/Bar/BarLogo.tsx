import Image from 'next/image'

import communicateLogo from '@/assets/communicate-logo.svg'

export function BarLogo() {
  return (
    <a
      href="http://comunicar2.vrc.puc-rio.br/cgi/cgilua.exe/sys/start.htm?tpl=home"
      target="_blank"
    >
      <Image src={communicateLogo} alt="Comunicar" />
    </a>
  )
}
