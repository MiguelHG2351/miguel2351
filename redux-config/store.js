import { useMemo } from "react"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

let store

let projects = [
  {
    name: "FrontEnd Mentor",
    url: "https://www.frontendmentor.io/profile/MiguelHG2351/solutions",
    github: "https://www.frontendmentor.io/profile/MiguelHG2351/solutions",
    description:
      "Retos resueltos de la plataforma FrontEndMentor, que incluyen landing pages y páginas con interacciones complejas o uso de API's.",
    image1x: "/images/frontendMentor.png",
    image2x: "/images/frontendMentor.png",
    image3x: "/images/frontendMentor.png",
  },
  {
    name: "Task Hero",
    url: "https://task-hero.vercel.app/",
    github: "https://github.com/MiguelHG2351/Task-Hero",
    description:
      "Aplicación web presentada para terminar el curso de Web50xNI. Es un manejador de tareas donde cada workspaces tiene una serie de proyectos y cada proyecto tareas e información única.",
    image1x: "/images/task-hero.png",
    image2x: "/images/task-hero.png",
    image3x: "/images/task-hero.png",
  },
  {
    name: "Pokedex React Native",
    url: "https://github.com/MiguelHG2351/react-native-pokedex",
    github: "https://github.com/MiguelHG2351/react-native-pokedex",
    description:
      "Una aplicación sencilla en React Native que simula ser una pokedex, de momento esta pausado porque no tengo extensión USB para debuggear con el móvil xd.",
    image1x: "/images/pokedex.png",
    image2x: "/images/pokedex.png",
    image3x: "/images/pokedex.png",
  },
  {
    name: "100 days of css",
    url: "http://github.miguel2351.me/100-days-css/",
    github: "https://github.com/MiguelHG2351/100-days-css",
    description:
      "En este proyecto almacene los distintos retos que resolvi de la página de 100daysofcss.",
    image1x: "/images/onehundreddays.png",
    image2x: "/images/onehundreddays.png",
    image3x: "/images/onehundreddays.png",
  },
  {
    name: "Nicsmart",
    url: "https://nicsmart.vercel.app/",
    github: "https://github.com/0LOLUOXH/Nicsmart",
    description:
      "En nicsmart encontrarás los productos de tu preferencia y con disponibilidad de pago en línea evitando que pierdas tu tiempo.",
    image1x: "/images/nicsmart.png",
    image2x: "/images/nicsmart2x.png",
    image3x: "/images/nicsmart3x.png",
  },
  {
    name: "qonexia (no oficial)",
    url: "https://qonexia-react.vercel.app/",
    github: "https://github.com/MiguelHG2351/qonexia-CRA",
    description:
      "Somos Qonexia, te ofrece la mayor variedad de productos tecnológicos e innovadores para tu entretenimiento. Esta página no es oficial :)",
    image1x: "/images/qonexia.png",
    image2x: "/images/qonexia2x.png",
    image3x: "/images/qonexia3x.png",
  },
  {
    name: "Codeland",
    url: "https://codeland-uni.herokuapp.com/",
    github: "https://github.com/cafeconlechee/codeland",
    description:
      "Una pagina dedicada a la programación en Turbo C 2.0, donde puedes tener acceso a múltiples códigos y documentación para facilitar su uso y estudio.",
    image1x: "/images/codeland.png",
    image2x: "/images/codeland2x.png",
    image3x: "/images/codeland3x.png",
  },
  {
    name: "Curso React (desarrollo)",
    url: "https://curso-javascript-miguelhg2351.vercel.app/",
    github: "https://github.com/MiguelHG2351/curso-avanzado-javascript",
    description:
      "Mi primer blog relacionado a la programación con JavaScript y React.",
    image1x: "/images/blog.png",
    image2x: "/images/blog2x.png",
    image3x: "/images/blog3x.png",
  },
  {
    name: "FLAG API",
    url: "https://miguelhg2351.github.io/API-REST-COUNTRIES/",
    github: "https://github.com/MiguelHG2351/API-REST-COUNTRIES",
    description:
      "API REST que te permite buscar un país, ver todos los de un continente y la descripción de cada uno de ellos.",
    image1x: "/images/flag-project.png",
    image2x: "/images/flag-project2x.png",
    image3x: "/images/flag-project3x.png",
  },
  {
    name: "redaccion tecnica",
    url: "https://redaccion-tecnica.vercel.app/",
    github: "https://github.com/MiguelHG2351/API-REST-COUNTRIES",
    description:
      "Proyecto final para la clase de redacción técnica para mostrar las diferentes exposiciones de las carreras de Ing. Computacón, Ing agricola e Ingeniería civil.",
    image1x: "/images/redaccion.png",
    image2x: "/images/redaccion2x.png",
    image3x: "/images/redaccion3x.png",
  },
]

const initialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  theme: null,
  projects,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TICK":
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        light: !!action.light,
      }
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      }
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      }
    case "RESET":
      return {
        ...state,
        count: initialState.count,
      }
    case "SET_THEME":
      return {
        ...state,
        theme: action.theme,
      }
    default:
      return state
  }
}

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
