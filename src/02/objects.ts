// Dateオブジェクト
const d = new Date();
console.log(d);

const d1 = new Date("2020-02-03T15:00:00+09:00");
console.log(d1);
const timeNum = d1.getTime();
console.log(timeNum);
const d2 = new Date(timeNum);
console.log(d2);

// 正規表現オブジェクト
const r: RegExp = /ab+c/;
console.log(r.test("abbbbbc"));
console.log(r.test("Hello, abc world!"));
console.log(r.test("ABC"));
console.log(r.test("こんにちは！"));

// Map・Setオブジェクト
const map: Map<string, number> = new Map();
map.set("foo", 1234);

console.log(map.get("foo"));
console.log(map.get("bar"));
