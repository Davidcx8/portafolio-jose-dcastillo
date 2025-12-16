export interface Skill {
    name: string
    level: number // 1-10
    category: string
}

export interface SkillCategory {
    name: string
    icon: string
    skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
    {
        name: 'Datos & Análisis',
        icon: 'BarChart3',
        skills: [
            { name: 'Power BI', level: 9, category: 'Datos & Análisis' },
            { name: 'SQL', level: 9, category: 'Datos & Análisis' },
            { name: 'DAX', level: 8, category: 'Datos & Análisis' },
            { name: 'Python (Pandas)', level: 8, category: 'Datos & Análisis' },
            { name: 'Excel Avanzado', level: 9, category: 'Datos & Análisis' },
        ],
    },
    {
        name: 'Automatización',
        icon: 'Workflow',
        skills: [
            { name: 'n8n', level: 9, category: 'Automatización' },
            { name: 'APIs REST', level: 8, category: 'Automatización' },
            { name: 'Webhooks', level: 8, category: 'Automatización' },
            { name: 'JavaScript', level: 8, category: 'Automatización' },
            { name: 'Python Scripts', level: 9, category: 'Automatización' },
        ],
    },
    {
        name: 'Desarrollo Web',
        icon: 'Code2',
        skills: [
            { name: 'Next.js', level: 8, category: 'Desarrollo Web' },
            { name: 'React', level: 8, category: 'Desarrollo Web' },
            { name: 'JavaScript/TypeScript', level: 8, category: 'Desarrollo Web' },
            { name: 'HTML/CSS', level: 9, category: 'Desarrollo Web' },
            { name: 'Tailwind CSS', level: 8, category: 'Desarrollo Web' },
        ],
    },
    {
        name: 'Backend & DevOps',
        icon: 'Server',
        skills: [
            { name: 'Python', level: 9, category: 'Backend & DevOps' },
            { name: 'Docker', level: 8, category: 'Backend & DevOps' },
            { name: 'Git/GitHub', level: 9, category: 'Backend & DevOps' },
            { name: 'CI/CD', level: 7, category: 'Backend & DevOps' },
            { name: 'Linux', level: 7, category: 'Backend & DevOps' },
        ],
    },
    {
        name: 'Cloud & Infraestructura',
        icon: 'Cloud',
        skills: [
            { name: 'AWS', level: 7, category: 'Cloud & Infraestructura' },
            { name: 'GCP', level: 7, category: 'Cloud & Infraestructura' },
            { name: 'Azure', level: 6, category: 'Cloud & Infraestructura' },
            { name: 'Docker Compose', level: 8, category: 'Cloud & Infraestructura' },
        ],
    },
]

export const allSkills = skillCategories.flatMap(cat => cat.skills)
