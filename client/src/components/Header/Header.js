import './Header.css';
import {
  NavLink
} from 'react-router-dom';

function Header() {
  return (
    <div className="header__wrapper">
        <nav className='header container'>
          <NavLink activeClassName='active' to="/">Главная</NavLink>
          <NavLink activeClassName='active' to="/admin">Панель администратора</NavLink>
          <NavLink activeClassName='active' to="/accountant">Панель бухгалтера</NavLink>
          <NavLink activeClassName='active' to="/tax">Панель налогов</NavLink>
        </nav>
    </div>
  );
}

export default Header;
