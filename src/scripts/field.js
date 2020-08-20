const plantsInField = [];

export const addPlant = (plantObj) => {
  plantsInField.push(plantObj)
}

export const addPlants = () => {
  return plantsInField.slice()
}
