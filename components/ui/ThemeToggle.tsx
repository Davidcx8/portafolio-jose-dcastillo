'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Check localStorage and system preference
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        const initialTheme = savedTheme || systemTheme
        setTheme(initialTheme)
        document.documentElement.classList.toggle('dark', initialTheme === 'dark')
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }

    if (!mounted) return null

    return (
        <button
            onClick={toggleTheme}
            className="relative p-3 rounded-full bg-accent/10 hover:bg-accent/20 dark:bg-accent/20 dark:hover:bg-accent/30 transition-all duration-300 group overflow-hidden"
            aria-label="Toggle theme"
        >
            <div className="relative w-6 h-6">
                {/* Sun icon */}
                <Sun
                    className={`absolute inset-0 w-6 h-6 text-accent transition-all duration-300 ${theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
                        }`}
                />
                {/* Moon icon */}
                <Moon
                    className={`absolute inset-0 w-6 h-6 text-accent transition-all duration-300 ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                        }`}
                />
            </div>

            {/* Animated background pulse */}
            <span className="absolute inset-0 rounded-full bg-accent/20 scale-0 group-hover:scale-150 transition-transform duration-500 ease-out" />
        </button>
    )
}
