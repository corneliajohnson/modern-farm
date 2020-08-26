import { usePlants } from "./field.js";
import { harvestPlantsObjs } from "./harvester.js";
import { displayFood } from "./displayFoodTable.js";

import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

const asparagusSeed = createAsparagus();
const cornSeed = createCorn();
const potatoSeed = createPotato();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();
const wheatSeed = createWheat();
const plantsArr = usePlants();

let aparagusAmount = 0;
let cornAmount = 0;
let potatoAmount = 0;
let soybeanAmount = 0;
let sunflowerAmount = 0;
let wheatAmount = 0;

const countType = (foodArr) => {
  foodArr.map((foodObj) => {
    switch (foodObj.type) {
      case "Asparagus":
        aparagusAmount++;
        break;
      case "Corn":
        cornAmount++;
        break;
      case "Potato":
        potatoAmount++;
        break;
      case "Soybean":
        soybeanAmount++;
        break;
      case "Sunflower":
        sunflowerAmount++;
        break;
      case "Wheat":
        wheatAmount++;
        break;
    }
  });
  return foodArr;
};

const harvestFoodArr = harvestPlantsObjs(plantsArr);
countType(harvestFoodArr);

//make an array for the display table
const newHavestFoodArr = [];

//date the seed amount to each obj
asparagusSeed.amount = aparagusAmount;
cornSeed[0].amount = cornAmount;
potatoSeed.amount = potatoAmount;
soybeanSeed.amount = soybeanAmount;
sunflowerSeed.amount = sunflowerAmount;
wheatSeed.amount = wheatAmount;

newHavestFoodArr.push(
  asparagusSeed,
  cornSeed[0],
  potatoSeed,
  soybeanSeed,
  sunflowerSeed,
  wheatSeed
);

export const plantCount = () => {
  return displayFood(newHavestFoodArr);
};
