const countTest = (mealsListarray) => {
  document.body.innerHTML = '<div id ="meals"> </div>';
  const meals = document.getElementById('meals');

  const mealsList = document.createElement('li');
  const mealslistarray = Array.from(document.querySelectorAll('#meals li'));
  mealsListarray.forEach((item) => {
    mealsList.innerHTML = `${item.name} `;
    meals.appendChild(mealsList);
    mealslistarray.push(mealsList);
  });
  return mealslistarray;
};

const countMock = (id, name) => {
  const mealsListarray = [
    {
      id: '1',
      name: 'American',
    },
    {
      id: '2',
      name: 'Chinese',
    },
  ];
  const meal = {
    id,
    name,
  };
  mealsListarray.push(meal);
  countTest(mealsListarray);
  return mealsListarray;
};

export { countMock, countTest };
