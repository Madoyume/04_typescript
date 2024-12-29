// async function get3(): Promise<number> {
//   console.log("get3は開始されていますか？");
//   return 3;
// }

// console.log("get3を呼び出します。");
// const p = get3();
// p.then((num) => {
//   console.log(`num is ${num}`);
// });
// console.log("get3を呼び出しました。");

const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

async function get3() {
  await sleep(1000);
  return 3;
}

const p = get3();
p.then((num) => {
  console.log(`num is ${num}`);
});
