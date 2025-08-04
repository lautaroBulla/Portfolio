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
    description: "Desarrollador FullStack con experiencia en proyectos reales tanto institucionales como personales.",
  },
  experience: {
    title: "Experiencia:",
    job1: {
      title: "Desarrollador FullStack",
      company: "Intendencia de San José",
      description: "Desarrollo de aplicaciones web y mantenimiento de sistemas existentes.",
      date: "Marzo 2024 - Julio 2025",
      type: "Pasantía"
    }
  },
  projects: {
    title: "Mis Proyectos:",
    estadisticas: {
      title: "Visor de Estadísticas",
      company: "Intendencia de San José",
      description: "Pagina oficial de la ciudad, donde encontrarás estadísticas de tematicas varias: Poblacion, Salud, Empleo y otras."
    },
    buscaminas: {
      title: "Buscaminas",
      company: "Proyecto Personal",
      description: "Replica del mitico juego Buscaminas, incorporando sistemas de ranking, autenticación, personalización del tablero y juego.",
    }
  },
  technologies: {
    title: "Tecnologías:",
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps"
  }
}