'use client'

import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import Card from '../ui/Card'

export default function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    return (
        <section id="about" className="section bg-neutral-light dark:bg-gray-900">
            <div className="container-custom">
                <div
                    ref={ref}
                    className={`max-w-5xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-center mb-12 text-primary dark:text-white">
                        Sobre <span className="gradient-text">Mí</span>
                    </h2>

                    <Card glass className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
                            {/* Profile photo */}
                            <div className="relative w-48 h-48 mx-auto md:mx-0 rounded-full overflow-hidden ring-4 ring-accent/20">
                                <Image
                                    src="/images/profile.jpg"
                                    alt="José David Castillo"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Bio text */}
                            <div className="space-y-4 text-center md:text-left">
                                <p className="text-lg text-neutral-dark dark:text-neutral-light leading-relaxed">
                                    <strong className="text-primary dark:text-white">Estudiante en ITLA</strong> y profesional en tecnología especializado en <span className="text-accent font-semibold">transformar datos y tareas repetitivas</span> en procesos automatizados y dashboards accionables.
                                </p>
                                <p className="text-lg text-neutral-dark dark:text-neutral-light leading-relaxed">
                                    Diseño <strong>pipelines ETL</strong>, automatizaciones con <strong>n8n</strong> y soluciones web escalables con <strong>Next.js, Docker y Python</strong> para generar impacto real en operaciones.
                                </p>
                                <p className="text-base text-neutral dark:text-neutral-light italic mt-6 border-l-4 border-accent pl-4">
                                    💡 Mi objetivo es eliminar trabajo manual y convertir datos en decisiones accionables que impulsen resultados medibles.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
