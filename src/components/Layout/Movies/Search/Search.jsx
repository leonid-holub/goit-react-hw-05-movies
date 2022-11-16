// import { useState } from 'react';
// import Form from './Form/Form';
// import Wrapper from './Wrapper/Wrapper';

// const STATUS = {
//   form: 'form',
//   wrapper: 'wrapper',
//   details: 'details',
// };

// export default function Search() {
//   const [shownStatus, setShownStatus] = useState('form');
//   const [movieName, setMovieName] = useState('');
//   const [query, setQuery] = useState('&query=');

//   const handleSearch = e => {
//     e.preventDefault();

//     if (movieName !== '') {
//       setShownStatus(STATUS.wrapper);
//       setQuery(prevState => prevState + movieName);
//     }
//   };

//   const handleChange = e => {
//     setMovieName(e.target.value);
//   };

//   return (
//     <div>
//       {shownStatus !== 'details' ? (
//         <Form
//           handleSearch={handleSearch}
//           movieName={movieName}
//           handleChange={handleChange}
//         />
//       ) : (
//         ''
//       )}
//       {shownStatus === 'wrapper' ? <Wrapper query={query} /> : ''}
//     </div>
//   );
// }
