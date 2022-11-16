import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Movies from '../pages/Movies/Movies';
import Home from '../pages/Home/Home';
import { AppBar } from './AppBar/AppBar';

const Details = lazy(() => import('./Movies/Details/Details'));
const Cast = lazy(() => import('./Movies/Details/Cast/Cast'));
const Reviews = lazy(() => import('./Movies/Details/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<Details />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
