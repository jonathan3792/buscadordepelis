document.getElementById('searchButton').addEventListener('click', buscarMovies);

const api_key = 'c51ceabcae4c1131e4c997324f3cedee';
const urlBase = 'https://api.themoviedb.org/3/search/movie';
const urlImg = 'http://image.tmdb.org/t/p/w200';

function buscarMovies() {
    const searchInput = document.getElementById('searchInput').value;

    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa.');
            }
            return response.json();
        })
        .then(data => {
            displayMovies(data.results);
            guardarBusqueda(searchInput); // Guardar la búsqueda solo si la solicitud fue exitosa
        })
        .catch(error => {
            console.error('Error en la solicitud:', error);
        });
}

function displayMovies(movies) {
    const resultContainer = document.getElementById('results');
    resultContainer.innerHTML = '';

    if (movies.length === 0) {
        resultContainer.innerHTML = '<p>No se encontraron resultados para tu búsqueda</p>';
        return;
    }

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const title = document.createElement('h2');
        title.textContent = movie.title;

        const releaseDate = document.createElement('p');
        releaseDate.textContent = 'La fecha de lanzamiento fue: ' + movie.release_date;

        const overview = document.createElement('p');
        overview.textContent = movie.overview;

        const posterPath = urlImg + movie.poster_path;
        const poster = document.createElement('img');
        poster.src = posterPath;

        movieDiv.appendChild(poster);
        movieDiv.appendChild(title);
        movieDiv.appendChild(releaseDate);
        movieDiv.appendChild(overview);

        resultContainer.appendChild(movieDiv);
    });
}

function guardarBusqueda(busqueda) {
    const busquedasPrevias = JSON.parse(localStorage.getItem('busquedas')) || [];
    busquedasPrevias.push(busqueda);
    localStorage.setItem('busquedas', JSON.stringify(busquedasPrevias));
}
