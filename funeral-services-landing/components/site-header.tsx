import { Phone } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 py-4 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary/40 text-primary"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3v18M6.5 8.5h11" strokeLinecap="round" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-wide">Вічність</span>
            <span className="text-xs text-muted-foreground">Ритуальна служба · Калуш</span>
          </span>
        </a>

        <div className="ml-auto flex items-center gap-3 sm:gap-5">
          <span className="hidden items-center gap-2 rounded-full border border-primary/30 px-3 py-1.5 text-xs font-medium text-primary sm:inline-flex">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
            Працюємо 24/7
          </span>
          <a
            href="tel:0660053767"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            0660053767
          </a>
        </div>
      </div>
    </header>
  )
}
