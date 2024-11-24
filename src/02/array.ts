const arr = [0, 123, -456 * 100];
console.log(arr);

// スプレッド構文も可
const arr1 = [4, 5, 6];
const arr2 = [1, 2, 3, ...arr1];
console.log(arr2);

console.log(arr1[0]);
arr[1] = 5400;
console.log(arr);

// 配列の型指定
const arr3: number[] = [1, 10, 100];
// const arr4: string[] = [1, 10, 100];

const arr5: boolean[] = [true, false];
const arr6: Array<{
  name: string;
}> = [{ name: "山田さん" }, { name: "田中さん" }, { name: "鈴木さん" }];

// readonly
const arr7: readonly number[] = [1, 10, 100];
// arr7[1] = 10;

// pushメソッド　要素の追加　※頻出
const arr8 = [1, 10, 100];
arr.push(1000);
console.log(arr8);

// arr.push("foobar");

// includesメソッド　値の存在判定　※頻出
const arr9 = [1, 10, 100];
console.log(arr9.includes(100));
console.log(arr9.includes(5));

// for-of文で配列ループ
const arr10 = [1, 10, 100];
for (const elm of arr10) {
  console.log(elm);
}

// タプル
let tuple: [string, number] = ["foo", 0];
tuple = ["aiueo", -555];

const str = tuple[0];
const num = tuple[1];
// const nothing = tuple[2];
