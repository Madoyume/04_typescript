// 部分型関係 subtyping relation
type FooBar = {
  foo: string;
  bar: number;
};
type FooBarBaz = {
  foo: string;
  bar: number;
  baz: boolean;
};
const obj: FooBarBaz = {
  foo: "hi",
  bar: 1,
  baz: false,
};
const obj2: FooBar = obj;
// const obj3: FooBarBaz = obj2;

// プロパティの包含関係
type Animal = {
  age: number;
};
type Human = {
  age: number;
  name: string;
};
type AnimalFamily = {
  familyName: string;
  mother: Animal;
  father: Animal;
  child: Animal;
};
type HumanFamily = {
  familyName: string;
  mother: Human;
  father: Human;
  child: Human;
};

// 余剰プロパティの型エラー
// type User = { name: string; age: number };
// const u: User = {
//   name: "T",
//   age: 29,
//   // telnumber: "09012345678",
// };
// const u2 = {
//   name: "K",
//   age: 29,
//   telnumber: "09012345678",
// };
// const u3: User = u2;
