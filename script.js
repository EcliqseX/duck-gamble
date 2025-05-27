//13 mins calc
function rollWeightedDie() {
  // Define each side and its weight (percent probability)
  const sides = [
    { value: "Side 1", weight: 0.9 },   // 5%
    { value: "Side 2", weight: 5 },  // 10%
    { value: "Side 3", weight: 5 },  // 15%
    { value: "Side 4", weight: 10 },  // 20%
    { value: "Side 5", weight: 10 },  // 10%
    { value: "Side 6", weight: 20 },  // 15%
    { value: "Side 7", weight: 20 },  // 15%
    { value: "Side 8", weight: 30 }   // 10%
  ];

  // Make sure weights add up to 100
  const totalWeight = sides.reduce((acc, side) => acc + side.weight, 0);

  // Get a random number from 0 to totalWeight
  const randomNum = Math.random() * totalWeight;

  // Find which side it falls into
  let sum = 0;
  for (let i = 0; i < sides.length; i++) {
    sum += sides[i].weight;
    if (randomNum <= sum) {
      return sides[i].value;
    }
  }
}
console.log(rollWeightedDie());
