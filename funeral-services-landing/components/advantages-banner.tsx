import { Award, Clock, MapPin, ReceiptText } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Понад 10 років досвіду',
    text: 'Бездоганна репутація та довіра сотень родин Калуша й району.',
  },
  {
    icon: Clock,
    title: 'Працюємо 24/7',
    text: 'Виїзд та допомога у будь-який час дня і ночі, без вихідних.',
  },
  {
    icon: ReceiptText,
    title: 'Прозорі ціни',
    text: 'Кошторис узгоджується заздалегідь — без прихованих націнок.',
  },
]

export function AdvantagesBanner() {
  return (
    <section className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="flex flex-col gap-4 border border-primary/30 bg-accent/25 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
          <MapPin className="h-7 w-7 shrink-0 text-primary" aria-hidden="true" />
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold sm:text-xl">Зручне розташування — м. Калуш, вул. Медична, 6</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Наш офіс розташований безпосередньо в приміщенні моргу, що дозволяє оформити всі документи та розпочати
              підготовку максимально швидко.
            </p>
          </div>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="flex flex-col gap-3 rounded-sm border border-border bg-card p-6 shadow-sm"
            >
              <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              <h3 className="text-base font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
