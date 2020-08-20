//return an array of seed objects
export const harvestPlants = (plantObj) => {
  const plantArr = []
  for (const plant of plantObj) {
    for (let i = 0; i < plant.output; i++) {
      plantArr.push(plant)
    }
  }
  return plantArr
}