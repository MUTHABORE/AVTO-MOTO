import React from "react";

import logoPicture from '../images/logo.svg';

const Header = () => {
  return (
  <header className="header">
    <div className="header-menu">
      <a className="header-menu__logo">
        <img src={logoPicture} alt="Логотип АВТО-МОТО"/>
      </a>
      <nav className="navigation">
        <ul className="navigation__list navigation__list--header">
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Автомобили
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Контакты
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Услуги
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link" href="#">
              Вакансии
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );
};

export default Header;
