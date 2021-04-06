import React from 'react';

const Popup = () => {
  return (
    <div className="popup__overlay">
      <form action="#" className="popup">
        <button className="popup__close-button"></button>
        <h3 className="popup__title">Оставить отзыв</h3>
        <div className="popup__fields">
          <input className="popup__input" type="text" placeholder="Имя" required/>
          <input className="popup__input" type="text" placeholder="Достоинства"/>
          <input className="popup__input" type="text" placeholder="Недостатки"/>
          <div className="popup__rating">
            <p className="popup__rating-title">Оцените товар:</p>
            <div className="popup__stars-bar">
              <label className="popup__star">
                <input className="visually-hidden" type="radio" name="personal-rating" value="1"/>
              </label>
              <label className="popup__star">
                <input className="visually-hidden" type="radio" name="personal-rating" value="2"/>
              </label>
              <label className="popup__star">
                <input className="visually-hidden" type="radio" name="personal-rating" value="3"/>
              </label>
              <label className="popup__star">
                <input className="visually-hidden" type="radio" name="personal-rating" value="4"/>
              </label>
              <label className="popup__star">
                <input className="visually-hidden" type="radio" name="personal-rating" value="5"/>
              </label>
            </div>
          </div>
          <textarea className="popup__input popup__input--comment" placeholder="Комментарий" required></textarea>
        </div>
        <button className="popup__submit">оставить отзыв</button>
      </form>
    </div>
  );
};

export default Popup;
