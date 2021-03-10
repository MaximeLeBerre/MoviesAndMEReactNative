const API_TOKEN = "a3bddbc3719a125283e7f1304ba0f8d2";

export function getFilmFromSearchApi(text, page){
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_TOKEN}&language=en-US&query=${text}&page=${page}`;
  return (
    fetch(url)
    .then((response) =>response.json())
    .catch((error) => console.log(error))
  )
    
}

export function getUrlForPoster(name){
  return (
    `https://image.tmdb.org/t/p/w300${name}`
  )
    
}
export function getUrlForBannerOfFilmDetails(backdrop){
  return (
    `https://image.tmdb.org/t/p/w300${backdrop}`
  )
    
}

export function getFilmDetailFromApi(id){

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_TOKEN}&language=en-US`;
  return (
    fetch(url)
    .then((response) =>response.json())
    .catch((error) => console.log(error))
    
  )
    
}

