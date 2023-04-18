import './globals.css'
import Header from './components/Header'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: [ '300', '400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Nextjs Crash',
  description: 'Trying Nextjs. React, Nextjs, CSS, javascript.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ poppins.className }>
        <Header />
        <main className='container'>{children}</main>
        </body>
    </html>
  )
}
