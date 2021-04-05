import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="navigation">
        <ul className="navigation__list navigation__list--footer">
          <li className="navigation__item">
            <a className="navigation__link navigation__link--footer" href="#">
              Корпоративным клиентам
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link navigation__link--footer" href="#">
              Клиентам
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link navigation__link--footer" href="#">
              Аренда авто
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link navigation__link--footer" href="#">
              Каршеринг
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link navigation__link--footer" href="#">
              Как продать авто
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link navigation__link--footer" href="#">
              Traid-in
            </a>
          </li>
          <li className="navigation__item">
            <a className="navigation__link navigation__link--footer" href="#">
              Test draiv
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
