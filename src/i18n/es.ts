import { date } from "astro:schema";

export default {
  themeOptions: {
    label: "Tema:",
    dark: "Oscuro",
    light: "Claro"
  },
  languageOptions: {
    label: "Idioma:",
    es: "Español",
    en: "Inglés"
  },
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    technologies: "Tecnologías",
  },
  about: {
    description: "Desarrollador Full-Stack con un año y medio de experiencia en el ciclo completo de desarrollo web.",
    description2: "Cuento con experiencia práctica y sólida en la construcción de aplicaciones modernas, utilizando Vue.js, Nuxt, Laravel, ASP.NET Core y SQL. Profesional con buen manejo del Inglés, orientado a la entrega de soluciones eficientes y de alta calidad."
  },
  experience: {
    title: "Experiencia",
    job1: {
      title: "Desarrollador FullStack",
      company: "Intendencia de San José",
      description: "Responsable de las tomas de decisiones, desarrollo y mantenimiento de aplicaciones internas y externas, utilizando Vue.js, ASP.NET Core, Laravel y MySQL, garantizando la calidad de las mismas",
      date: "Marzo 2024 - Julio 2025",
      type: "Pasantía"
    }
  },
  projects: {
    title: "Proyectos",
    traductor: {
      title: "Traductor",
      company: "Proyecto Personal",
      description: "Desarrollé un traductor web que permite traducir texto y voz en tiempo real entre múltiples idiomas, utilizando servicios de AWS."
    },
    estadisticas: {
      title: "Visor de Estadísticas",
      company: "Intendencia de San José",
      description: "Página oficial de la ciudad, donde encontrarás estadísticas de diversas temáticas: población, salud, empleo y más."
    },
    buscaminas: {
      title: "Buscaminas",
      company: "Proyecto Personal",
      description: "Réplica del mítico juego Buscaminas, incorporando sistemas de ranking, autenticación, personalización del tablero, jugabilidad y más funcionalidades.",
    },
    hce: {
      title: "Historia Clínica Electrónica",
      company: "UTEC: Universidad Tecnológica",
      description: "Implementación de una aplicación de historia clínica electrónica (HCE) basada en una arquitectura de microservicios."
    }
  },
  technologies: {
    title: "Tecnologías",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps"
  }
}