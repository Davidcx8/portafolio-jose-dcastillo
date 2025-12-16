'use client'

import { Download, ChevronDown } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
    const scrollToProjects = () => {
        const projectsSection = document.querySelector('#projects')
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-accent/10 dark:from-gray-900 dark:via-primary dark:to-accent/5">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container-custom px-6 py-32 md:py-40 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Name */}
                    <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-white mb-6 animate-fade-in">
                        José David <span className="gradient-text">Castillo</span>
                    </h1>

                    {/* Main tagline */}
                    <p className="text-xl md:text-2xl lg:text-3xl text-neutral-light mb-4 animate-slide-up font-medium">
                        Transformo datos y procesos en soluciones automatizadas y dashboards accionables
                    </p>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-accent mb-8 animate-slide-up font-semibold" style={{ animationDelay: '0.2s' }}>
                        Especialista en Datos, Automatización y Web — Power BI · SQL · n8n · Next.js
                    </p>

                    {/* Mini stats */}
                    <div className="flex flex-wrap justify-center gap-6 mb-12 text-neutral-light text-sm md:text-base animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-accent rounded-full" />
                            <span>5 proyectos clave</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-accent rounded-full" />
                            <span>Python · Docker</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-accent rounded-full" />
                            <span>Power BI · n8n</span>
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
                        <Button onClick={scrollToProjects} size="lg">
                            Ver Proyectos
                        </Button>
                        <a
                            href="/cv/Jose-David-CV.pdf"
                            download
                            className="font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 inline-flex items-center justify-center bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white py-4 px-8 text-lg"
                        >
                            <Download className="mr-2" size={20} />
                            Descargar CV
                        </a>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown className="text-accent" size={32} />
                </div>
            </div>
        </section>
    )
}
