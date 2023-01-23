const key = '-----' // your create key

const request = {
    requestPopuler: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false`,
    requestUpComing:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false`
    
}
export default request