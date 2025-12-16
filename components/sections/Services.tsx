'use client'

import { Zap, Database, Globe } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import Card from '../ui/Card'

const services = [
    {
        icon: Zap,
        title: 'Automatización de Procesos',
        description: 'Diseño e implementación de workflows automatizados con n8n, reduciendo tareas manuales y errores humanos.',
    },
    {
        icon: Database,
        title: 'Análisis de Datos & Dashboards',
        description: 'Creación de dashboards interactivos en Power BI y pipelines ETL con Python para convertir datos en decisiones.',
    },
    {
        icon: Globe,
        title: 'Desarrollo Web & Cloud',
        description: 'Aplicaciones web modernas con Next.js/React y despliegues automatizados con Docker en AWS/GCP.',
    },
]

export default function Services() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    return (
        <section className="section bg-white dark:bg-primary">
            <div className="container-custom">
                <div ref={ref}>
                    <h2
                        className={`font-display font-bold text-4xl md:text-5xl text-center mb-16 text-primary dark:text-white transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        ¿Qué <span className="gradient-text">Hago?</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <Card
                                key={service.title}
                                hover
                                glass
                                className={`text-center transition-all duration-700 delay-${index * 100} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 bg-accent/10 dark:bg-accent/20 rounded-full">
                                        <service.icon className="text-accent" size={32} />
                                    </div>
                                </div>
                                <h3 className="font-display font-bold text-xl mb-3 text-primary dark:text-white">
                                    {service.title}
                                </h3>
                                <p className="text-neutral-dark dark:text-neutral-light">
                                    {service.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
