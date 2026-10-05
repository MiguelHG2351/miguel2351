import { getCollection } from "astro:content"

/** Posts publicados, del más reciente al más antiguo. Los drafts solo se ven en `astro dev`. */
export async function getPosts() {
  const posts = await getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft)
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

/** Proyectos con los destacados primero. */
export async function getProjects() {
  const projects = await getCollection("projects")
  return projects.sort(
    (a, b) => Number(b.data.featured) - Number(a.data.featured) || a.data.title.localeCompare(b.data.title),
  )
}
