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
            <h2 class="titme">${element.strMeal}</h2>
        </div>
        <div class="popup-img">
            <img class="popup-img" src="${element.strMealThumb}" alt="${element.strMeal}">
        </div>
        <div class="popup-columns">
        <div class = "left-columns">
        <p> <span class="description-header">Area:</span> ${element.strArea} <p>
        <p> <span class="description-header">Ingredients:</span>
        <ul id = "ingredientsUl">
        </ul>
        </span><p>
        </div>
        <div class = "right-columns">
        <p> <span class="description-header">Catagory:</span> ${element.strCatagory} <p>
        <p> <span class="description-header">Instructions:</span> <p> <span class = "recipe-instrruction"> ${element.strInstructions}  > read more </button> </span>
        </div>
        </div>
        <div class="comments-container">
          <div class="all-comments text-center">
            <h3>Comments <span id= "comments-count">0</span> </h3>
            <ul id="comments-ul">

            </ul>
          </div>
          <div class = "text-center2">
            <h3> Add a comment </h3> 
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
