

const foodSections = document.querySelector(".messages")

export const foodCatalog = (haverstFoodArr) => {
  haverstFoodArr.forEach(food => {
    foodSections.innerHTML += `
    <section class="plant">${food}</section>
    `
  });
  return foodSections
}

