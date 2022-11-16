import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import onSearch from 'components/Fetch/Fetch';
import css from './Home.module.css';
import defaultPoster from './default_poster.png';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation();
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500/';
  const PATH_NAME = 'trending/movie/day';

  useEffect(() => {
    onSearch(PATH_NAME, `&page=${page}`)
      .then(res => res.results)
      .then(res => setMovies([...res]))
      .then(
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      );
  }, [page]);

  const increasePage = () => {
    setPage(page + 1);
  };

  const decreasePage = () => {
    setPage(page - 1);
  };

  const firstPage = () => {
    setPage(1);
  };

  const lastPage = () => {
    setPage(50);
  };

  return (
    <div className={css.home}>
      <ul className={css.list}>
        {movies.map(
          ({ id, title, poster_path, release_date, vote_average }) => (
            <li className={css.item} key={id}>
              <Link
                className={css.link}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                <img
                  className={css.poster}
                  src={poster_path ? POSTER_URL + poster_path : defaultPoster}
                  alt={`poster of  ${title}`}
                />
                <div className={css.info}>
                  <h2 className={css.title}>{title}</h2>
                  <p className={css.paragraph}>Release: {release_date}</p>
                  <p className={css.paragraph}>Rating: {vote_average}</p>
                </div>
              </Link>
            </li>
          )
        )}
      </ul>
      <div className={css.pagination}>
        {page !== 1 ? (
          <button className={css.button} type="button" onClick={firstPage}>
            First
          </button>
        ) : (
          ''
        )}
        {page !== 1 ? (
          <button className={css.button} type="button" onClick={decreasePage}>
            Prev
          </button>
        ) : (
          ''
        )}
        {page !== 50 ? (
          <button className={css.button} type="button" onClick={increasePage}>
            Next
          </button>
        ) : (
          ''
        )}
        {page !== 50 ? (
          <button className={css.button} type="button" onClick={lastPage}>
            Last
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
