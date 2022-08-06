import popupData from '../pop-up.js';

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
          <button class="like" data="${element.idMeal}"> Like </button>
          <button class ="comment" data="${element.idMeal}" id="containerBtn${element.idMeal}">Comment</button>
          </div>
          </div>
          </div>
`;

      MealList.appendChild(newMeal);

      const projectBtn = document.getElementById(`containerBtn${element.idMeal}`);

      projectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        popupData(element.idMeal);
        console.log(element.idMeal);
      });
    });
  };

  const fetchURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=american';
  const meals = await fetch(fetchURL)
    .then((response) => response.json())
    .then((data) => data.meals);
  PopulateMeals(meals);
  const MealCount = document.querySelector('.menuCount');
  MealCount.innerHTML = `${meals.length}`;
};

fetchMeal();
