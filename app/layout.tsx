import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SenseByte',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-center items-center">{children}</body>
    </html>
  )
}
