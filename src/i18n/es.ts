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
    description: "Desarrollador FullStack con más de 1 año de experiencia especializado en el desarrollo web.",
    description2: "Poseo habilidades y conocimientos sólidos en variedad de tecnologías, lo que me permite ofrecer soluciones eficientes y de alta calidad. Soy proactivo en mi aprendizaje y me adapto fácilmente a nuevos entornos.",
  },
  experience: {
    title: "Experiencia",
    job1: {
      title: "Desarrollador FullStack",
      company: "Intendencia de San José",
      description: "Desarrollo de aplicaciones web y mantenimiento de sistemas existentes.",
      date: "Marzo 2024 - Julio 2025",
      type: "Pasantía"
    }
  },
  projects: {
    title: "Proyectos",
    estadisticas: {
      title: "Visor de Estadísticas",
      company: "Intendencia de San José",
      description: "Página oficial de la ciudad, donde encontrarás estadísticas de diversas temáticas: población, salud, empleo y más."
    },
    buscaminas: {
      title: "Buscaminas",
      company: "Proyecto Personal",
      description: "Réplica del mítico juego Buscaminas, incorporando sistemas de ranking, autenticación, personalización del tablero, jugabilidad y más funcionalidades.",
    }
  },
  technologies: {
    title: "Tecnologías",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps"
  }
}