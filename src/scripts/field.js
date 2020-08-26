const plantsInField = [];

export const addPlant = (plantObj) => {
  plantsInField.push(plantObj)
}

export const usePlants = () => {
  return plantsInField.slice()
}