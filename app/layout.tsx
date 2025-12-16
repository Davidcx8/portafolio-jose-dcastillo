import type { Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const lexend = Lexend({
    subsets: ['latin'],
    variable: '--font-lexend',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'José David Castillo | Especialista en Datos y Automatización',
    description: 'Transformo datos y procesos en soluciones automatizadas y dashboards accionables. Power BI, SQL, n8n, Next.js, Python, Docker.',
    keywords: ['Power BI', 'SQL', 'n8n', 'Next.js', 'Python', 'Docker', 'Automatización', 'Datos', 'ETL', 'Análisis de Datos'],
    authors: [{ name: 'José David Castillo' }],
    creator: 'José David Castillo',
    openGraph: {
        type: 'website',
        locale: 'es_ES',
        url: 'https://jdcastillo.dev',
        title: 'José David Castillo | Especialista en Datos y Automatización',
        description: 'Transformo datos y procesos en soluciones automatizadas y dashboards accionables.',
        siteName: 'José David Castillo Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'José David Castillo | Especialista en Datos y Automatización',
        description: 'Transformo datos y procesos en soluciones automatizadas y dashboards accionables.',
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className={`${inter.variable} ${lexend.variable}`} suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            </head>
            <body className="font-sans antialiased">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
