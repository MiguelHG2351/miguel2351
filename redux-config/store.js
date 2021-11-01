import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

let store

let projects = [
  {
    name: 'qonexia',
    url: 'https://qonexia-react-red.vercel.app/',
    github: 'https://github.com/MiguelHG2351/qonexia-CRA',
    description: 'Somos Qonexia, una empresa con más de 7 años en el mercado, que te ofrece la mayor variedad de productos tecnológicos e innovadores para tu entretenimiento',
    image1x: '/images/qonexia.png',
    image2x: '/images/qonexia2x.png',
    image3x: '/images/qonexia3x.png',
  },
  {
    name: 'Curso React (desarrollo)',
    url: 'https://curso-javascript-miguelhg2351.vercel.app/',
    github: 'https://github.com/MiguelHG2351/curso-avanzado-javascript',
    description: 'Mi primer blog relacionado a la programación con JavaScript y React.',
    image1x: '/images/blog.png',
    image2x: '/images/blog2x.png',
    image3x: '/images/blog3x.png',
  },
  {
    name: 'FLAG API',
    url: 'https://miguelhg2351.github.io/API-REST-COUNTRIES/',
    github: 'https://github.com/MiguelHG2351/API-REST-COUNTRIES',
    description: 'API REST que te permite buscar un país, ver todos los de un continente y la descripción de cada uno de ellos.',
    image1x: '/images/flag-project.png',
    image2x: '/images/flag-project2x.png',
    image3x: '/images/flag-project3x.png',
  },
  {
    name: 'redaccion tecnica',
    url: 'https://redaccion-tecnica.vercel.app/',
    github: 'https://github.com/MiguelHG2351/API-REST-COUNTRIES',
    description: 'Proyecto final para la clase de redacción técnica para mostrar las diferentes exposiciones de las carreras de Ing. Computacón, Ing agricola e Ingeniería civil.',
    image1x: '/images/redaccion.png',
    image2x: '/images/redaccion2x.png',
    image3x: '/images/redaccion3x.png',
  }
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
    case 'TICK':
      return {
        ...state,
        lastUpdate: action.lastUpdate,
        light: !!action.light,
      }
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'RESET':
      return {
        ...state,
        count: initialState.count,
      }
    case 'SET_THEME':
        return {
          ...state,
          theme: action.theme
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
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}