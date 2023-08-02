import { Container } from '@/app/layout/Container'
import { Bar } from '.'

export function BarRoot() {
  return (
    <div className="h-12 w-full items-center bg-gray-300">
      <Container.Root className="flex items-center justify-between">
        <Bar.Logo />
        <Bar.Links />
      </Container.Root>
    </div>
  )
}
