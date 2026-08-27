import { Bus, Car, Flower2, HandHeart, Shirt, Shovel } from 'lucide-react'

const services = [
  {
    icon: Car,
    title: 'Перевезення померлих',
    text: 'Особистий автопарк: від чорного катафалка Mercedes Vito до VIP-перевезення на білому Cadillac Escalade.',
  },
  {
    icon: Flower2,
    title: 'Підготовка тіла та танатопраксія',
    text: 'Професійний макіяж, санітарна обробка та підготовка до прощання.',
  },
  {
    icon: Shirt,
    title: 'Ритуальна атрибутика та одяг',
    text: 'Великий вибір одягу, включаючи традиційні вишиванки.',
  },
  {
    icon: HandHeart,
    title: 'Обслуговування похорону',
    text: 'Професійна бригада хлопців для винесення та супроводу.',
  },
  {
    icon: Shovel,
    title: 'Благоустрій могил',
    text: 'Встановлення огорож, засипка щебенем, укладання штучної трави.',
  },
  {
    icon: Bus,
    title: 'Пасажирські перевезення',
    text: 'Автобус для супроводу родичів та близьких.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="flex max-w-2xl flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Наші послуги</span>
          <h2 className="text-balance text-2xl font-semibold sm:text-3xl">
            Повний супровід на кожному етапі організації похорону
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Ми беремо на себе всі організаційні питання, щоб родина мала час попрощатися з близькою людиною.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="group flex flex-col gap-4 rounded-sm border border-border bg-card p-6 shadow-sm transition-colors hover:border-primary/50"
            >
              <service.icon
                className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary"
                aria-hidden="true"
              />
              <h3 className="text-lg font-semibold leading-snug">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
