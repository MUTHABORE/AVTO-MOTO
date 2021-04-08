import React from 'react';

import {withPopup} from '../hocs/with-popup';

const Popup = (props) => {
  const {isPopupOpen, onPopupChangeState, onReviewChange, onSubmit} = props;
  // localStorage.setItem('myCat', 'Tom');
  // console.log(localStorage.getItem('myCat'));
  console.log(props);
  
  return(
    <div>
      {isPopupOpen === true && (
      <div className="popup__overlay" onClick={onPopupChangeState}>
        <form action="#" className="popup" onClick={(evt) => {evt.stopPropagation()}}>
          <button className="popup__close-button" type="button" onClick={onPopupChangeState}></button>
          <h3 className="popup__title">Оставить отзыв</h3>
          <div className="popup__fields">
            <div>
              <input className="popup__input popup__required-field" onChange={onReviewChange} name="name" type="text" placeholder="Имя" autoFocus/>
            </div>
            <input className="popup__input" onChange={onReviewChange} name="dignity" type="text" placeholder="Достоинства"/>
            <input className="popup__input" onChange={onReviewChange} name="limitations" type="text" placeholder="Недостатки"/>
            <div className="popup__rating">
              <p className="popup__rating-title">Оцените товар:</p>
              <div className="popup__stars-bar">
                <label className="popup__star">
                  <input className="visually-hidden" onChange={onReviewChange} type="radio" name="rating" value="1"/>
                </label>
                <label className="popup__star">
                  <input className="visually-hidden" onChange={onReviewChange} type="radio" name="rating" value="2"/>
                </label>
                <label className="popup__star">
                  <input className="visually-hidden" onChange={onReviewChange} type="radio" name="rating" value="3"/>
                </label>
                <label className="popup__star">
                  <input className="visually-hidden" onChange={onReviewChange} type="radio" name="rating" value="4"/>
                </label>
                <label className="popup__star">
                  <input className="visually-hidden" onChange={onReviewChange} type="radio" name="rating" value="5"/>
                </label>
              </div>
            </div>
            <div>
              <textarea className="popup__input popup__input--comment popup__required-field" onChange={onReviewChange}name="comment" placeholder="Комментарий"></textarea>
            </div>
          </div>
          <button className="popup__submit" type="submit" onClick={onSubmit}>оставить отзыв</button>
        </form>
      </div>
      )}
    </div>
  );
};

export default withPopup(Popup);
