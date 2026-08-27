import Image from 'next/image'

const fleet = [
  {
    src: '/images/fleet-vito.jpg',
    alt: 'Чорний катафалк Mercedes-Benz Vito',
    title: 'Mercedes-Benz Vito',
    label: 'Катафалк',
    text: 'Класичний чорний катафалк для перевезення померлих містом та за межі області.',
  },
  {
    src: '/images/fleet-escalade.png',
    alt: 'Білий Cadillac Escalade для VIP-перевезення',
    title: 'Cadillac Escalade',
    label: 'VIP',
    text: 'Білий позашляховик преміум-класу для особливо урочистого прощання.',
  },
  {
    src: '/images/fleet-bus.png',
    alt: 'Пасажирський автобус для супроводу родини',
    title: 'Пасажирський автобус',
    label: 'Супровід',
    text: 'Комфортне перевезення родичів та близьких до церкви й на цвинтар.',
  },
]

export function FleetSection() {
  return (
    <section id="fleet" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="flex max-w-2xl flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Автопарк</span>
          <h2 className="text-balance text-2xl font-semibold sm:text-3xl">Власний транспорт для будь-яких потреб</h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Уся техніка доглянута та готова до виїзду в будь-яку годину.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fleet.map((car) => (
            <li key={car.title} className="overflow-hidden rounded-sm border border-border bg-card shadow-sm">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={car.src}
                  alt={car.alt}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-sm bg-background/85 px-2.5 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                  {car.label}
                </span>
              </div>
              <div className="flex flex-col gap-2 p-5">
                <h3 className="text-base font-semibold">{car.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{car.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
