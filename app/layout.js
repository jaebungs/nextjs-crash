import './globals.css'

export const metadata = {
  title: 'Nextjs Crash',
  description: 'Trying Nextjs. React, Nextjs, CSS, javascript.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
