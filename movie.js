const apiKey = '1e3c00a40110306e1353c4f4ec5d461f'

const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`;

// 인기 영화 목록
// 에러 처리 적용
async function fetchPopularMovies() {
  try {
    const response = await fetch(popularMoviesUrl);
    if (!response.ok) {
      throw new Error('네트워크 응답이 올바르지 않습니다.');
    }
    const data = await response.json();
    displayPopularMovies(data.results);
  } catch (error) {
    console.error('영화 목록을 가져오는 데 문제가 발생했습니다:', error);
  }
}


function displayPopularMovies(movies) {
  const popularMovieDiv = document.querySelector("#popularmovie");
  popularMovieDiv.innerHTML = '';

  movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
      <img class="moviedetail" src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}" />
      <h3>${movie.title}</h3>
      <p>평점: ${movie.vote_average}</p>
    `;
    popularMovieDiv.appendChild(movieElement);
  });
}

// 영화 상세페이지 구현
// const detail = document.querySelectorAll(".moviedetail");
// const modal = document.querySelector("#modal");
// detail.addEventListener("click", function () {
//   modal.style.display = 'block';

// });


document.addEventListener('DOMContentLoaded', fetchPopularMovies);
