
const URL =  'https://api.themoviedb.org/4/list/1?api_key=a5170cf33f2ea88fec91c1a02708edef'
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/'
const movieEl = document.getElementById('movies')
const formEl = document.querySelector('form');
const input = document.getElementById('input')

const searchAPI  = 'https://api.themoviedb.org/3/search/movie?api_key=a5170cf33f2ea88fec91c1a02708edef&query='

getAllMovies(URL);

async function getAllMovies(url) {
    const response = await fetch(url);
    const responseData = await response.json();
    
    console.log(responseData.results);

    responseData.results.forEach((movie) => {

        const image_src = IMAGE_PATH + movie.poster_path;
        const movieInfoEl = document.createElement('div');
        movieInfoEl.classList.add('movie')
        movieInfoEl.innerHTML = `<img src="${image_src}"/><div class='movie-title'>
        <p>${movie.original_title}</p><span>${movie.vote_average}</span></div>`
        movieEl.appendChild(movieInfoEl)

        const spanEl = movieInfoEl.querySelector('span')

        if (movie.vote_average >= 7) {
            spanEl.classList.add('green')
        } else {
            spanEl.classList.add('red')
        }
    })
}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    searchValue = input.value
    const searchURL = searchAPI+searchValue
    movieEl.innerHTML = ' ';
    getAllMovies(searchURL)
    
    
})



