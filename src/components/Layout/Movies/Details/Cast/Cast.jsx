import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import onSearch from 'components/Fetch/Fetch';
import css from './Cast.module.css';
import defaultUser from './default_user.png';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState('');
  const PATH_NAME = `movie/${movieId}/credits`;
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
  const defaulText = 'Sorry, nothing about that';

  useEffect(() => {
    onSearch(PATH_NAME).then(setActors);
  }, [PATH_NAME]);

  useEffect(() => {
    const elCast = document.querySelector('#cast');
    elCast.classList.add('active');

    return () => {
      elCast.classList.remove('active');
    };
  }, []);

  if (actors !== '') {
    return (
      <div className={css.wrapper}>
        <ul className={css.list}>
          {actors.cast.length !== 0 ? (
            actors.cast.map(({ id, name, profile_path, character }) => (
              <li className={css.item} key={id}>
                <div className={css.frame}>
                  <img
                    className={css.poster}
                    src={profile_path ? POSTER_URL + profile_path : defaultUser}
                    alt={`${name}`}
                  />
                </div>
                <div className={css.info}>
                  <h2 className={css.title}>{name}</h2>
                  <p className={css.paragraph}>Character: {character}</p>
                </div>
              </li>
            ))
          ) : (
            <li className={css.item}>{defaulText}</li>
          )}
        </ul>
      </div>
    );
  }
};

export default Cast;
