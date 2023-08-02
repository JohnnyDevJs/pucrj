import { HtmlHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ContainerRootProps = HtmlHTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}
export function ContainerRoot({ children, ...rest }: ContainerRootProps) {
  return (
    <div className={twMerge('m-auto h-full w-full max-w-7xl', rest.className)}>
      {children}
    </div>
  )
}
