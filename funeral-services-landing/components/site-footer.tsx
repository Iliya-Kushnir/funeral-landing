import { Clock, MapPin, Phone } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-6">
            <h2 className="text-balance text-2xl font-semibold sm:text-3xl">
              Ми поруч у найважчу хвилину — телефонуйте будь-коли
            </h2>
            <a
              href="tel:0759322533"
              className="inline-flex w-fit items-center gap-3 rounded-sm bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Зателефонувати: 0759322533
            </a>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="leading-relaxed">
                  м. Калуш, вул. Медична, 6
                  <span className="block text-muted-foreground">приміщення моргу</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="leading-relaxed">
                  Цілодобово, без вихідних
                  <span className="block text-muted-foreground">виїзд у будь-який час</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-sm border border-border bg-card p-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Як нас знайти</h3>
              <p className="text-lg font-semibold leading-snug">м. Калуш, вул. Медична, 6</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Офіс розташований у приміщенні моргу 
              </p>
            </div>
            <a
                href="https://www.google.com/maps/search/?api=1&query=49.0395842838877,24.42737229648445"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                >
                Відкрити на карті
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ритуальна служба «Вічність», м. Калуш</p>
          <p>Понад 10 років досвіду · Працюємо 24/7</p>
        </div>
      </div>
    </footer>
  )
}
