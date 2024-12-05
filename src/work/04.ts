const getFizzBuzzString = (a: number): string => {
  let result: string = "";

  if (a % 3 === 0 && a % 5 === 0) {
    result = "FizzBuzz";
  } else if (a % 3 === 0) {
    result = "Fizz";
  } else if (a % 5 === 0) {
    result = "Buzz";
  } else {
    result = String(a);
  }
  return result;
};

const sequence = (first: number, last: number): number[] => {
  const result: number[] = [];
  for (let i = first; i <= last; i++) {
    result.push(i);
  }
  return result;
};

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}

function mapA<T, U>(array: T[], callback: (value: T) => U): U[] {
  const resultB: U[] = [];
  for (const elm of array) {
    resultB.push(callback(elm));
  }
  return resultB;
}
const dataCallback = [1, 1, 3, 5, 8, 13];
const resultCallback = mapA(dataCallback, (x) => x * 10);
