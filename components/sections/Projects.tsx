'use client'

import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { projects, projectCategories } from '@/data/projects'
import Card from '../ui/Card'

export default function Projects() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="projects" className="section bg-white dark:bg-primary">
            <div className="container-custom">
                <div ref={ref}>
                    <h2
                        className={`font-display font-bold text-4xl md:text-5xl text-center mb-4 text-primary dark:text-white transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        Proyectos <span className="gradient-text">Destacados</span>
                    </h2>
                    <p className="text-center text-neutral dark:text-neutral-light mb-16 max-w-2xl mx-auto">
                        Soluciones reales que generan impacto medible en automatización, análisis de datos y desarrollo web
                    </p>

                    <div className="grid gap-8 md:gap-12 max-w-6xl mx-auto">
                        {projects.map((project, index) => (
                            <Card
                                key={project.id}
                                hover
                                className={`transition-all duration-700 delay-${index * 100} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                            >
                                <div className="grid md:grid-cols-2 gap-6 items-center">
                                    {/* Project Image */}
                                    <div className={`relative h-64 md:h-80 rounded-lg overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white ${projectCategories[project.category].color}`}>
                                            {projectCategories[project.category].label}
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                        <h3 className="font-display font-bold text-2xl md:text-3xl text-primary dark:text-white">
                                            {project.title}
                                        </h3>
                                        <p className="text-accent font-semibold">{project.tagline}</p>

                                        <div className="space-y-3 text-neutral-dark dark:text-neutral-light">
                                            <div>
                                                <strong className="text-primary dark:text-white">Problema:</strong>{' '}
                                                {project.problem}
                                            </div>
                                            <div>
                                                <strong className="text-primary dark:text-white">Solución:</strong>{' '}
                                                {project.solution}
                                            </div>
                                            <div className="bg-accent/10 dark:bg-accent/20 p-4 rounded-lg">
                                                <strong className="text-accent">Impacto:</strong>{' '}
                                                {project.impact}
                                            </div>
                                        </div>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.techStack.map(tech => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-primary/5 dark:bg-white/5 text-primary dark:text-white rounded-full text-sm font-medium border border-primary/10 dark:border-white/10"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        {project.links && (
                                            <div className="flex gap-3 pt-4">
                                                {project.links.github && (
                                                    <a
                                                        href={project.links.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white rounded-lg hover:from-gray-900 hover:to-black dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 font-semibold"
                                                    >
                                                        <Github size={20} />
                                                        <span className="text-sm">Ver Código</span>
                                                    </a>
                                                )}
                                                {project.links.demo && (
                                                    <a
                                                        href={project.links.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-accent to-accent-dark text-white rounded-lg hover:from-accent-dark hover:to-accent transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 font-semibold"
                                                    >
                                                        <ExternalLink size={20} />
                                                        <span className="text-sm">Ver Demo Live</span>
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
