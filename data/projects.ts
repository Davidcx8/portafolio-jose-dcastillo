export interface Project {
    id: string
    title: string
    tagline: string
    problem: string
    solution: string
    impact: string
    techStack: string[]
    image: string
    category: 'datos' | 'automatizacion' | 'web' | 'etl' | 'ecommerce'
    links?: {
        github?: string
        demo?: string
    }
}

export const projects: Project[] = [
    {
        id: 'dashboard-powerbi',
        title: 'Dashboard Interactivo de Análisis de Datos',
        tagline: 'Visualización de KPIs empresariales en tiempo real',
        problem: 'Los reportes manuales de ventas tomaban más de 8 horas semanales y los datos no estaban actualizados para tomar decisiones rápidas.',
        solution: 'Desarrollé un dashboard interactivo en Power BI conectado a bases de datos SQL con actualización automática cada hora. Implementé DAX para cálculos complejos y Python para limpieza de datos.',
        impact: 'Reducción del 40% en tiempo de reporting (de 8h a 4.8h/semana) y decisiones basadas en datos actualizados cada hora en lugar de semanalmente.',
        techStack: ['Power BI', 'SQL', 'DAX', 'Python', 'Pandas'],
        image: '/images/projects/dashboard-powerbi.png',
        category: 'datos',
    },
    {
        id: 'automatizacion-n8n',
        title: 'Automatización de Workflows Empresariales',
        tagline: 'Sistema de integración de APIs y procesos',
        problem: 'Tareas repetitivas como sincronización de datos entre sistemas, envío de notificaciones y generación de reportes consumían 15 horas semanales del equipo.',
        solution: 'Diseñé y implementé workflows automatizados usando n8n para integrar APIs REST, webhooks y bases de datos. Creé procesos para sincronización automática, notificaciones inteligentes y generación de reportes programados.',
        impact: 'Ahorro de 15h/semana en tareas manuales, reducción de errores humanos en un 95%, y procesamiento automatizado de más de 500 transacciones diarias.',
        techStack: ['n8n', 'JavaScript', 'Webhooks', 'APIs REST', 'SQL'],
        image: '/images/projects/n8n-workflow.png',
        category: 'automatizacion',
    },
    {
        id: 'ecommerce-platform',
        title: 'Plataforma de Comercio Electrónico',
        tagline: 'Tienda online completa con pagos integrados',
        problem: 'El negocio dependía exclusivamente de ventas presenciales, limitando el alcance geográfico y perdiendo oportunidades de venta 24/7.',
        solution: 'Desarrollé una plataforma de e-commerce completa con Next.js, carrito de compras, pasarela de pagos integrada, panel de administración para gestión de productos e inventario, y sistema de seguimiento de pedidos.',
        impact: 'Incremento del 200% en ventas totales, expansión a 3 nuevas ciudades sin costos de local físico, y disponibilidad 24/7 generando un 35% de ventas fuera del horario comercial.',
        techStack: ['Next.js', 'React', 'Stripe', 'Tailwind CSS', 'PostgreSQL', 'Vercel'],
        image: '/images/projects/ecommerce-platform.png',
        category: 'ecommerce',
    },
    {
        id: 'webapp-fullstack-docker',
        title: 'Aplicación Web Full-Stack Dockerizada',
        tagline: 'Plataforma web escalable con despliegue automatizado',
        problem: 'El despliegue manual de aplicaciones web tomaba horas y era propenso a errores, afectando la productividad y creando inconsistencias entre ambientes.',
        solution: 'Construí una aplicación web moderna con Next.js/React en el frontend y API Python en el backend, todo containerizado con Docker. Implementé CI/CD para despliegues automáticos en la nube.',
        impact: 'Tiempo de deploy reducido de 2 horas a menos de 2 minutos, uptime del 99.9%, y escalabilidad automática según demanda.',
        techStack: ['Next.js', 'React', 'Docker', 'Python', 'AWS', 'CI/CD'],
        image: '/images/projects/webapp-fullstack.png',
        category: 'web',
    },
    {
        id: 'pipeline-etl-python',
        title: 'Pipeline ETL de Datos con Python',
        tagline: 'Extracción, transformación y carga automatizada',
        problem: 'Múltiples fuentes de datos (CSV, APIs, bases de datos) necesitaban ser consolidadas diariamente, proceso que tomaba 3 horas y era propenso a errores.',
        solution: 'Desarrollé un pipeline ETL robusto usando Python y Pandas para extraer datos de diversas fuentes, transformarlos según reglas de negocio, y cargarlos en un data warehouse en la nube (AWS/GCP). Incluye manejo de errores y logging completo.',
        impact: 'Procesamiento automático de 100K+ registros diarios, reducción de tiempo de consolidación de 3h a 15 minutos, y mejora de calidad de datos del 85% al 99%.',
        techStack: ['Python', 'Pandas', 'SQL', 'AWS', 'GCP', 'Docker'],
        image: '/images/projects/etl-pipeline.png',
        category: 'etl',
    },
]

export const projectCategories = {
    datos: { label: 'Análisis de Datos', color: 'bg-blue-500' },
    automatizacion: { label: 'Automatización', color: 'bg-green-500' },
    web: { label: 'Desarrollo Web', color: 'bg-purple-500' },
    etl: { label: 'ETL & Pipelines', color: 'bg-orange-500' },
    ecommerce: { label: 'E-Commerce', color: 'bg-pink-500' },
}
