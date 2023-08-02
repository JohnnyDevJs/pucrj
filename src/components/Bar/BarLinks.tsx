import { getCommunicateMenu } from '@/repositories/menu/getCommunicateMenu'

export async function BarLinks() {
  const items = await getCommunicateMenu()

  return (
    <nav className="flex gap-7">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.url}
          className="text-xs font-semibold text-white transition-colors duration-500 hover:text-white/60"
          target="_blank"
        >
          {item.title}
        </a>
      ))}
    </nav>
  )
}
