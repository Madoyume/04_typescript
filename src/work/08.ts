import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "../../public", "name.txt");

sleep(1).then(() => {
  process.exit();
});

const data: string = await readFile(dataFile, "utf-8");

let count = 0;
let currentIndex = 0;

while (true) {
  const nextIndex = data.indexOf("uhyo", currentIndex);
  if (nextIndex >= 0) {
    count++;
    currentIndex = nextIndex + 1;
  } else {
    break;
  }
}
console.log(count);
