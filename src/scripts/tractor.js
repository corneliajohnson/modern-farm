import { addPlant } from './field.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createCorn } from './seeds/corn.js'
import { createPotato } from './seeds/potato.js'
import { createSoybean } from './seeds/soybean.js'
import { createSunflower } from './seeds/sunflower.js'
import { createWheat } from './seeds/wheat.js'



const asparagusSeed = createAsparagus()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()


export const plantSeeds = (yearlyPlan) => {
  for (let i = 0; i < yearlyPlan.length; i++) {
    for (let j = 0; j < yearlyPlan[i].length; j++) {

      //call each create plant function in yearlyPlan arrays
      let plantName = yearlyPlan[i][j]
      switch (plantName) {
        case 'Asparagus':
          addPlant(asparagusSeed)
          break;
        case 'Corn':
          addPlant(cornSeed)
          break;
        case 'Potato':
          addPlant(potatoSeed)
          break;
        case 'Soybean':
          addPlant(soybeanSeed)
          break;
        case 'Sunflower':
          addPlant(sunflowerSeed)
          break;
        case 'Wheat':
          addPlant(wheatSeed)
          break;
      }

    }
  }
}