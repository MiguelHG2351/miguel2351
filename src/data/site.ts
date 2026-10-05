import type { ImageMetadata } from "astro"

import azure from "../assets/certificates/azure.png"
import cs50 from "../assets/certificates/cs50.png"
import platzi from "../assets/certificates/platzi.png"

export const site = {
  name: "Miguel Hernández",
  handle: "MiguelHG2351",
  role: "Software Developer",
  location: "Managua, Nicaragua",
  description:
    "Portafolio y blog de Miguel Hernández, desarrollador de software en Managua, Nicaragua.",
}

export const socials = [
  { label: "GitHub", href: "https://github.com/MiguelHG2351" },
  { label: "Twitter", href: "https://twitter.com/MiguelHG2351" },
  { label: "Instagram", href: "https://www.instagram.com/miguelhg2351/" },
]

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Proyectos", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre mí", href: "/about" },
]

// Nombres de archivo en src/assets/icons
export type IconName =
  | "web" | "react" | "graphql" | "nextjs" | "redux" | "playwright"
  | "nodejs" | "python" | "apollo" | "express" | "nestjs" | "mysql"
  | "git" | "firebase" | "figma"

export const skills: { group: string; items: { name: string; icon: IconName }[] }[] = [
  {
    group: "Frontend",
    items: [
      { name: "HTML, CSS y JavaScript", icon: "web" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Redux", icon: "redux" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Python (Flask y Django)", icon: "python" },
      { name: "Apollo", icon: "apollo" },
      { name: "Express", icon: "express" },
      { name: "NestJS", icon: "nestjs" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  { group: "Testing", items: [{ name: "Playwright", icon: "playwright" }] },
  {
    group: "Herramientas",
    items: [
      { name: "Git", icon: "git" },
      { name: "Firebase", icon: "firebase" },
      { name: "Figma", icon: "figma" },
    ],
  },
]

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "A2" },
]

export const certificates: { title: string; href: string; image: ImageMetadata }[] = [
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    href: "https://www.credly.com/badges/a08234e3-6f21-41a1-a27f-5dc7e4835662",
    image: azure,
  },
  {
    title: "Escuela de JavaScript — Platzi",
    href: "https://platzi.com/p/Miguel2351/ruta/100-escuela-javascript/diploma/detalle/",
    image: platzi,
  },
  {
    title: "CS50x Nicaragua",
    href: "https://certificates.cs50.io/9be2b278-4d0d-45e5-804a-4aa8805450c0.pdf?size=letter",
    image: cs50,
  },
]
