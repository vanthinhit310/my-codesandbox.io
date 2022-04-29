import "./styles.css";

const animals = ["Cat", "Dog", "Pig", "Chicken", "Horse", "Lion"];
console.log(animals);

// Add item to array using spread operator
const newAnimals = [...animals, "Cows", "Dophine"];
console.log(newAnimals);

// Update Pig to Elephant
let updatedAnimals;
const pigIndex = animals.indexOf("Pig");
console.log(pigIndex);
if (pigIndex !== -1) {
  updatedAnimals = [
    ...animals.slice(0, pigIndex),
    "Elephant",
    ...animals.slice(pigIndex + 1)
  ];
} else {
  throw new Error("Animal not exist in list");
}

console.log(updatedAnimals);

// Remove chicken from array
const chickenIndex = animals.indexOf("Chicken");

if (chickenIndex !== -1) {
  const removedAnimals = [
    ...animals.slice(0, chickenIndex),
    ...animals.slice(chickenIndex + 1)
  ];
  console.log(removedAnimals);
} else {
  throw new Error("Animal not exist in list");
}
