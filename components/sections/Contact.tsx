'use client'

import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin, Github, Download, Send } from 'lucide-react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import { useForm, ValidationError } from '@formspree/react'
import { useEffect, useRef } from 'react'

export default function Contact() {
    const [state, handleSubmit] = useForm("xyzrqbrk") // Formspree form ID
    const formRef = useRef<HTMLFormElement>(null)
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    // Reset form after successful submission
    useEffect(() => {
        if (state.succeeded && formRef.current) {
            formRef.current.reset()
        }
    }, [state.succeeded])

    return (
        <section id="contact" className="section bg-neutral-light dark:bg-gray-900">
            <div className="max-w-5xl mx-auto">
                <div ref={ref}>
                    <h2
                        className={`font-display font-bold text-4xl md:text-5xl text-center mb-4 text-primary dark:text-white transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        Hablemos de <span className="gradient-text">Tu Proyecto</span>
                    </h2>
                    <p className="text-center text-neutral dark:text-neutral-light mb-8 max-w-2xl mx-auto">
                        ¿Quieres ver cómo puedo ayudar a tu equipo?
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <div
                            className={`space-y-6 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                                }`}
                        >
                            <Card glass>
                                <h3 className="font-display font-bold text-2xl mb-6 text-primary dark:text-white">
                                    Información de Contacto
                                </h3>

                                <div className="space-y-4">
                                    <a
                                        href="mailto:josedavidcastillocastillo75@gmail.com"
                                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 dark:hover:bg-accent/20 transition-colors group"
                                    >
                                        <div className="p-3 bg-accent/10 dark:bg-accent/20 rounded-full group-hover:scale-110 transition-transform">
                                            <Mail className="text-accent" size={24} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-primary dark:text-white">Email</p>
                                            <p className="text-sm text-neutral dark:text-neutral-light">
                                                josedavidcastillocastillo75@gmail.com
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/jose-dcastillo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 dark:hover:bg-accent/20 transition-colors group"
                                    >
                                        <div className="p-3 bg-accent/10 dark:bg-accent/20 rounded-full group-hover:scale-110 transition-transform">
                                            <Linkedin className="text-accent" size={24} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-primary dark:text-white">LinkedIn</p>
                                            <p className="text-sm text-neutral dark:text-neutral-light">
                                                jose-dcastillo
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href="https://github.com/davidcx8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent/10 dark:hover:bg-accent/20 transition-colors group"
                                    >
                                        <div className="p-3 bg-accent/10 dark:bg-accent/20 rounded-full group-hover:scale-110 transition-transform">
                                            <Github className="text-accent" size={24} />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-primary dark:text-white">GitHub</p>
                                            <p className="text-sm text-neutral dark:text-neutral-light">
                                                davidcx8
                                            </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="mt-6 pt-6 border-t border-neutral/20">
                                    <a
                                        href="/api/download-cv"
                                        className="w-full font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 inline-flex items-center justify-center bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white py-3 px-6 text-base"
                                    >
                                        <Download className="mr-2" size={20} />
                                        Descargar CV
                                    </a>
                                </div>

                                <div className="mt-4 p-4 bg-accent/10 dark:bg-accent/20 rounded-lg">
                                    <p className="text-sm text-center text-neutral-dark dark:text-neutral-light">
                                        <strong className="text-accent">Disponible para Nuevas Oportunidades</strong>
                                        <br />
                                        Abierto a proyectos y colaboraciones
                                    </p>
                                </div>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <Card
                            glass
                            className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                                }`}
                        >
                            <h3 className="font-display font-bold text-2xl mb-6 text-primary dark:text-white">
                                Envíame un Mensaje
                            </h3>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-neutral-dark dark:text-neutral-light">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        disabled={state.submitting}
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-neutral/20 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-primary dark:text-white disabled:opacity-50"
                                    />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-neutral-dark dark:text-neutral-light">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        disabled={state.submitting}
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-neutral/20 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-primary dark:text-white disabled:opacity-50"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-neutral-dark dark:text-neutral-light">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        disabled={state.submitting}
                                        className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-neutral/20 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none text-primary dark:text-white disabled:opacity-50"
                                    />
                                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                                </div>

                                <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={state.submitting}>
                                    {state.submitting ? (
                                        'Enviando...'
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            <span>Enviar Mensaje</span>
                                        </>
                                    )}
                                </Button>

                                {state.succeeded && (
                                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 dark:text-green-400 text-sm text-center">
                                        ✓ Mensaje enviado con éxito. Te contactaré pronto!
                                    </div>
                                )}

                                {state.errors && Object.keys(state.errors).length > 0 && !state.succeeded && (
                                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 dark:text-red-400 text-sm text-center">
                                        ✗ Error al enviar. Por favor intenta de nuevo.
                                    </div>
                                )}
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
