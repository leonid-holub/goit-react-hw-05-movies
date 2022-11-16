import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import onSearch from 'components/Fetch/Fetch';
import { nanoid } from 'nanoid';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState('');
  const PATH_NAME = `movie/${movieId}/reviews`;
  const defaulText = 'Sorry, nothing about that';

  useEffect(() => {
    onSearch(PATH_NAME).then(setReviews);
  }, [PATH_NAME]);

  useEffect(() => {
    const elReviews = document.querySelector('#reviews');
    elReviews.classList.add('active');

    return () => {
      elReviews.classList.remove('active');
    };
  }, []);

  if (reviews !== '') {
    return (
      <div className={css.wrapper}>
        <ul className={css.list}>
          {reviews.results.length !== 0 ? (
            reviews.results.map(({ author, content }) => (
              <li className={css.item} key={nanoid()}>
                <div className={css.info}>
                  <h2 className={css.title}>Author: {author}</h2>
                  <p className={css.paragraph}>{content}</p>
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

export default Reviews;
