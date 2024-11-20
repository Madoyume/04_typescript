import { createInterface, Interface } from "readline";

const input: Interface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const obj = {
  foo: 123,
  bar: "string",
};
console.log(obj.foo + obj.bar);

// input.question("文字列を入力してください：", (line: string) => {
//   const name = line ? line : "名無し";
//   const user = {
//     name,
//     age: 20,
//   };
//   console.log(`${user.name} : ${user.age}`);
//   input.close();
// });

const message = {
  good: "0以上の数値が入力されました！",
  bad: "負の数値を入力しないでください！",
};

// input.question("文字列を入力してください：", (line: string) => {
//   const num = Number(line);
//   console.log(message[num >= 0 ? "good" : "bad"]);
//   input.close();
// });

input.close();

// スプレッド構文
const obj1 = {
  bar: 456,
  baz: 789,
};
const obj2 = {
  foo: 123,
  ...obj1,
};

// obj2は {foo:123, bar: 456, baz: 789}
console.log(obj2.foo);

// const foo = { num: 1234 };
// const bar = foo;
// console.log(bar.num); // 1234表示
// bar.num = 0;
// console.log(foo.num); // 0表示

const foo = { num: 1234 };
const bar = foo;
const baz = { num: 1234 };
// baz.num = "aaa";

console.log(foo === bar); // true
console.log(foo === baz); // false

const obj4: {
  foo: number;
  bar: string;
} = {
  foo: 123,
  bar: "Hello, world!",
};
console.log(obj4);
// obj4.bar = null; コンパイルエラー

// type文
type FooBarObj = {
  foo: number;
  bar: string;
};
const obj5: FooBarObj = {
  foo: 123,
  bar: "Hello, World!",
};
console.log(obj5);

// interface宣言
interface FooBarInterface {
  foo: number;
  bar: string;
}
const obj6: FooBarInterface = {
  foo: 0,
  bar: "string",
};

// インデックスシグネチャ ※非推奨
type PriceData = {
  [key: string]: number;
};
const data: PriceData = {
  apple: 220,
  coffee: 120,
  bento: 500,
};
data.chicken = 250; // OK
// data.弁当 = "foo";

// オプショナルプロパティ
// あってもなくてもいいプロパティ
type MyObj = {
  foo: boolean;
  bar: boolean;
  baz?: number;
};
const obj7: MyObj = { foo: false, bar: true };
const obj8: MyObj = { foo: true, bar: false, baz: 1234 };

// 読み取り専用
type MyObj2 = {
  readonly foo: number;
};
const obj9: MyObj2 = { foo: 123 };
// obj9.foo = 0;

// typeofキーワード 型推論
const num: number = 0;
// type Tはnumber型
type T = typeof num;
// fooはnumber型の変数となる
const U: T = 123;

const Obj11 = {
  foo: 123,
  bar: true,
};

type R = typeof Obj11;
const obj10: R = {
  foo: 333,
  bar: true,
};
