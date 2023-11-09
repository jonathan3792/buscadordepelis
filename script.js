document.getElementById('searchButton').addEventListener('click', buscarMovies);

const api_key = 'c51ceabcae4c1131e4c997324f3cedee';
const urlBase = 'https://api.themoviedb.org/3/search/movie';
const urlImg = 'http://image.tmdb.org/t/p/w200';

async function buscarMovies() {
    try {
        const searchInput = document.getElementById('searchInput').value;

        // Usando Fetch para realizar una solicitud GET
        const fetchResponse = await fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`);

        if (!fetchResponse.ok) {
            throw new Error('La solicitud Fetch no fue exitosa.');
        }

        const fetchData = await fetchResponse.json();
        displayMovies(fetchData.results);
        guardarBusqueda(searchInput);

        // Usando Axios para realizar una solicitud GET
        const axiosResponse = await axios.get(`${urlBase}?api_key=${api_key}&query=${searchInput}`);

        if (!axiosResponse.data) {
            throw new Error('La solicitud Axios no fue exitosa.');
        }

        displayMovies(axiosResponse.data.results);
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}

function displayMovies(movies) {
    const resultContainer = document.getElementById('results');
    resultContainer.innerHTML = '';

    if (movies.length === 0) {
        resultContainer.innerHTML = '<p>No se encontraron resultados para tu búsqueda</p>';
        return;
    }

    movies.forEach(movie => {
        const { title, release_date, overview, poster_path } = movie;

        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const titleElement = document.createElement('h2');
        titleElement.textContent = title;

        const releaseDateElement = document.createElement('p');
        releaseDateElement.textContent = `La fecha de lanzamiento fue: ${release_date}`;

        const overviewElement = document.createElement('p');
        overviewElement.textContent = overview;

        const posterPath = urlImg + poster_path;
        const poster = document.createElement('img');
        poster.src = posterPath;

        movieDiv.appendChild(poster);
        movieDiv.appendChild(titleElement);
        movieDiv.appendChild(releaseDateElement);
        movieDiv.appendChild(overviewElement);

        resultContainer.appendChild(movieDiv);
    });
}

function guardarBusqueda(busqueda) {
    const busquedasPrevias = JSON.parse(localStorage.getItem('busquedas')) || [];
    busquedasPrevias.push(busqueda);
    localStorage.setItem('busquedas', JSON.stringify(busquedasPrevias));
}
