# miguel2351

Portafolio y blog personal, hecho con [Astro](https://astro.build), MDX y Tailwind CSS 4. Es un sitio 100% estático, sin backend.

## Desarrollo

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm check    # tipos y diagnósticos de Astro
pnpm build    # genera dist/
```

## Dónde está cada cosa

| Qué                                                | Dónde                       |
| -------------------------------------------------- | --------------------------- |
| Proyectos                                          | `src/content/projects/*.md` |
| Posts del blog                                     | `src/content/blog/*.mdx`    |
| Datos personales, redes, tecnologías, certificados | `src/data/site.ts`          |
| Íconos de tecnologías                              | `src/assets/icons/*.svg`    |
| Esquemas de contenido                              | `src/content.config.ts`     |

### Agregar un proyecto

Crea `src/content/projects/mi-proyecto.md` y pon la captura en `src/assets/projects/`:

```md
---
title: Mi proyecto
description: Qué hace, en una o dos líneas.
image: ../../assets/projects/mi-proyecto.png
url: https://mi-proyecto.vercel.app
repo: https://github.com/MiguelHG2351/mi-proyecto
tags: [Next.js]
featured: true # aparece en la página de inicio
---
```

### Escribir un post

Crea `src/content/blog/mi-post.mdx` con `title`, `description` y `date`. Mientras tenga `draft: true`, solo se ve con `pnpm dev`.
