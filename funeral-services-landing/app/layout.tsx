import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const _inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vichnist-kalush.com.ua'), // Впиши свой домен
  title: 'Ритуальна служба Вічність | Організація похорону у м. Калуш 24/7',
  description:
    'Ритуальна служба Вічність у м. Калуш: повний спектр послуг, перевезення померлих, підготовка тіла, домовини, хрести. Працюємо цілодобово 24/7. Тел. 0759322533.',
  keywords: ['Ритуальна служба Вічність', 'Ритуальні послуги Калуш', 'організація похорону Калуш', 'похоронне бюро Калуш', 'Вічність Калуш'],
  openGraph: {
    title: 'Ритуальна служба Вічність | Калуш',
    description: 'Організація похорону у м. Калуш 24/7. Повний спектр ритуальних послуг.',
    url: 'https://www.vichnist-kalush.com.ua',
    siteName: 'Ритуальна служба Вічність',
    locale: 'uk_UA',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.ico',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.ico',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon.ico',
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
