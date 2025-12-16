import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * Smooth scroll to element
 */
export function scrollToElement(elementId: string) {
    const element = document.querySelector(elementId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}

/**
 * Format date to locale string
 */
export function formatDate(date: Date, locale: string = 'es-ES'): string {
    return new Intl.DateTimeFormat(locale).format(date)
}
