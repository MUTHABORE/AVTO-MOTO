import React from 'react';

const Reviews = () => {
  return (
    <div className="reviews">
      <a className="reviews__add-review-button" href="#">оставить отзыв</a>
      <ul className="reviews__list">
        <li className="reviews__item">
          <p className="reviews__name">Борис Иванов</p>
          <div className="reviews__resume">
            <div className="reviews__dignity">
              <p className="reviews__title reviews__title--dignity">Достоинства</p>
              <p className="reviews__answer">мощность, внешний вид</p>
            </div>
            <div className="reviews__limitations">
              <p className="reviews__title reviews__title--limitations">Недостатки</p>
              <p className="reviews__answer">Слабые тормозные колодки (пришлось заменить)</p>
            </div>
            <div className="reviews__comment">
              <p className="reviews__title">Комментарий</p>
              <p className="reviews__answer">Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.</p>
            </div>
            <div className="reviews__rating">
              <ul className="reviews__rating-list">
                <li className="reviews__rating-value"></li>
                <li className="reviews__rating-value"></li>
                <li className="reviews__rating-value"></li>
                <li className="reviews__rating-value"></li>
                <li className="reviews__rating-value"></li>
              </ul>
              <p className="reviews__rating-text">Советует</p>
            </div>
            <div className="reviews__options">
              <p className="reviews__time">1 минуту назад</p>
              <a className="reviews__answer-button"href="#">Ответить</a>
            </div>
          </div>
        </li>
        <li className="reviews__item">
          <p className="reviews__name">Марсель Исмагилов</p>
          <div className="reviews__resume">
            <div className="reviews__dignity">
              <p className="reviews__title reviews__title--dignity">Достоинства</p>
              <p className="reviews__answer">Cтиль, комфорт, управляемость</p>
            </div>
            <div className="reviews__limitations">
              <p className="reviews__title reviews__title--limitations">Недостатки</p>
              <p className="reviews__answer"> Дорогой ремонт и обслуживание</p>
            </div>
            <div className="reviews__comment">
              <p className="reviews__title">Комментарий</p>
              <p className="reviews__answer">Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.</p>
            </div>
            <div className="reviews__rating">
              <ul className="reviews__rating-list">
                  <li className="reviews__rating-value"></li>
                  <li className="reviews__rating-value"></li>
                  <li className="reviews__rating-value"></li>
                  <li className="reviews__rating-value"></li>
                  <li className="reviews__rating-value"></li>
              </ul>
              <p className="reviews__rating-text">Советует</p>
            </div>
            <div className="reviews__options">
              <p className="reviews__time">1 минуту назад</p>
              <a className="reviews__answer-button"href="#">Ответить</a>
            </div>
          </div>
        </li>
      </ul>
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
    </div>
  );
};

export default Reviews;
