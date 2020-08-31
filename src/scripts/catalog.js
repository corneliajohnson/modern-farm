const foodSections = document.querySelector(".messages");

export const foodCatalog = (haverstFoodArr) => {
  foodSections.innerHTML += `${haverstFoodArr.map(
    (food) => `<section class="plant">${food}</section>`
  )}`;
  return foodSections;
};
