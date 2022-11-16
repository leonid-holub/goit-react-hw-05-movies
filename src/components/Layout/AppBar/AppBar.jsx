import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';

const navItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        {navItems.map(({ href, text }) => (
          <NavLink className={css.link} to={href} key={href}>
            {text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
