import React, { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
}

export default function Button({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}: ButtonProps) {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'

    const variantStyles = {
        primary: 'bg-accent hover:bg-accent-dark text-white shadow-lg hover:shadow-xl',
        secondary: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white',
        outline: 'bg-transparent border-2 border-neutral-dark dark:border-neutral-light text-neutral-dark dark:text-neutral-light hover:bg-neutral-dark dark:hover:bg-neutral-light hover:text-white dark:hover:text-primary',
    }

    const sizeStyles = {
        sm: 'py-2 px-4 text-sm',
        md: 'py-3 px-6 text-base',
        lg: 'py-4 px-8 text-lg',
    }

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
