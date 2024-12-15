import { sign } from "crypto";

type FooString = "foo";
// 文字列のリテラル型
const f1: FooString = "foo";
// エラー
// const f2: FooString = "bar";

// 数値のリテラル型
const one: 1 = 1;
// 真偽値のリテラル型
const t: true = true;
// BigIntのリテラル型
const three: 3n = 3n;

// テンプレートリテラル型
function getHelloStr(): `Hello, ${string}!` {
  const rand = Math.random();
  if (rand < 0.3) {
    return "Hello, World!";
  } else if (rand < 0.6) {
    return "Hello, my world!";
    // } else if (rand < 0.9) {
    //   return "Hello, world.";
  } else {
    return "Hello, world!";
  }
}

function makeKey<T extends string>(userName: T) {
  return `user:${userName}` as const;
}
const takaKey: "user:taka" = makeKey("taka");

function fromKey<T extends string>(key: `user:${T}`): T {
  return key.slice(5) as T;
}
const tkKey = fromKey("user:taka");

function signNumber(type: "plus" | "minus") {
  return type === "plus" ? 1 : -1;
}
console.log(signNumber("plus")); // 1と表示される
console.log(signNumber("minus")); // -1と表示される
// console.log(signNumber("taka"); // エラー

// リテラル型のwidening
const taka1 = "taka"; // "taka"型
let taka2 = "taka"; //　string型

// 型の絞り込み
type SignType = "plus" | "minus";
function signNumber1(type: SignType) {
  return type === "plus" ? 1 : -1;
}
function numberWithSign(num: number, type: SignType | "none") {
  if (type === "none") {
    return 0;
  } else {
    // typeから"none"型が排除されている
    return num * signNumber1(type);
  }
}
console.log(numberWithSign(5, "plus"));
console.log(numberWithSign(5, "minus"));
console.log(numberWithSign(5, "none"));

function numberWithSign2(num: number, type: SignType | "none") {
  if (type === "none") {
    return 0;
  }
  return num * signNumber1(type);
}
function numberWithSign3(num: number, type: SignType | "none") {
  return type === "none" ? 0 : num * signNumber1(type);
}
console.log(numberWithSign2(5, "plus"));
console.log(numberWithSign3(5, "minus"));
