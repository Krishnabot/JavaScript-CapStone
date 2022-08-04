import { indexOf } from "lodash";

const popUps = [
    {
      img: '',
      title: 'Banana Pancackes',
      subtitle: 'Ingredients',
      Ingredients: 'Banana, Flour and Milk',
      Subtitle2: 'Order Dish',
    },

    {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },

      {
        img: '',
        title: 'Banana Pancackes',
        subtitle: 'Ingredients',
        Ingredients: 'Banana, Flour and Milk',
        Subtitle2: 'Order Dish',
      },
  ];

  const popup = document.querySelector('.card');
  const createPopup = (num) => {
    const model = document.createElement('div');
    model.classList.add('model');
    popup.appendChild(model);
    const mainImg = document.createElement('image');
    mainImg.setAttribute('src', num.img);
    mainImg.classList.add('cardImg');
    model.appendChild(mainImg);
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('container');
    /* popupContainer.id = `container-${i}`; */ // Dynamic id from 1 to 32, try to fix it.
    model.appendChild(popupContainer);
    const mainTitle = document.createElement('h1');
    mainTitle.classList.add('title');
    mainTitle.textContent = `${num.title}`;
    popupContainer.appendChild(mainTitle);
    const subTitle = document.createElement('h2');
    subTitle.classList.add('subtitle1');
    subTitle.textContent = `${num.subtitle}`;
    popupContainer.appendChild(subTitle);
    const ingredientsList = document.createElement('ul');
    ingredientsList.classList.add('ingredients');
    popupContainer.appendChild(ingredientsList);
    const itemsList = document.createElement('li');
    itemsList.classList.add('ingredients');
    itemsList.textContent = `${num.ingredients}`;
    ingredientsList.appendChild(itemsList);
    const subTitle2 = document.createElement('h2');
    subTitle2.classList.add('subtitle2');
    subTitle2.textContent = `${num.subtitle}`;
    popupContainer.appendChild(subTitle2);
};

for (let i = 0; i < popUps.length; i += 1) {
    createPopup(popUps[i]);
  }

/* for (let i = 0; i < btnList.length; i += 1) {
    btnList[i].addEventListener('click', () => {
      model[i].classList.toggle('visibility');
      popup.classList.add('show');
    });
  }  */
