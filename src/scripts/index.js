import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import DATA from './data/DATA.json'

const footerYear = document.getElementById('footerYear');
footerYear.innerHTML = new Date().getFullYear();

const menuButton = document.getElementById('menuButton');
const navElement = document.getElementById('navElement');
const restaurantList = document.getElementById('restaurantList');

menuButton.addEventListener('click', (event) => {
  navElement.classList.toggle('open')
  event.stopPropagation()
});

document.body.addEventListener('click', (event) => {
  navElement.classList.remove('open');
  event.stopPropagation();
});

DATA.restaurants.forEach(restaurant => {
  let html = '';
  html =  `
    <article class="restaurant__item">
      <div class="restaurant__thumbnail">
        <img src="${restaurant.pictureId}" alt="${restaurant.name}">

        <p>${restaurant.city}</p>
      </div>

      <div class="restaurant__overview">
        <p class="restaurant__rating">Rating: ${restaurant.rating}<p>
        <p class="restaurant__name"><a href="${restaurant.id}">${restaurant.name}</a><p>
        <p class="restaurant__description">${restaurant.description}<p>
      </div>
    </article>
  `;

  restaurantList.innerHTML += html
});