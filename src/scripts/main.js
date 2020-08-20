import { createPlan } from './plan.js';

const yearlyPlan = createPlan();

//TEST
import { addPlants } from './field.js'
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js'
plantSeeds(yearlyPlan)
const plantsArr = addPlants()
console.log(harvestPlants(plantsArr))
//TEST