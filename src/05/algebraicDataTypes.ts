// 代数的データ型（algeraic data Types）
// タグ付きユニオン型、直和型
type Food = {
  tag: "Foods";
  spacies: string;
};
type Pasta = {
  tag: "Pasta";
  name: string;
};
type Foods = Food | Pasta;

const Ramen: Foods = {
  tag: "Foods",
  spacies: "Ramen",
};
const napoli: Foods = {
  tag: "Pasta",
  name: "Napoli",
};

// alienはタグプロパティに無いためエラー
// const alien: Foods = {
//   tag: "alien",
//   name: "alien",
// };

function getFoodName(food: Foods) {
  if (food.tag === "Pasta") {
    // foodはPasta型
    return food.name;
  } else {
    // foodはFood型
    return "名無し";
  }
}
console.log(getFoodName(Ramen)); // 名無しと表示
console.log(getFoodName(napoli)); // "Napoli"と表示

// loolup型 T[K]
type Ningen = {
  type: "human";
  name: string;
  age: number;
};
function setAge(human: Ningen, age: Ningen["age"]) {
  return {
    ...human,
    age,
  };
}
const uhyo1: Ningen = {
  type: "human",
  name: "uhyo",
  age: 26,
};
const uhyo2 = setAge(uhyo1, 27);
console.log(uhyo2);

// keyof型
type PastaKeys = keyof Pasta;
let key: PastaKeys = "name";
key = "tag";
// Pastaオブジェクトのプロパティに無いためエラー
// key = "hoge";

const mmConversionTable = {
  mm: 1,
  m: 1e3,
  km: 1e6,
};
function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
  const mmValue = value * mmConversionTable[unit];
  return {
    mm: mmValue,
    m: mmValue / 1e3,
    km: mmValue / 1e6,
  };
}
console.log(convertUnits(5600, "m"));
