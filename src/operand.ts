import { createInterface } from "readline";

const addResult = 1024 + 314 + 500;
console.log(addResult);
const discounted = addResult * 0.7;
console.log(discounted);

const sqrt2 = 2 ** 0.5;
console.log(sqrt2);
console.log(sqrt2 - 1);

console.log(18 / 12);
console.log(18n / 12n);
console.log(18 % 12);
console.log(18n % 12n);

// const r1 = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// r1.question("名前を入力してください：", (name) => {
//   // console.log("こんにちは、" + name + "さん");
//   console.log(`こんにちは、${name}さん`);
//   r1.close();
// });

// const r2 = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// r2.question("パスワードを入力してください：", (password) => {
//   if (password === "hogehoge") {
//     console.log("ようこそ！");
//   } else {
//     console.log("誰？");
//   }
//   r2.close();
// });

// 環境変数SECRETを取得。存在しなければdefaultを用いる
const secret = process.env.SECRET ?? "default";
console.log(`secretは${secret}です`);
