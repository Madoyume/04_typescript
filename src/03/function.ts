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
