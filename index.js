const apiKey = 'c01a0484';
const searchInput = document.getElementById('search-input');
const movieInfoSection = document.getElementById('movie-info');
const recommendedMoviesSection = document.getElementById('recommended-movies');
const loadingIndicator = document.getElementById('loading-indicator');
let debounceTimeout;

searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(searchMovie, 300); 
});

function searchMovie() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        showLoading();
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                hideLoading();
                displayMovieInfo(data);
                fetchRecommendedMovies(data.Title);
            })
            .catch(error => {
                hideLoading();
                console.error(error);
                alert('An error occurred while fetching movie data.');
            });
    }
}

function displayMovieInfo(data) {
    const { Title, Year, Director, Genre, Plot, Poster } = data;
    const movieInfoHTML = `
        <h2>${Title} (${Year})</h2>
        <p>Director: ${Director}</p>
        <p>Genre: ${Genre}</p>
        <p>Plot: ${Plot}</p>
        <img src="${Poster !== 'N/A' ? Poster : 'path/to/placeholder-image.jpg'}" alt="${Title} poster">
    `;
    movieInfoSection.innerHTML = movieInfoHTML;
}

function fetchRecommendedMovies(title) {
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`)
        .then(response => response.json())
        .then(data => displayRecommendedMovies(data.Search))
        .catch(error => console.error(error));
}

function displayRecommendedMovies(movies) {
    let recommendedMoviesHTML = '';
    movies.forEach(movie => {
        const { Title, Poster } = movie;
        const posterURL = Poster !== "N/A" ? Poster : 'path/to/placeholder-image.jpg';
        recommendedMoviesHTML += `
            <div class="movie-poster" onclick="fetchMovieDetails('${Title}')">
                <img src="${posterURL}" alt="${Title} poster" onerror="this.onerror=null;this.src='path/to/placeholder-image.jpg';">
                <p>${Title}</p>
            </div>
        `;
    });
    recommendedMoviesSection.innerHTML = recommendedMoviesHTML;
}

function fetchMovieDetails(title) {
    showLoading();
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${title}`)
        .then(response => response.json())
        .then(data => {
            hideLoading();
            displayMovieInfo(data);
        })
        .catch(error => {
            hideLoading();
            console.error(error);
            alert('An error occurred while fetching movie data.');
        });
}

function showLoading() {
    loadingIndicator.style.display = 'block';
}

function hideLoading() {
    loadingIndicator.style.display = 'none';
}
