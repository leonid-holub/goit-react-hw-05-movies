import { useState } from 'react';
import Form from 'components/Movies/Form/Form';
import Wrapper from 'components/Movies/Wrapper/Wrapper';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [movieName, setMovieName] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const changeFilter = value => {
    setSearchParams({ query: value });
  };

  const handleSearch = e => {
    e.preventDefault();
    if (movieName !== '') {
      changeFilter(movieName);
    }
    setMovieName('');
  };

  const handleChange = e => {
    setMovieName(e.target.value);
  };

  return (
    <div>
      <Form
        value={movieName}
        handleSearch={handleSearch}
        handleChange={handleChange}
      />
      {searchParams.get('query') ? <Wrapper query={searchParams} /> : ''}
    </div>
  );
}
