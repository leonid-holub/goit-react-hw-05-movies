import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Movies from '../pages/Movies/Movies';
import Home from '../pages/Home/Home';
// import { Toaster } from 'react-hot-toast';
import { Layout } from './Layout/Layout';
// import Details from './Layout/Movies/Details/Details';
// import Reviews from './Layout/Movies/Details/Reviews/Reviews';
// import Cast from './Layout/Movies/Details/Cast/Cast';

const Details = lazy(() => import('./Layout/Movies/Details/Details'));
const Cast = lazy(() => import('./Layout/Movies/Details/Cast/Cast'));
const Reviews = lazy(() => import('./Layout/Movies/Details/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="Movies" element={<Movies />} />
          <Route path="Movies/:movieId" element={<Details />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
