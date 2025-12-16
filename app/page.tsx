import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import SkillsDisplay from '@/components/sections/SkillsDisplay'
import Contact from '@/components/sections/Contact'

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Projects />
            <SkillsDisplay />
            <Contact />
        </>
    )
}
