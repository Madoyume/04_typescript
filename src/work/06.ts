type Option<T> =
  | {
      tag: "some";
      value: T;
    }
  | {
      tag: "none";
    };

function showNumberIfExists(obj: Option<number>): void {
  // if (obj.tag === "some") {
  //   console.log(obj.value);
  // }
  if (isSome(obj)) {
    console.log(obj.value);
  }
}

const four: Option<number> = {
  tag: "some",
  value: 4,
};
const nothing: Option<number> = {
  tag: "none",
};
showNumberIfExists(four);
showNumberIfExists(nothing);

function isSome<T>(obj: Option<T>): obj is { tag: "some"; value: T } {
  return obj.tag === "some";
}

function doubleOption(obj: Option<number>) {
  return mapOption(obj, (x) => x * 2);
}
console.log(doubleOption(four));
console.log(doubleOption(nothing));

function mapOption<T, U>(obj: Option<T>, callback: (value: T) => U): Option<U> {
  switch (obj.tag) {
    case "some":
      return {
        tag: "some",
        value: callback(obj.value),
      };
    case "none":
      return {
        tag: "none",
      };
  }
}
