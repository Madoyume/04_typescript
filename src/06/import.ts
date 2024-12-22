import { myName, myAge } from "./export.js";
import { getMyName } from "./export.js";
import name from "./export.js";

import increment, { value } from "./counter.js";

import { tama, Animal } from "./export.js";

console.log(myName, myAge);
console.log(`私の名前は${myName}です。年齢は${myAge}です。`);

console.log(getMyName());

console.log(`私の年齢は${name}です。`);

for (let i = 0; i < 5; i++) {
  increment();
}

console.log(`カウンタの数字は${value}です。`);

const dog: Animal = {
  species: "Canis lupus familiaris",
  age: 2,
};

console.log(tama, dog);

const myCat: typeof tama = {
  species: "Felis silvestris catus",
  age: 0,
};

const yourCat: Animal = { ...tama };
