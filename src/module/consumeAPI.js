import popup from './popup.js';
import { Displaylikes, like } from './GetAddLike.js';
import DisplayCount from './count.js';
import { displayComments } from './CommentSection.js';

const MealList = document.querySelector('.meal-list');
const areaLinks = document.querySelectorAll('.area-link');
const fetchMeal = async () => {
  const MealsByArea = async (area) => {
        MealList.innerHTML = '';
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
          <button class = "like"><span class= "likecount" data="${element.idMeal}">0</span><i class="fas fa-heart like-icon" data="${element.idMeal}"></i></button>  
          <button class ="comment" data="${element.idMeal}"><i class="fa-solid fa-comments comment-icon"></i></button>
          </div>
          </div>
          </div>`;

        MealList.appendChild(newMeal);
      });
      like();
    };

    const fetchURL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
    const meals = await fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => data.meals);
    PopulateMeals(meals);
    popup();
  };

 const resetLinks = () => {
  for (let i = 0; i < areaLinks.length; i += 1) {
    areaLinks[i].classList.remove('active');
  }
};

  const defaultArea = areaLinks[0].dataset.area;;
  areaLinks[0].classList.add('active');
  MealsByArea(defaultArea);
  DisplayCount(defaultArea);
  Displaylikes();
  displayComments();


  const areaNav = document.querySelector('.nav-links');
  areaNav.addEventListener('click', (event) => {
    event.preventDefault();
    const areaLink = event.target.closest('.area-link');
    if (areaLink) {
      const area = areaLink.dataset.area;
      MealsByArea(area);
      DisplayCount(area);
      resetLinks();
      Displaylikes();
      displayComments();
      areaLink.classList.add('active');
    }
  });
};

fetchMeal();
