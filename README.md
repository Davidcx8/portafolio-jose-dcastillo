# Portfolio Profesional - José David Castillo

Portfolio web profesional desarrollado con Next.js 14, presentando proyectos destacados en análisis de datos, automatización de procesos, desarrollo web y soluciones e-commerce.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)
![React](https://img.shields.io/badge/React-18.3-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)

## 🎯 Sobre el Proyecto

Este portfolio fue diseñado para demostrar mis habilidades técnicas como especialista en datos, automatización y desarrollo web. La aplicación presenta una arquitectura moderna, diseño responsive y optimizaciones de rendimiento siguiendo las mejores prácticas de desarrollo web.

**🔗 Demo en vivo**: [portafolio-jose-dcastillo.vercel.app](https://portafolio-jose-dcastillo.vercel.app)

## ⚡ Características Principales

- **Diseño Moderno y Responsive**: Interfaz adaptativa para dispositivos móviles, tablets y desktop
- **Formulario de Contacto Funcional**: Integración con Formspree para recepción de mensajes en tiempo real
- **Optimización de Rendimiento**: Build optimizado con Next.js 14 y lazy loading de componentes
- **SEO Optimizado**: Meta tags configurados para mejor indexación en buscadores
- **Modo Oscuro/Claro**: Sistema de temas implementado con next-themes
- **Animaciones Fluidas**: Transiciones y efectos visuales con intersection observer

## 🛠️ Stack Tecnológico

### Frontend
- **Framework**: Next.js 14 con App Router
- **UI Library**: React 18
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS

### Librerías y Herramientas
- **Formularios**: Formspree (@formspree/react)
- **Iconos**: Lucide React
- **Animaciones**: React Intersection Observer
- **Utilidades**: clsx, tailwind-merge

### DevOps y Deployment
- **Hosting**: Vercel
- **Control de Versiones**: Git/GitHub
- **CI/CD**: GitHub Actions

## 📂 Estructura del Proyecto

```
portfolio/
├── app/                          # App Router de Next.js
│   ├── layout.tsx               # Layout principal con metadatos
│   ├── page.tsx                 # Página de inicio
│   └── globals.css              # Estilos globales y variables CSS
├── components/
│   ├── layout/                  # Componentes de estructura
│   │   ├── Header.tsx          # Navegación principal
│   │   └── Footer.tsx          # Pie de página
│   ├── sections/                # Secciones del portfolio
│   │   ├── Hero.tsx            # Sección hero con CTA
│   │   ├── Projects.tsx        # Galería de proyectos
│   │   ├── SkillsDisplay.tsx   # Habilidades técnicas con iconos
│   │   └── Contact.tsx         # Formulario de contacto
│   └── ui/                      # Componentes reutilizables
│       ├── Button.tsx          # Botón personalizado
│       └── Card.tsx            # Tarjeta base
├── data/                        # Datos estructurados
│   ├── projects.ts             # Información de proyectos
│   └── skills.ts               # Habilidades técnicas
├── public/                      # Assets estáticos
│   ├── cv/                     # Currículum en PDF
│   └── images/                 # Imágenes de proyectos
└── package.json                # Dependencias del proyecto
```

## 🚀 Instalación y Desarrollo

### Requisitos Previos
- Node.js 18.x o superior
- npm 9.x o superior

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/Davidcx8/portafolio-jose-dcastillo.git
cd portafolio-jose-dcastillo

# Instalar dependencias
npm install
```

### Desarrollo Local

```bash
# Ejecutar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### Build de Producción

```bash
# Generar build optimizado
npm run build

# Ejecutar servidor de producción
npm start
```

## ⚙️ Configuración

### Formulario de Contacto

El formulario utiliza Formspree. Para configurarlo:

1. Crear cuenta en [Formspree.io](https://formspree.io)
2. Crear un nuevo formulario
3. Actualizar el Form ID en `components/sections/Contact.tsx`:

```tsx
const [state, handleSubmit] = useForm("YOUR_FORM_ID")
```

### Variables de Entorno (Opcional)

Crear archivo `.env.local`:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

## 📊 Proyectos Destacados

El portfolio presenta 5 proyectos principales:

1. **Dashboard de Análisis de Datos** - Power BI, SQL, DAX
2. **Automatización de Workflows** - n8n, API Integration
3. **Plataforma E-Commerce** - Next.js, Stripe, PostgreSQL
4. **Aplicación Web Full-Stack** - React, Docker, CI/CD
5. **Pipeline ETL** - Python, Apache Airflow, Data Processing

## 🎨 Personalización

### Actualizar Información Personal

**Proyectos**: Editar `data/projects.ts`
```typescript
export const projects: Project[] = [
  {
    id: 'project-id',
    title: 'Project Title',
    techStack: ['Tech1', 'Tech2'],
    // ...
  }
]
```

**Habilidades**: Editar `data/skills.ts`

**CV**: Reemplazar archivo en `public/cv/cv-jose-david-castillo.pdf`

## 🚢 Deployment

### Vercel (Recomendado)

El proyecto está optimizado para deployment en Vercel:

1. Conectar repositorio de GitHub con Vercel
2. Configurar variables de entorno si es necesario
3. Vercel detectará automáticamente Next.js y configurará el build

### Otras Plataformas

El proyecto es compatible con cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📈 Optimizaciones Implementadas

- **Image Optimization**: Uso de `next/image` para lazy loading
- **Code Splitting**: Componentes cargados bajo demanda
- **CSS Optimization**: Tailwind con purge de clases no utilizadas
- **Build Optimization**: Tree shaking y minificación
- **Lighthouse Score**: 95+ en Performance, Accessibility, Best Practices

## 📝 Comandos Útiles

```bash
# Desarrollo
npm run dev                # Servidor de desarrollo

# Producción
npm run build             # Build de producción
npm start                 # Servidor de producción

# Calidad de Código
npm run lint              # Linter ESLint
```

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia MIT.

## 👤 Autor

**José David Castillo**

Especialista en Datos, Automatización y Desarrollo Web

- 💼 LinkedIn: [jose-dcastillo](https://linkedin.com/in/jose-dcastillo)
- 💻 GitHub: [Davidcx8](https://github.com/Davidcx8)
- 📧 Email: josedavidcastillocastillo75@gmail.com

## 🙏 Agradecimientos

Desarrollado con Next.js, React y Tailwind CSS. Gracias a la comunidad de código abierto por las herramientas y librerías utilizadas en este proyecto.

---

⭐ Si te gustó este proyecto, considera darle una estrella en GitHub
