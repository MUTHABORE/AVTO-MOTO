import React from "react";

import Specifications from './specifications';
import Reviews from './reviews';
import Contacts from './contacts';

import sliderImage from '../images/slide_1.jpg';
import sliderMiniImage from '../images/slide_1.jpg';

const VehicleCard = () => {
  return (
    <section className="vehicle-card">
      <div className="vehicle-main">
        <div className="slider">
          <div className="slider__main-slide">
            <span className="slider__flag">new model</span>
            <img className="slider__main-img" src={sliderImage} alt="Фото автомашины Вашей мечты"/>
          </div>
          <div className="slider__controls">
            <button className="slider__arrow slider__arrow--before"></button>
            <ul className="slider__images-list">
              <li className="slider__images-list-item">
                <img className="slider__mini-img" src={sliderMiniImage} alt="Маленькое фото автомашины Вашей мечты"/>
              </li>
              <li className="slider__images-list-item">
                <img className="slider__mini-img" src={sliderMiniImage} alt="Маленькое фото автомашины Вашей мечты"/>
              </li>
              <li className="slider__images-list-item">
                <img className="slider__mini-img" src={sliderMiniImage} alt="Маленькое фото автомашины Вашей мечты"/>
              </li>
            </ul>
            <button className="slider__arrow slider__arrow--after"></button>
          </div>
        </div>
        <div className="vehicle-card__info">
          <h2 className="vehicle-card__title">Марпех 11</h2>
          <ul className="vehicle-card__specifications">
            <li className="vehicle-card__specifications-item vehicle-card__specifications-item--engine-type">бензин</li>
            <li className="vehicle-card__specifications-item vehicle-card__specifications-item--gearbox">механика</li>
            <li className="vehicle-card__specifications-item vehicle-card__specifications-item--horsepower">100 л.с.</li>
            <li className="vehicle-card__specifications-item vehicle-card__specifications-item--engine-volume">1.4 л.</li>
          </ul>
          <div className="vehicle-card__price">
            <p className="vehicle-card__discount-price">2 300 000 ₽</p>
            <p className="vehicle-card__full-price">2&nbsp; 400 000 ₽</p>
          </div>
          <a className="vehicle-card__request-button" href="#">оставить заявку</a>
          <a className="vehicle-card__credit-button" href="#">В КРЕДИТ ОТ 11 000 ₽</a>
        </div>
      </div>
      <div className="tabs">
        <ul className="tabs__list">
          <li className="tabs__item">Характеристики</li>
          <li className="tabs__item">Отзывы</li>
          <li className="tabs__item">Контакты</li>
        </ul>
        {/* <Specifications/> */}
        <Reviews />
        {/* <Contacts /> */}
      </div>
    </section>
  );
};

export default VehicleCard;
