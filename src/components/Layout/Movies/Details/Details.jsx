import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import onSearch from 'components/Fetch/Fetch';
import css from './Details.module.css';
import defaultPoster from '../../../../pages/Movies/default_poster.png';

const Details = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState('');
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  const PATH_NAME = `movie/${movieId}`;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    onSearch(PATH_NAME).then(setDetails);
  }, [PATH_NAME]);

  if (details !== '') {
    return (
      <main className={css.details}>
        <Link to={backLinkHref}>
          <button className={css.button} type="button">
            Go back
          </button>
        </Link>
        <div className={css['details__wrapper']}>
          <div className={css.poster}>
            <img
              className={css.photo}
              src={
                details.poster_path
                  ? POSTER_URL + details.poster_path
                  : defaultPoster
              }
              alt={'poster of ' + details.title}
            />
          </div>
          <div className={css.info}>
            <h2 className={css.name}>{details.original_title}</h2>
            <p className={css.paragraph}>
              USER SCORE: {(details.vote_average * 10).toFixed(0)}%
            </p>
            <h3 className={css.overwiev}>Overwiev</h3>
            <p className={css.paragraph}>{details.overview}</p>
            <h4 className={css.genres}>Genres</h4>
            <p className={css.paragraph}>
              {details.genres.map(({ name }) => (
                <span key={name}>{`${name} `}</span>
              ))}
            </p>
          </div>
        </div>
        <div className={css.links}>
          <Link
            className={css.link}
            to="cast"
            state={{ from: backLinkHref }}
            id="cast"
          >
            Cast
          </Link>
          <Link
            className={css.link}
            to="reviews"
            state={{ from: backLinkHref }}
            id="reviews"
          >
            Reviews
          </Link>
        </div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    );
  }
};

export default Details;
