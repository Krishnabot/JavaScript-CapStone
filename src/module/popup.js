import sendComment from "./CommentSection.js";

const popup = async () => {
  const header = document.querySelector("header");
  const MealsSection = document.querySelector(".meal-list");
  const footer = document.querySelector("footer");
  const CommentBtn = document.getElementsByClassName("comment");
  const modal = document.querySelector("#modal");

  const dataModal = async (id) => {
    const fetchURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const meals = await fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => data.meals);
    meals.forEach((element) => {
      if (element.idMeal === id) {
        modal.innerHTML = `
        <div class="popUpModal">
            <button class="close"><i class="fas fa-times"></i></button>
        <div class="modalImg">
            <img class="modal-img" src="${element.strMealThumb}" alt="${element.strMeal}">
            <h2 class="title">${element.strMeal}</h2>
        </div>
        <div class="modalDescription">
        <div class = "show-left">
        <p> <span class="description-header">Area:</span> ${element.strArea} <p>
        <p> <span class="description-header">Ingredients:</span>
        <ul id = "showIngridents">
        </ul>
        </span><p>
        </div>
        <div class = "show-right">
        <p> <span class="description-header">Catagory:</span> ${element.strCatagory} <p>
        <p> <span class="description-header">Instructions:</span> <p> <span class = "recipe-instrruction"> ${element.strInstructions}  > read more </button> </span>
        </div>
        </div>
        <div class="comments-wrap">
          <div class="all-comments text-center">
            <h3>Comments <span id= "comments-count">0</span> </h3>
            <ul id="showComments">

            </ul>
          </div>
          <div>
            <h3> Add a comment </h3> 
          </div>
      
     <div class="comments">
      <form action="POST">
          <input name= "name" type="text" id="user-name" placeholder="Your name" required>
          <textarea name="comment" id="user-comment"  required></textarea>
          <button id="submit-comments" class="submit-comments" data="${element.idMeal}"> Submit</button>
          
      </form>
    </div>
    </div>
      `;

        const showIngridents = document.querySelector("#showIngridents");
        const ingredients = () => {
          const entries = Object.entries(element);
          const ingredientsArray = entries
            .filter(
              ([key, value]) =>
                key.startsWith("strIngredient") && value && value.trim()
            )
            .map(([key, value]) => value);
          const measuresArray = entries
            .filter(
              ([key, value]) =>
                key.startsWith("strMeasure") && value && value.trim()
            )
            .map(([key, value]) => value);
          for (let i = 1; i < ingredientsArray.length; i += 1) {
            showIngridents.innerHTML += `<li> ${ingredientsArray[i]} - ${measuresArray[i]} </li> `;
          }
        };
        ingredients();
        const exit = document.querySelector(".fa-times");
        exit.addEventListener("click", () => {
          header.classList.remove("hidden");
          MealsSection.classList.remove("hidden");
          footer.classList.remove("hidden");
          modal.classList.add("hidden");
        });
      }
      sendComment();
    });
  };

  for (let i = 0; i < CommentBtn.length; i += 1) {
    CommentBtn[i].addEventListener("click", () => {
      window.scrollTo(0, 0);
      const id = CommentBtn[i].getAttribute("data");
      dataModal(id);
      header.classList.add("hidden");
      MealsSection.classList.add("hidden");
      footer.classList.add("hidden");
      modal.classList.remove("hidden");
    });
  }
};

export default popup;
