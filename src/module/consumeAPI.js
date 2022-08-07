import popup from './popup.js';

import { Displaylikes, like } from './GetAddLike.js';
import DisplayCount from './count.js';

const MealList = document.querySelector('.meal-list');
const fetchMeal = async () => {
  const MealsByArea = async (area) => {
    const PopulateMeals = (meals) => {
      meals.forEach((element) => {
        const newMeal = document.createElement('div');
        newMeal.classList.add('meal-container');
        newMeal.innerHTML = ` 
      <div class="meal-card">
        <div class ="meal-img">
          <img src="${element.strMealThumb}" alt="${element.strMeal}">
        </div>
        <div class="meal-info">
          <h4 class="meal-name">${element.strMeal}</h4>
          <div class = "meal-reaction">
          <button class = "like"><span class= "likecount" data="${element.idMeal}">0</span><i class="fas fa-heart" data="${element.idMeal}"></i></button>  
          <button class ="comment" data="${element.idMeal}"><i class="fa-solid fa-comments"></i></button>
          </div>
          </div>
          </div>`;

        MealList.appendChild(newMeal);
      });
    };

    const fetchURL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
    const meals = await fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => data.meals);
    PopulateMeals(meals);
    popup();
  };

  const navlinks = document.querySelectorAll('nav li');
  const resetLinks = () => {
    for (let i = 0; i < navlinks.length; i += 1) {
      navlinks[i].classList.remove('active');
    }
  };

  for (let i = 0; i < navlinks.length; i += 1) {
    navlinks[i].addEventListener('click', () => {
      const area = navlinks[i].textContent.toLowerCase();
      MealsByArea(area);
      DisplayCount(area);
      resetLinks();
      setTimeout(() => like(), 500);
      Displaylikes();
      navlinks[i].classList.add('active');
    });
  }
  MealsByArea('american');
  DisplayCount('american');
};

fetchMeal();
Displaylikes();
