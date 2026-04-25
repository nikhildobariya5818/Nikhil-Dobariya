import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'De\'Hydra - Premium Dehydrated Products',
  description: 'De\'Hydra offers premium dehydrated fruits, vegetables, and spices with quality certifications.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  themeColor: '#006565',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-surface">
      <body>
        {children}
      </body>
    </html>
  )
}
