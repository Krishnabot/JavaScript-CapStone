/* eslint-disable no-unused-vars */
import { sendComment } from './CommentSection.js';

const popup = async () => {
  const header = document.querySelector('header');
  const MealsSection = document.querySelector('.meal-list');
  const footer = document.querySelector('footer');
  const CommentBtn = document.getElementsByClassName('comment');
  const popup = document.querySelector('#popup-content');

  const datapopup = async (id) => {
    const fetchURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const meals = await fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => data.meals);
    meals.forEach((element) => {
      if (element.idMeal === id) {
        popup.innerHTML = `
        <div id="pop-up">
        <div class="card">
        <div class="meal-header">
            <i class="fas fa-times close-pop-up"></i>
            <h2 class ="meal-name">${element.strMeal}</h2>
        </div>
        <div class="popup-img">
            <img class="popup-img" src="${element.strMealThumb}" alt="${element.strMeal}">
        </div>
        <div class="cuisine">
        <h2> Cuisine: ${element.strArea}<h2>
          </div>
        <div class="popup-columns">
        <div class = "left-columns">
        <h3 class="ingridient">Ingredients:</h3>
        <ul id = "ingredientsUl">
        </ul>
        </span><p>
        </div>
        <div class = "right-columns">
        <h3 class="description-header">Recipe : </h3>
        <p class = "recipe-instrruction"> ${element.strInstructions}</p>
        </div>
        </div>
    <h1 class="leave-comment"> Looks Delicious? Leave A Comment </h1>
        <div class="comments-wrap">
          <div class="display-comments">
            <h3>Comments <span id= "comments-count">0</span> </h3>
            <ul id="comments-ul">
            </ul>
          </div>

     <div class="add-comments">
      <form action="POST">
          <input name= "name" type="text" id="input-name" placeholder="Your name" required>
          <textarea name="comment" id="comment"  required></textarea>
          <span id = "alert" class="text-start"> </span>
          <button id="submit-comment" class="submit-comment" data="${element.idMeal}"> Submit</button>
          
      </form>
    </div>
    </div> 
    </div>
    </div>
      `;

        const ingredientsUl = document.querySelector('#ingredientsUl');
        const ingredients = () => {
          const entries = Object.entries(element);
          const ingredientsArray = entries
            .filter(
              ([key, value]) => key.startsWith('strIngredient') && value && value.trim(),
            )
            .map(([key, value]) => value);
          const measuresArray = entries
            .filter(
              ([key, value]) => key.startsWith('strMeasure') && value && value.trim(),
            )
            .map(([key, value]) => value);
          for (let i = 1; i < ingredientsArray.length; i += 1) {
            ingredientsUl.innerHTML += `<li> ${ingredientsArray[i]} - ${measuresArray[i]} </li> `;
          }
        };
        ingredients();
        const exit = document.querySelector('.fa-times');
        exit.addEventListener('click', () => {
          header.classList.remove('hidden');
          MealsSection.classList.remove('hidden');
          footer.classList.remove('hidden');
          popup.classList.add('hidden');
        });
      }
      sendComment();
    });
  };

  for (let i = 0; i < CommentBtn.length; i += 1) {
    CommentBtn[i].addEventListener('click', () => {
      window.scrollTo(0, 0);
      const id = CommentBtn[i].getAttribute('data');
      datapopup(id);
      header.classList.add('hidden');
      MealsSection.classList.add('hidden');
      footer.classList.add('hidden');
      popup.classList.remove('hidden');
    });
  }
};

export default popup;
