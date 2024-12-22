// 型アサーションによる型安全性の破壊
function getFirstFiveLetters(strOrNum: string | number) {
  const str = strOrNum as string;
  return str.slice(0, 5);
}
console.log(getFirstFiveLetters("uhyohyohyo"));
// console.log(getFirstFiveLetters(123));

// 正しいユースケース
type Animals = {
  tag: "animal";
  species: string;
};
type Humans = {
  tag: "human";
  name: string;
};
type Users = Animals | Humans;

function getNamesIfAllHuman(users: readonly Users[]): string[] | undefined {
  if (users.every((user) => user.tag === "human")) {
    return (users as Humans[]).map((user) => user.name);
  }
  return undefined;
}

// as const
// string[]
const names1 = ["uhyo", "John", "Taro"];
// readonly ["uhyo", "John", "Taro"]
const names2 = ["uhyo", "John", "Taro"] as const;
type Name = (typeof names2)[number];

// unknown型 ※anyより安全
function doNothing(val: unknown) {
  console.log(val);
}
doNothing(10);
doNothing({
  user: {
    name: "uhyo",
  },
});
doNothing(() => {
  console.log("hi");
});
