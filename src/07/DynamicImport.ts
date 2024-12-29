import("fs/promises")
  .then(({ readFile }) => {
    return readFile("./public/foo.txt", "utf8");
  })
  .then((result) => {
    console.log(result);
  });
