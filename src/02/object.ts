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

input.question("文字列を入力してください：", (line: string) => {
  const name = line ? line : "名無し";
  const user = {
    name,
    age: 20,
  };
  console.log(`${user.name} : ${user.age}`);
  input.close();
});
