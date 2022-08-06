const popupData = (id) => {
  const MealList2 = document.getElementById('cards');
  const newMeal = document.createElement('div');
  newMeal.classList.add('.meal-container2');
  newMeal.setAttribute('id', 'container-John');
  MealList2.appendChild(newMeal);
  const displayData = async () => {
    console.log(id);
    const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await result.json();
    console.log(data);
    newMeal.innerHTML = ` 
    <i class="fa-solid fa-x fa-xl"></i>
    <div class="meal-card2">
      <div class ="meal-img2">
        <img src="${data.meals[0].strMealThumb}" alt="${data.meals[0].strMeal}">
      </div>
      <div class="meal-info2">
        <h1 class="meal-name2">${data.meals[0].strMeal}</h1>
        <p class="Description"><strong>This is a tasty dish</strong></p>
        <h2 class="subtitle1">Comments</h2>
        <h2 class="subtitle3">Add Comments</h2>
        <div class="meal-reaction">
          <input class="Name" type="text" placeholder="Your name">
          <input class="Insights" type="text" placeholder="Your insights">
          <button class ="comment2" data="${data.meals[0].idMeal}}">Comment</button>
        </div>
      </div>
    </div>
    `;
  };

  displayData();
};

export default popupData;
