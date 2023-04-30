const DisplayCount = async () => {
  const mealCount = document.getElementsByClassName('menuCount');
  const areas = ['american', 'french', 'chinese'];

  for (let i = 0; i < mealCount.length; i += 1) {
    const area = areas[i];
    const fetchURL = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
    const meals = await fetch(fetchURL)
      .then((res) => res.json())
      .then((data) => data.meals);

    mealCount[i].innerHTML = `(${meals.length})`;
  }
};

export default DisplayCount;
