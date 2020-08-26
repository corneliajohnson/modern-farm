const havestTableUI = document.querySelector(".havestTableUI");

havestTableUI.innerHTML = `
<tr>
<th>Food</th>
<th>Quantity</th>
</tr>
`;

export const displayFood = (foodArr) => {
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
