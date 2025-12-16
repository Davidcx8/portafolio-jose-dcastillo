import React, { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
    className?: string
    hover?: boolean
    glass?: boolean
}

export default function Card({ children, className = '', hover = false, glass = false }: CardProps) {
    const baseStyles = 'rounded-xl p-6 transition-all duration-300'
    const hoverStyles = hover ? 'hover:scale-105 hover:shadow-2xl cursor-pointer' : ''
    const glassStyles = glass ? 'glass' : 'bg-white dark:bg-gray-800 shadow-lg'

    return (
        <div className={`${baseStyles} ${hoverStyles} ${glassStyles} ${className}`}>
            {children}
        </div>
    )
}
