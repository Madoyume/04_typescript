// 関数宣言（返り値あり）
function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}
console.log(range(5, 10));

// 関数宣言（返り値なし）
function helloWorldTimes(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log(`${i + 1}: Hello World!`);
  }
}
helloWorldTimes(5);

// 関数式
// type Human = {
//   height: number;
//   weight: number;
// };
// const calcBMI = function ({ height, weight }: Human): number {
//   return weight / height ** 2;
// };
// const me: Human = { height: 1.84, weight: 72 };
// console.log(calcBMI(me));

// アロー関数式　※推奨
// 式１つのみの省略形はコールバック関数でよく使われる
type Human = {
  height: number;
  weight: number;
};
const calcBMI = ({ height, weight }: Human): number => weight / height ** 2;
const me: Human = { height: 1.84, weight: 72 };
console.log(calcBMI(me));

type ReturnObj = {
  bmi: number;
};
const calcBMIObject = ({ height, weight }: Human): ReturnObj => ({
  // ()が無いと、{オブジェクト}とみなされreturnが無いと判定される
  bmi: weight / height ** 2,
});

// メソッド記法
const methodObj = {
  double(num: number): number {
    return num * 2;
  },
  double2: (num: number): number => num * 2,
};
console.log(methodObj.double(100));
console.log(methodObj.double2(-50));

// 可変長引数
const sum = (...args: number[]): number => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
};
console.log(sum(1, 10, 100));
console.log(sum(123, 456));
console.log(sum());

// スプレッド構文
const nums = [1, 2, 3, 4, 5];
console.log(sum(...nums));
// 配列が持つ値を、すべて順番に引数に渡す

const sum3 = (a: number, b: number, c: number) => a + b + c;
const nums2: [number, number, number] = [1, 2, 3];
console.log(sum3(...nums2));

// オプショナル引数を宣言
// const toLowerOrUpper = (str: string, upper?: boolean = false): string => {
const toLowerOrUpper = (str: string, upper: boolean = false): string => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};
console.log(toLowerOrUpper("Hello"));
console.log(toLowerOrUpper("Hello", false));
console.log(toLowerOrUpper("Hello", true));
console.log(toLowerOrUpper("Hello", undefined));

// コールバック関数
type U01 = { name: string; age: number };
const u01s: U01[] = [
  { name: "Tea", age: 29 },
  { name: "John Smith", age: 15 },
];
const names = u01s.map((u: U01): string => u.name);
console.log(names);

// 20歳以上のユーザーだけの配列
const adultUsers = users.filter((u: U01) => u.age >= 20);
console.log(adultUsers);
// すべてのユーザーが20歳以上ならtrue
const allAdult = users.every((u: U01) => u.age >= 20);
console.log(allAdult);
// 60歳以上のユーザーが1人でもいればtrue
const seniorExists = users.some((u: U01) => u.age >= 60);
console.log(seniorExists);
// 名前がJohnで始まるユーザーを探して返す
const john = users.find((u: U01) => u.name.startsWith("John"));

// 関数型
const xReport = (num: number): string => "x".repeat(num);
