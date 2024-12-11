type AnimalType = {
  species: string;
  age: string;
};
type HumanType = {
  name: string;
  age: number;
};
type UsersType = AnimalType | HumanType;

const tama: UsersType = {
  species: "Felis silvestris catus",
  age: "永遠の17歳",
};
const james: UsersType = {
  name: "james",
  age: 26,
};
function getName(user: UserType): string {
  return user.name;
}
// エラーになる
// console.log(getName(tama));

function showAge(user: UsersType): void {
  const age = user.age;
  console.log(age);
}
showAge(tama);
showAge(james);

// インターセクション型 intersection type
type theHumanType = AnimalType & {
  name: string;
};
const poti: AnimalType = {
  species: "Felis silvestris catus",
  age: "3",
};
const jamie: theHumanType = {
  species: "Homo sapiens sapiens",
  age: "30",
  name: "jamie",
};
// 異なるプリミティブ型はnever型になる
// 属する値が存在しない
type StringAndNumber = string & number;
// const san: StringAndNumber = 0;

type HumansType = {
  name: string;
  age?: number;
  // age: number | undefined;
};
type AnimalsType = {
  species: string;
};

function getNameHuman(human: HumansType): string {
  return human.name;
}
function getSpeciesAnimal(animal: AnimalsType): string {
  return animal.species;
}
const mysteryFunc = Math.random() < 0.5 ? getNameHuman : getSpeciesAnimal;
const michel: HumansType & AnimalsType = {
  name: "michel",
  species: "Homo sapiens sapiens",
  // age: undefined,
};
const val = mysteryFunc(michel);
console.log(val);

// オプショナルチェイニング optional chaining
function useMaybeHuman(human: HumanType | undefined) {
  const age = human?.age;
  console.log(age);
}
// 関数呼び出しでも可
type GetTimeFunc = () => Date;
function useTime(getTimeFunc: GetTimeFunc | undefined) {
  const TimeOrUndifined = getTimeFunc?.().toString();
}
