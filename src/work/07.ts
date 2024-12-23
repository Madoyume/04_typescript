import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const filePath = fileURLToPath(import.meta.url);
const fileDir = path.dirname(filePath);
const dataFile = path.join(fileDir, "../../public", "name.txt");

const data: string = readFileSync(dataFile, "utf-8");

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
