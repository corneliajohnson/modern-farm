const foodSections = document.querySelector(".messagesVisual");

export const foodVisualCatalog = (haverstFoodArr) => {
  haverstFoodArr.forEach((food) => {
    foodSections.innerHTML += `
    <section class="plant">${food.image}</section>
    `;
  });
  return foodSections;
};
