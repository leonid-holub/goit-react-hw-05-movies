import { API_KEY } from './API_KEY';

const BASE_URL = 'https://api.themoviedb.org/3/';

const onSearch = (path, param) => {
  return fetch(
    `${BASE_URL}${path}?api_key=${API_KEY}${param ? param : ''}`
  ).then(res => {
    return res.json();
  });
};

export default onSearch;
