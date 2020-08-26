const havestTableUI = document.querySelector(".havestTableUI");

export const displayFood = (foodArr) => {
  havestTableUI.innerHTML = `
  <tr>
  <th>Food</th>
  <th>Quantity</th>
  </tr>
  `;

  foodArr.map((food) => {
    havestTableUI.innerHTML += `
    <tr>
    <th>${food.type}</th>
    <th>${food.amount}</th>
    </tr>
    `;
  });
  return havestTableUI;
};
