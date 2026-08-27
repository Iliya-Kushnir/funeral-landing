import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const _inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Ритуальні послуги у м. Калуш — організація похорону 24/7',
  description:
    'Повний спектр ритуальних послуг у м. Калуш: перевезення померлих, підготовка тіла, домовини, хрести, оградки, благоустрій могил. Понад 10 років досвіду. Працюємо 24/7. Тел. 0660053767.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1f2226',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk" className="bg-background">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
