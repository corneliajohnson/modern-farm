//New
export const harvestPlants = (plantArr) => {
  const harvestedPlants = [];

  for (const plant of plantArr) {
    if (!Array.isArray(plant)) {
      //add the amouth of seeds in the output
      for (let i = 0; i < plant.output; i++) {
        harvestedPlants.push(plant.type);
      }
    } else {
      //filter out plants that are arrays
      const plantArrays = plantArr.filter((plantArr) => {
        return Array.isArray(plantArr);
      });
      //pull out ojects from plant arrays
      for (const plantObj of plantArrays) {
        for (const plant of plantObj) {
          //onlyadd half of the corn
          for (let i = 0; i < plant.output / 2; i++) {
            harvestedPlants.push(plant.type);
          }
        }
      }
    }
  }

  return harvestedPlants;
};

//OLD
//return an array of seed objects
// export const harvestPlants = (plantObj) => {
//   const plantArr = []
//   for (const plant of plantObj) {
//     if (Array.isArray(plant)) {
//       //get objects out of corn array
//       for (let j = 0; j < plant[0].output; j++) {
//         plantArr.push(plant[0].type)
//       }
//     }
//     //Add as many plant amount the plant objects to the array that the function returns.
//     for (let i = 0; i < plant.output; i++) {
//       plantArr.push(plant.type)
//     }
//   }
//   return plantArr
// }
