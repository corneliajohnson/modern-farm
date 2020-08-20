//return an array of seed objects
export const harvestPlants = (plantObj) => {
  const plantArr = []
  for (const plant of plantObj) {
    if (Array.isArray(plant)) {
      //get objects out of corn array
      for (let j = 0; j < plant[0].output; j++) {
        plantArr.push(plant[0].type)
      }
    }
    //Add as many plant amount the plant objects to the array that the function returns.
    for (let i = 0; i < plant.output; i++) {
      plantArr.push(plant.type)
    }
  }
  return plantArr
}