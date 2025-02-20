const REMOVED = import.meta.env.VITE_REMOVED
const BASE_URL = 'https://api.themoviedb.org/3/'

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}movie/popular?api_key=${REMOVED}`)
  const data = await response.json()
  return data.results
}

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}search/movie?api_key=${REMOVED}&query=${encodeURIComponent(query)}`,
  )
  const data = await response.json()
  return data.results
}
