import { readFile } from "fs/promises";

// readFile("./public/foo.txt", "utf8")
//   .catch(() => "")
//   .then((result) => {
//     console.log(result);
//   })
//   .finally(() => {
//     console.log("foo.txt is loaded?");
//   });

const repeat10 = (str: string) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(str.repeat(10));
    }, 1000);
  });
};

readFile("./public/foo.txt", "utf8")
  .then((result) => {
    return repeat10(result);
  })
  .then((result) => {
    console.log(result);
  });
