const mealCount = document.getElementsByClassName('menuCount');
const DisplayCount = async (area) => {
  const fetchURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=american';
  const meals = await fetch(fetchURL)
    .then((res) => res.json())
    .then((data) => data.meals);

  for (let i = 0; i < mealCount.length; i += 1) {
    mealCount[i].innerHTML = '';
    if (mealCount[i].classList.contains(area)) {
      mealCount[i].innerHTML = `(${meals.length})`;
    }
  }
};
export default DisplayCount;
