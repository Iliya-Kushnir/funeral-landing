import { Phone } from 'lucide-react'

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur-md sm:hidden">
      <a
        href="tel:0759322533"
        className="flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Зателефонувати 24/7: 0759322533
      </a>
    </div>
  )
}
