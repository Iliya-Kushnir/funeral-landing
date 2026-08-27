import { Phone } from 'lucide-react'

const items = [
  {
    title: 'Домовини',
    text: 'Від простих до елітних моделей.',
    price: 'Лаковані домовини — від 2600 грн',
  },
  {
    title: 'Оградки на цвинтар',
    text: 'Виготовлення та монтаж під розмір.',
    price: 'Вартість — від 1350 грн',
  },
  {
    title: 'Хрести',
    text: "Великий асортимент: від простих дерев'яних до елітних резних.",
    price: 'Ціна за домовленістю',
  },
  {
    title: 'Транспортні послуги',
    text: 'Стандартний катафалк Vito, пасажирський автобус або VIP Cadillac Escalade.',
    price: 'Розрахунок за маршрутом',
  },
]

export function PricingSection() {
  return (
    <section id="prices" className="border-b border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="flex max-w-2xl flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Ціни</span>
          <h2 className="text-balance text-2xl font-semibold sm:text-3xl">Доступні ціни та атрибутика</h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Остаточну вартість ми узгоджуємо до початку робіт — жодних прихованих націнок.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-4 rounded-sm border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/50"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              <p className="mt-auto border-t border-border pt-4 text-base font-semibold text-primary">{item.price}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-4 rounded-sm border border-primary/30 bg-accent/25 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-pretty text-sm leading-relaxed sm:text-base">
            Потрібен точний кошторис? Зателефонуйте — порадимо та розрахуємо вартість безкоштовно.
          </p>
          <a
            href="tel:0660053767"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            0660053767
          </a>
        </div>
      </div>
    </section>
  )
}
