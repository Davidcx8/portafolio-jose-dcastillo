'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import ThemeToggle from '../ui/ThemeToggle'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '#home', label: 'Inicio' },
        { href: '#about', label: 'Sobre Mí' },
        { href: '#projects', label: 'Proyectos' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contacto' },
    ]

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        setIsMobileMenuOpen(false)

        if (pathname === '/') {
            // Already on home page, just scroll
            const element = document.querySelector(href)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            // On another page, navigate to home with hash
            router.push(`/${href}`)
        }
    }

    // Force background on internal pages (not home)
    const shouldHaveBackground = isScrolled || pathname !== '/'

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${shouldHaveBackground
                ? 'bg-white/90 dark:bg-primary/90 backdrop-blur-md shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <nav className="container-custom px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                            <Image src="/logo.svg" alt="JD Logo" fill className="object-contain" />
                        </div>
                        <span className="font-display font-bold text-xl text-primary dark:text-primary-light">
                            José David
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={e => handleNavigation(e, link.href)}
                                className="text-neutral-dark dark:text-neutral-light hover:text-accent dark:hover:text-accent transition-colors duration-200 font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-primary dark:text-primary-light hover:text-accent transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-neutral/20">
                        <div className="flex flex-col gap-4">
                            {navLinks.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={e => handleNavigation(e, link.href)}
                                    className="text-neutral-dark dark:text-neutral-light hover:text-accent dark:hover:text-accent transition-colors duration-200 font-medium py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
