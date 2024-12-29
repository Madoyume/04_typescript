import { readFile } from "fs/promises";

// console.log("1.読み込みを開始します。");
// readFile("file.txt", (data) => {
//   console.log("3.読み込みが完了しました。");
// });
// console.log("2.読み込み中です。");

// setTimeout(() => {
//   console.log("タイマーが呼び出されました。", 3000);
// });
// console.log("タイマーを設定しました。");

const p = readFile("./public/foo.txt", "utf8");

p.then((data) => {
  console.log("成功", data);
}),
  (error: unknown) => {
    console.error("失敗", error);
  };

const p1 = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(100);
  }, 3000);
});

p1.then((num) => {
  console.log(`結果は${num}です`);
});

const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

sleep(3000).then(() => {
  console.log("3秒経過しました。");
});

// const pFoo = readFile("./public/foo.txt", "utf8");
// const pBar = readFile("./public/bar.txt", "utf8");
// const pBaz = readFile("./public/baz.txt", "utf8");

// const p2 = Promise.all([pFoo, pBar, pBaz]);
const p2 = Promise.allSettled([
  readFile("./public/foo.txt", "utf8"),
  readFile("./public/bar.txt", "utf8"),
  readFile("./public/baz.txt", "utf8"),
]);

p2.then((results) => {
  console.log("foo.txt", results[0]);
  console.log("bar.txt", results[1]);
  console.log("baz.txt", results[2]);
});

const sleepReject = (duration: number) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(reject, duration);
  });
};

const p3 = Promise.allSettled([
  readFile("./public/foo.txt", "utf8"),
  sleepReject(5000),
]);

p3.then((result) => {
  console.log(result);
});
