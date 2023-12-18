
let likes = {
    movie1: 0,
    movie2: 0,
    movie3: 0,
    movie4: 0,
    movie5: 0,
    movie6: 0
  };

  function likeMovie(movieId) {
    likes[movieId]++;
    updateLikeCount(movieId);
    sortMoviesByLikes();
  }

  function updateLikeCount(movieId) {
    const likeCountElement = document.getElementById(movieId).getElementsByClassName('like-count')[0];
    likeCountElement.textContent = likes[movieId];
  }

  function sortMoviesByLikes() {
    const movieContainer = document.querySelector('.container');
    const movies = Array.from(movieContainer.getElementsByClassName('movie'));

    movies.sort((a, b) => {
      const likesA = likes[a.id];
      const likesB = likes[b.id];
      return likesB - likesA;
    });

    movies.forEach((movie) => {
      movieContainer.appendChild(movie);
    });
  }