import React from 'react';
import logoPicture from './images/logo.svg';
import sliderImage from './images/slide_1.jpg';
import sliderMiniImage from './images/slide_1.jpg';

const App = (props) => {
	return (
		<React.Fragment>
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

			<main>
				<section className="vehicle-card">
					<div className="vehicle-main">
						<div className="slider">
							<div className="slider__main-slide">
								{/* <span>new model</span> */}
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
							<h3 className="vehicle-card__title">Марпех 11</h3>
							<ul className="vehicle-card__specifications">
								<li className="vehicle-card__specifications-item">бензин</li>
								<li className="vehicle-card__specifications-item">механика</li>
								<li className="vehicle-card__specifications-item">100 л.с.</li>
								<li className="vehicle-card__specifications-item">1.4 л.</li>
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
						<table className="specifications">
							<tr className="specifications__row">
								<td>Трансмиссия</td>
								<td>Роботизированная</td>
							</tr>
							<tr className="specifications__row">
								<td>Мощность двигателя, л.с.</td>
								<td>249</td>
							</tr>
							<tr className="specifications__row">
								<td>Тип двигателя</td>
								<td>Бензиновый</td>
							</tr>
							<tr className="specifications__row">
								<td>Привод</td>
								<td>Полный</td>
							</tr>
							<tr className="specifications__row">
								<td>Объем двигателя, л</td>
								<td>2.4</td>
							</tr>
							<tr className="specifications__row">
								<td>Макс. крутящий момент</td>
								<td>370/4500</td>
							</tr>
							<tr className="specifications__row">
								<td>Количество цилиндров</td>
								<td>4</td>
							</tr>
						</table>
						{/* <div className="reviews">
							<a href="#">оставить отзыв</a>
							<ul className="reviews__list">
								<li>
									<p className="reviews__name">Борис Иванов</p>
									<div className="reviews__resume">
										<div className="reviews__dignity">
											<p>Достоинства</p>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit perferendis dicta. Et atque ex perferendis deleniti ipsa quibusdam laboriosam doloribus! Distinctio deleniti dolore iure expedita sequi praesentium commodi eum!</p>
										</div>
										<div className="reviews__limitations">
											<p>Недостатки</p>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum possimus fuga esse modi laboriosam in culpa accusamus facere iure porro delectus, perferendis aut fugiat dicta tempora impedit repellat minima veritatis!</p>
										</div>
										<div className="reviews__comment">
											<p>Комментарий</p>
											<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, sequi odio officiis suscipit eligendi aperiam corporis ea aliquam assumenda quae alias eaque accusamus dignissimos! Sint nam tempora beatae sapiente accusamus.</p>
										</div>
										<div className="reviews__rating">
											<div>
												<input type="radio" name="rating" value="1" />
												<input type="radio" name="rating" value="2" />
												<input type="radio" name="rating" value="3" />
												<input type="radio" name="rating" value="4" />
												<input type="radio" name="rating" value="5" />
											</div>
											<p className="reviews__rating-text">Советует</p>
										</div>
										<div className="reviews__options">
											<p>1 минуту назад</p>
											<a href="#">Ответить</a>
										</div>
									</div>
								</li>
							</ul>
						</div> */}
					</div>
					{/* <form action="#" className="add-review">
						<button className="add-review__close-button"></button>
						<h3 className="add-review__title">Оставить отзыв</h3>
						<input type="text" placeholder="Имя" required/>
						<input type="text" placeholder="Достоинства"/>
						<input type="text" placeholder="Недостатки"/>
						<div className="add-review__rating">
							<p className="add_review__rating-title">Оцените товар:</p>
							<div>
								<input type="radio" name="personal-rating" value="1"/>
								<input type="radio" name="personal-rating" value="2"/>
								<input type="radio" name="personal-rating" value="3"/>
								<input type="radio" name="personal-rating" value="4"/>
								<input type="radio" name="personal-rating" value="5"/>
							</div>
						</div>
						<textarea name="add-review__comment" placeholder="Комментарий" required></textarea>
						<button className="add-review__submit">оставить отзыв</button>
					</form> */}
				</section>
			</main>

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
		</React.Fragment>
	);
}

export default App;
