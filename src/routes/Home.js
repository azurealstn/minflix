import React from 'react';
import axios from 'axios';
import Movie from '../component/Movie';
import './Home.css';
import Header from '../component/Header';


class Home extends React.Component {

  //변할 수 있는 값 상태
  state = {
    isLoading: true, //true로 초기화
    movies: [], // 무비 리스트 저장(JSON)
  };

  componentDidMount() {
    this.getMovies();
  }

  // API 요청 (비동기적으로 실행)
  // axios는 네트워크를 거쳐서 상대적으로 느려서 기다려달라고 요청 (async & await)
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating'); // 노마드코더 프록시를 이용한 yts api
    this.setState({movies, isLoading: false}); //{movies: movies}
  };

  render() {
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : ( 
        <div className="movies">
          <Header />
         {movies.map(movie => (
          <Movie
            key = {movie.id}
            year = {movie.year}
            title = {movie.title}
            summary = {movie.summary}
            poster = {movie.medium_cover_image}
            genres = {movie.genres}
          />
         ))}
        </div>
        )}
      </section>
    );
  }

}

export default Home;
