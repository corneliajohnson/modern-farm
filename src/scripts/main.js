import { createPlan } from './plan.js';

const yearlyPlan = createPlan();

//TEST
import { addPlant, addPlants } from './field.js'
import { plantSeeds } from './tractor.js';
plantSeeds(yearlyPlan)
console.log(addPlants())

//TEST