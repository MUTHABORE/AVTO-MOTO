import React from 'react';
import logoPicture from './images/logo.svg';

const App = (props) => {
	return (
		<React.Fragment>
			<header>
				<div className="header-menu">
					<a className="header-menu__logo" href="#">
						<img src={logoPicture} alt="Логотип АВТО-МОТО"/>
						<h2 className="header-menu__title">
							<p>AVTO</p>
							<small>MOTO</small>
						</h2>
					</a>
					<nav className="navigation">
						<ul className="navigation-list">
							<li className="navigation-list__item">
								<a href="#">
									Автомобили
								</a>
							</li>
							<li className="navigation-list__item">
								<a href="#">
									Контакты
								</a>
							</li>
							<li className="navigation-list__item">
								<a href="#">
									Услуги
								</a>
							</li>
							<li className="navigation-list__item">
								<a href="#">
									Вакансии
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>

			<main>
				<section className="vehicle-card">
					<div className="vehical-main">
						<div className="vehical-slider"></div>
						<div className="vehical-card__info">
							<h3 className="vehical-card__title">Марпех 11</h3>
							<ul className="vehical-card__specifications">
								<li>Бензин</li>
								<li>Механика</li>
								<li>100 л.с.</li>
								<li>1.4 л.</li>
							</ul>
							<div className="vehical-card__price">
								<p>2 300 000 ₽</p>
								<p>2 400 000 ₽</p>
							</div>
							<a href="#">оставить заявку</a>
							<a href="#">В КРЕДИТ ОТ 11 000 ₽</a>
						</div>
					</div>
					<div className="vehicle-description">
						<table>
							<tr>
								<th>Характеристики</th>
								<th>Отзывы</th>
								<th>Контакты</th>
							</tr>
						</table>
						<table className="vehicle-description__specifications">
							<tr>
								<td>Трансмиссия</td>
								<td>Роботизированная</td>
							</tr>
							<tr>
								<td>Мощность двигателя, л.с.</td>
								<td>249</td>
							</tr>
							<tr>
								<td>Тип двигателя</td>
								<td>Бензиновый</td>
							</tr>
							<tr>
								<td>Привод</td>
								<td>Полный</td>
							</tr>
							<tr>
								<td>Объем двигателя, л</td>
								<td>2.4</td>
							</tr>
							<tr>
								<td>Макс. крутящий момент</td>
								<td>370/4500</td>
							</tr>
							<tr>
								<td>Количество цилиндров</td>
								<td>4</td>
							</tr>
						</table>
						<div className="reviews">

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
						</div>
					</div>
					<form action="#" className="add-review">
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
					</form>
				</section>
			</main>

			<footer>
				<nav className="navigation">
					<ul className="navigation-list">
						<li>
							<a href="#">
								Корпоративным клиентам
							</a>
						</li>
						<li>
							<a href="#">
								Клиентам
							</a>
						</li>
						<li>
							<a href="#">
								Аренда авто
							</a>
						</li>
						<li>
							<a href="#">
								Каршеринг
							</a>
						</li>
						<li>
							<a href="#">
								Как продать авто
							</a>
						</li>
						<li>
							<a href="#">
								Traid-in
							</a>
						</li>
						<li>
							<a href="#">
								Test drive
							</a>
						</li>
					</ul>
				</nav>
			</footer>
		</React.Fragment>
	);
}

export default App;
