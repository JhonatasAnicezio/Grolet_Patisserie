import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/context/AuthContext'
import { QueryProvider } from '@/context/QueryContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Grolet Patisserie',
  description: 'SABORES QUE ENCANTAM, MOMENTOS QUE FICAM',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryProvider>
      <AuthProvider>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </AuthProvider>
    </QueryProvider>
  )
}
