// 分割代入
const da = {
  foo: 1,
  bar: "str",
};
const { foo, bar } = da;
console.log(foo);

// オブジェクトのネスト
const nested = {
  n1: 123,
  obj: {
    n2: "hello",
    n3: "world",
  },
};
const {
  n1,
  obj: { n2 },
} = nested;

// 配列も分割代入可能
const da1: number[] = [1, 2, 4, 8, 16, 32];
const [first, second, third] = da1;
console.log(first);
console.log(second);
console.log(third);

// 分割代入のデフォルト値
type Obj = { f?: number };
const o1: Obj = {};
const o2: Obj = { f: -1234 };

const { f = 500 } = o1;
console.log(f);
const { f: b = 500 } = o2;
console.log(b);

type NestedObj = {
  o?: {
    f1: number;
  };
};
const nested1: NestedObj = {
  o: { f1: 123 },
};
const nested2: NestedObj = {};
console.log(nested1);
console.log(nested2);

const { o: { f1: fooo } = { f1: 500 } } = nested1;
const { o: { f1: baar } = { f1: 500 } } = nested2;
console.log(fooo);
console.log(baar);

// restパターンでオブジェクトの残りを取得
const rest = {
  r1: 123,
  r2: "string",
  r3: false,
};
const { r1, ...restObj } = rest;
console.log(r1); // 123
console.log(restObj); // { r2: 'string', r3: false }
