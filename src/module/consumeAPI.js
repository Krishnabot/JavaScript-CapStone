import { Displaylikes, like } from './GetAddLike.js';
import DisplayCount from './count.js';

const MealList = document.querySelector('.meal-list');
const fetchMeal = async () => {
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
<button class ="comment" data="${element.idMeal}">Comment</button>
          </div>
          </div>
          </div>
`;

      MealList.appendChild(newMeal);
    });
  };

  const fetchURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=american';
  const meals = await fetch(fetchURL)
    .then((response) => response.json())
    .then((data) => data.meals);
  PopulateMeals(meals);

  const LikeCount = document.querySelectorAll('.likecount');
  const btnsArr = Array.from(LikeCount);
  for (let i = 0; i < btnsArr.length; i += 1) {
    btnsArr[i].addEventListener('click', () => {
      setTimeout(() => like(), 2000);
      Displaylikes();
    });
  }
};

fetchMeal();
Displaylikes();
DisplayCount();
