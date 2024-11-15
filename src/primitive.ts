import { createInterface, Interface } from "readline";

const r1: Interface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("文字列を入力してください：", (line: string) => {
  const result: string = line + 1000;
  // 文字列が入力されるとここが実行される
  // console.log(`${line}が入力されました`);
  console.log(result);
  r1.close();
});
