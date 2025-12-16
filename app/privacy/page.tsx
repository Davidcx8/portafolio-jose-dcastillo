export default function PrivacyPage() {
    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-neutral-light dark:bg-gray-900">
            <div className="container-custom max-w-4xl">
                <h1 className="font-display font-bold text-4xl md:text-5xl mb-8 text-primary dark:text-white">
                    Política de Privacidad
                </h1>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-neutral-dark dark:text-neutral-light mb-6">
                        Última actualización: {new Date().toLocaleDateString('es-ES')}
                    </p>

                    <section className="mb-8">
                        <h2 className="font-display font-bold text-2xl mb-4 text-primary dark:text-white">
                            Información que Recopilamos
                        </h2>
                        <p className="text-neutral-dark dark:text-neutral-light mb-4">
                            Cuando utiliza el formulario de contacto de este sitio web, recopilamos:
                        </p>
                        <ul className="list-disc pl-6 text-neutral-dark dark:text-neutral-light space-y-2">
                            <li>Nombre</li>
                            <li>Dirección de correo electrónico</li>
                            <li>Mensaje y cualquier información que decida compartir</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-display font-bold text-2xl mb-4 text-primary dark:text-white">
                            Uso de la Información
                        </h2>
                        <p className="text-neutral-dark dark:text-neutral-light">
                            La información recopilada se utiliza únicamente para responder a sus consultas y
                            establecer contacto profesional. No compartimos, vendemos ni distribuimos su
                            información personal a terceros.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-display font-bold text-2xl mb-4 text-primary dark:text-white">
                            Cookies
                        </h2>
                        <p className="text-neutral-dark dark:text-neutral-light">
                            Este sitio utiliza localStorage para guardar su preferencia de tema (modo claro/oscuro).
                            No utilizamos cookies de seguimiento ni análisis de terceros.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="font-display font-bold text-2xl mb-4 text-primary dark:text-white">
                            Contacto
                        </h2>
                        <p className="text-neutral-dark dark:text-neutral-light">
                            Si tiene preguntas sobre esta política de privacidad, puede contactarme en:{' '}
                            <a href="mailto:josedavidcastillocastillo75@gmail.com" className="text-accent hover:underline">
                                josedavidcastillocastillo75@gmail.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
