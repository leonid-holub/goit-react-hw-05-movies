import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import onSearch from 'components/Fetch/Fetch';
import css from './Wrapper.module.css';
import defaultPoster from '../../../pages/Movies/default_poster.png';

const Wrapper = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
  const PATH_NAME = 'search/movie';

  useEffect(() => {
    onSearch(PATH_NAME, '&' + query)
      .then(res => res.results)
      .then(res => setMovies([...res]));
  }, [query]);

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {movies.map(
          ({ id, title, poster_path, release_date, vote_average }) => (
            <li className={css.item} key={id}>
              <Link
                className={css.link}
                to={`${id}`}
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
    </div>
  );
};

export default Wrapper;
