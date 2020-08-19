
let allFieldPlants = []

export const addPlant = (seedObj) => {
  allFieldPlants.push(seedObj)
}

export const addPlants = () => {
  return allFieldPlants.slice()
}