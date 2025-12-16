import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-primary dark:bg-gray-900 text-white py-12">
            <div className="container-custom px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="font-display font-bold text-xl mb-4">José David Castillo</h3>
                        <p className="text-neutral-light text-sm">
                            Especialista en Datos, Automatización y Desarrollo Web. Transformando procesos en soluciones eficientes.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Enlaces</h4>
                        <div className="flex flex-col gap-2 text-sm">
                            <a href="#projects" className="text-neutral-light hover:text-accent transition-colors">
                                Proyectos
                            </a>
                            <a href="#skills" className="text-neutral-light hover:text-accent transition-colors">
                                Skills
                            </a>
                            <Link href="/privacy" className="text-neutral-light hover:text-accent transition-colors">
                                Privacidad
                            </Link>
                            <a
                                href="https://github.com/davidcx8/portfolio-jdcastillo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-light hover:text-accent transition-colors"
                            >
                                Repositorio GitHub
                            </a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold mb-4">Contacto</h4>
                        <div className="flex flex-col gap-3">
                            <a
                                href="mailto:josedavidcastillocastillo75@gmail.com"
                                className="flex items-center gap-2 text-neutral-light hover:text-accent transition-colors text-sm"
                            >
                                <Mail size={18} />
                                Email
                            </a>
                            <a
                                href="https://www.linkedin.com/in/jose-dcastillo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-neutral-light hover:text-accent transition-colors text-sm"
                            >
                                <Linkedin size={18} />
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/davidcx8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-neutral-light hover:text-accent transition-colors text-sm"
                            >
                                <Github size={18} />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-8 text-center text-sm text-neutral-light">
                    <p>© {currentYear} José David Castillo. Todos los derechos reservados.</p>
                    <p className="mt-2 text-xs">Estudiante ITLA · Disponible para pasantías</p>
                </div>
            </div>
        </footer>
    )
}
