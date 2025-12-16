'use client'

import { useInView } from 'react-intersection-observer'
import Card from '../ui/Card'
import {
    Database,
    FileSpreadsheet,
    BarChart3,
    Code2,
    Server,
    Workflow,
    Webhook,
    GitBranch,
    Container,
    Cloud,
    Boxes,
    Globe
} from 'lucide-react'

// Technology icons mapping
const techIcons: { [key: string]: { icon: any; color: string } } = {
    'Power BI': { icon: BarChart3, color: 'text-yellow-500' },
    'SQL': { icon: Database, color: 'text-blue-600' },
    'DAX': { icon: FileSpreadsheet, color: 'text-gray-600' },
    'Python (Pandas)': { icon: Code2, color: 'text-blue-400' },
    'Python': { icon: Code2, color: 'text-blue-400' },
    'Excel Avanzado': { icon: FileSpreadsheet, color: 'text-green-600' },
    'n8n': { icon: Workflow, color: 'text-orange-500' },
    'APIs REST': { icon: Server, color: 'text-cyan-500' },
    'Webhooks': { icon: Webhook, color: 'text-purple-500' },
    'JavaScript': { icon: Code2, color: 'text-yellow-400' },
    'JavaScript/TypeScript': { icon: Code2, color: 'text-blue-500' },
    'Python Scripts': { icon: Code2, color: 'text-blue-400' },
    'Next.js': { icon: Globe, color: 'text-gray-800 dark:text-white' },
    'React': { icon: Code2, color: 'text-cyan-400' },
    'HTML/CSS': { icon: Code2, color: 'text-orange-600' },
    'Tailwind CSS': { icon: Code2, color: 'text-cyan-500' },
    'Docker': { icon: Container, color: 'text-blue-500' },
    'Git/GitHub': { icon: GitBranch, color: 'text-orange-600' },
    'CI/CD': { icon: Boxes, color: 'text-green-500' },
    'Linux': { icon: Server, color: 'text-gray-700' },
    'AWS': { icon: Cloud, color: 'text-orange-500' },
    'GCP': { icon: Cloud, color: 'text-blue-500' },
    'Azure': { icon: Cloud, color: 'text-blue-600' },
    'Docker Compose': { icon: Container, color: 'text-blue-600' },
}

export default function Skills() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const skillCategories = [
        {
            name: 'Datos & Análisis',
            icon: BarChart3,
            skills: ['Power BI', 'SQL', 'DAX', 'Python (Pandas)', 'Excel Avanzado']
        },
        {
            name: 'Automatización',
            icon: Workflow,
            skills: ['n8n', 'APIs REST', 'Webhooks', 'JavaScript', 'Python Scripts']
        },
        {
            name: 'Desarrollo Web',
            icon: Code2,
            skills: ['Next.js', 'React', 'JavaScript/TypeScript', 'HTML/CSS', 'Tailwind CSS']
        },
        {
            name: 'Backend & DevOps',
            icon: Server,
            skills: ['Python', 'Docker', 'Git/GitHub', 'CI/CD', 'Linux']
        },
        {
            name: 'Cloud & Infraestructura',
            icon: Cloud,
            skills: ['AWS', 'GCP', 'Azure', 'Docker Compose']
        },
    ]

    return (
        <section id="skills" className="section bg-neutral-light dark:bg-gray-900">
            <div className="container-custom">
                <div ref={ref}>
                    <h2
                        className={`font-display font-bold text-4xl md:text-5xl text-center mb-4 text-primary dark:text-white transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        Skills <span className="gradient-text">Técnicas</span>
                    </h2>
                    <p className="text-center text-neutral dark:text-neutral-light mb-16 max-w-2xl mx-auto">
                        Tecnologías Clave para el Desarrollo.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {skillCategories.map((category, categoryIndex) => {
                            const CategoryIcon = category.icon

                            return (
                                <Card
                                    key={category.name}
                                    hover
                                    className={`transition-all duration-700 delay-${categoryIndex * 100} ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`}
                                >
                                    {/* Category Header */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-accent/10 dark:bg-accent/20 rounded-lg">
                                            <CategoryIcon className="text-accent" size={24} />
                                        </div>
                                        <h3 className="font-display font-bold text-lg text-primary dark:text-white">
                                            {category.name}
                                        </h3>
                                    </div>

                                    {/* Skills List with Icons */}
                                    <div className="space-y-3">
                                        {category.skills.map((skillName, skillIndex) => {
                                            const techInfo = techIcons[skillName] || { icon: Code2, color: 'text-gray-500' }
                                            const SkillIcon = techInfo.icon

                                            return (
                                                <div
                                                    key={skillName}
                                                    className={`flex items-center gap-3 transition-all duration-500 delay-${(categoryIndex * 100) + (skillIndex * 50)}`}
                                                    style={{
                                                        opacity: inView ? 1 : 0,
                                                        transform: inView ? 'translateX(0)' : 'translateX(-10px)',
                                                    }}
                                                >
                                                    <div className={`p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm`}>
                                                        <SkillIcon className={`${techInfo.color}`} size={20} />
                                                    </div>
                                                    <span className="text-sm font-medium text-neutral-dark dark:text-neutral-light">
                                                        {skillName}
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
