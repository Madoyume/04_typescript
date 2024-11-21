// 型引数を持つ型の宣言
// A1, A2はジェネリック型
type A1<T> = {
  name: string;
  child: T;
};

type A2<Parent, Child> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

const A3: A2<number, string> = {
  mother: 0,
  father: 100,
  child: "1000",
};

// 部分型関係による型引数の制約
type HasName = {
  name: string;
};
type Family<Parent extends HasName, Child extends HasName> = {
  mother: Parent;
  father: Parent;
  child: Child;
};
// type T = Family<number, string>; エラー
type A4 = {
  name: string;
};
type A5 = {
  name: string;
  age: number;
};
type T = Family<A4, A5>;

// オプショナルな型引数
type A6 = {
  name: string;
};
type A7<Parent = A6, Child = A6> = {
  mother: Parent;
  father: Parent;
  child: Child;
};
type S = A7<string, string>;
type I = A7;
type U = A7<string>;
