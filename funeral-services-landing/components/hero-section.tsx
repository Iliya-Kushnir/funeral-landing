import Image from 'next/image'
import { MapPin, Phone } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
        <div className="flex flex-col gap-7">
          <span className="w-fit border-l-2 border-primary pl-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Понад 10 років досвіду
          </span>

          <h1 className="text-pretty text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
            Ритуальні послуги у м. Калуш — повний спектр та організація похорону
          </h1>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Понад 10 років досвіду. Організація «під ключ» з повагою та турботою про вашу родину.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="tel:0759322533"
              className="inline-flex items-center justify-center gap-3 rounded-sm bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Цілодобова консультація: 0759322533
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-sm border border-border px-6 py-4 text-base font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Наші послуги
            </a>
          </div>

          <div className="flex items-start gap-3 rounded-sm border border-primary/25 bg-accent/25 p-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-foreground">
              Знаходимось у приміщенні моргу:{' '}
              <span className="font-semibold">м. Калуш, вул. Медична, 6</span>
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border">
            <Image
              src="/images/hero-candle.png"
              alt="Запалена пам'ятна свічка та білі хризантеми"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-3 -left-3 hidden h-24 w-24 border-b border-l border-primary/50 lg:block"
          />
        </div>
      </div>
    </section>
  )
}
