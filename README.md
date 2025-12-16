# Portfolio José David Castillo

Portfolio profesional desarrollado con Next.js 14, React y TypeScript. Presenta proyectos destacados en análisis de datos, automatización, desarrollo web y e-commerce.

![Portfolio Preview](public/images/hero-preview.png)

## 🚀 Características

- ⚡ **Next.js 14** con App Router
- 🎨 **Tailwind CSS** para diseño moderno y responsive
- 🌙 **Modo oscuro/claro** con next-themes
- 📱 **Diseño responsive** para todos los dispositivos
- 🎯 **Animaciones fluidas** con intersection observer
- 📧 **Formulario de contacto funcional** con Formspree
- ⚙️ **TypeScript** para type safety
- 🎭 **Iconos** con Lucide React

## 📋 Secciones

- **Hero**: Presentación profesional con call-to-actions
- **Proyectos Destacados**: 5 proyectos con detalles completos
  - Dashboard de Análisis de Datos (Power BI)
  - Automatización de Workflows (n8n)
  - Plataforma E-Commerce (Next.js)
  - Aplicación Web Full-Stack (Docker)
  - Pipeline ETL (Python)
- **Skills Técnicas**: Categorías con iconos de tecnologías
- **Contacto**: Formulario funcional + información de contacto

## 🛠️ Tecnologías

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **UI/UX**: Lucide Icons, Framer Motion (opcional)
- **Forms**: Formspree, React Hook Form
- **Deployment**: Vercel

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/davidcx8/portfolio-jdcastillo.git

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## ⚙️ Configuración

### 1. Formspree (Formulario de Contacto)

1. Crea una cuenta en [Formspree.io](https://formspree.io/)
2. Crea un nuevo formulario
3. Copia tu Form ID
4. Edita `components/sections/Contact.tsx` línea 10:
   ```tsx
   const [state, handleSubmit] = useForm("TU_FORM_ID_AQUI")
   ```

### 2. Variables de Entorno (Opcional)

Crea un archivo `.env.local`:

```env
NEXT_PUBLIC_FORMSPREE_ID=tu_form_id_aqui
```

## 📝 Personalización

### Actualizar Información Personal

1. **Datos de contacto**: `components/sections/Contact.tsx`
2. **Proyectos**: `data/projects.ts`
3. **Skills**: `data/skills.ts`
4. **CV**: Reemplaza `public/cv/jose-david-castillo-cv.pdf`

### Agregar Nuevos Proyectos

Edita `data/projects.ts`:

```typescript
{
  id: 'mi-proyecto',
  title: 'Mi Proyecto',
  tagline: 'Descripción corta',
  problem: 'Problema que resuelve',
  solution: 'Cómo lo soluciona',
  impact: 'Impacto medible',
  techStack: ['Tech1', 'Tech2'],
  image: '/images/projects/mi-proyecto.png',
  category: 'web', // datos | automatizacion | web | etl | ecommerce
}
```

## 🚀 Deployment en Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/davidcx8/portfolio-jdcastillo)

### Método 1: Desde GitHub

1. Haz push de tu código a GitHub
2. Importa el repositorio en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Next.js
4. Configura las variables de entorno si es necesario
5. Deploy automático

### Método 2: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Tu sitio estará disponible en: `https://portfolio-jdcastillo.vercel.app`

## 📁 Estructura del Proyecto

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   └── globals.css        # Estilos globales
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Secciones del portfolio
│   └── ui/                # Componentes reutilizables
├── data/                  # Datos de proyectos y skills
├── public/                # Assets estáticos
│   ├── cv/               # CV en PDF
│   └── images/           # Imágenes de proyectos
└── package.json
```

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Build de producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📄 Licencia

Este proyecto es de código abierto bajo la licencia MIT.

## 👤 Autor

**José David Castillo**

- LinkedIn: [@jose-dcastillo](https://linkedin.com/in/jose-dcastillo)
- GitHub: [@davidcx8](https://github.com/davidcx8)
- Email: josedavidcastillocastillo75@gmail.com

---

⭐ Si te gustó este proyecto, dale una estrella en GitHub!
