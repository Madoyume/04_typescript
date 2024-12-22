// export const name = "taka";
// export const age = 26;
const name: string = "taka";
const age: number = 29;

export { name as myName, age as myAge };

export const getMyName = (): string => {
  return name;
};

export default 26;

type Animal = {
  species: string;
  age: number;
};
const tama: Animal = {
  species: "Felis silvestris catus",
  age: 1,
};
export { Animal, tama };
