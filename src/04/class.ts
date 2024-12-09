// class宣言とnew初期化
// フィールドとメソッドを定義できる
// オプショナルプロパティも可
// アクセス修飾子は3種 public protected private
class UserProfile<T> {
  // クラスも式なのでクラス式の作成が可能、あんま使わない
  // const UserProfile = class {
  // static adminUser: string = "Aaaa";
  // static getAdminUser() {
  //   return new UserProfile(UserProfile.adminUser, 30);
  // }

  name: string = "";
  // private age: number = 0;
  protected age: number = 0;
  readonly data: T;
  // 読み取り専用フィールドにもコンストラクタからのみアクセス可
  // readonly age: number = 0;

  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.age = age;
    this.data = data;
  }
  // コンストラクタの省略記法
  // 引数にアクセス修飾子を付けるとプロパティ化
  // constructor(public name: string, private age: number) {}

  isAdult(): boolean {
    return this.age >= 20;
  }

  setAge(newAge: number): void {
    this.age = newAge;
  }
  getAge(): number {
    return this.age;
  }
  public filterOlder(users: readonly UserProfile<T>[]): UserProfile<T>[] {
    return users.filter((u) => u.age > this.age);
  }
}
const Taka: UserProfile<string> = new UserProfile("Taka", 30, "追加データ");
console.log(Taka.isAdult());
// Taka.age = 19;
const dt = Taka.data;

// console.log(UserProfile.adminUser);
// const admin = UserProfile.getAdminUser();
// console.log(admin.age, admin.name);

// newシグネチャでインスタンス型表現
class UserTest {
  name: string = "";
  age: number = 0;
}
// type MyUserConstructor = new () => UserTest;
type MyUserConstructor = {
  new (): UserTest;
};
const MyUser: MyUserConstructor = UserTest;
const u = new MyUser();
console.log(u.name, u.age);

// instanceof演算子で型絞り込み
const uhyo = new UserTest();
// uhyoはUserTestのインスタンス
console.log(uhyo instanceof UserTest);
console.log({} instanceof UserTest);

const John: UserTest = {
  name: "John Smith",
  age: 15,
};
// JohnはUserTestのインスタンスではない
console.log(John instanceof UserTest);

// 継承
class PremiumUser<T> extends UserProfile<T> implements HasNameProperty {
  rank: number = 1;
  constructor(name: string, age: number, data: T, rank: number) {
    super(name, age, data);
    this.rank = rank;
  }
  // noImplicitOverrideを有効にすれば、override修飾子が無い場合エラーに出来る
  public override isAdult(): boolean {
    return true;
  }
}
const user1 = new PremiumUser("uhyo", 26, "a", 2);
const user2 = new UserProfile("aaa", 15, "test");

console.log(user1.isAdult());
console.log(user2.isAdult());

type HasNameProperty = {
  name: string;
};

const user3 = new UserProfile("uhyo", 26, "test");
const user4 = new UserProfile("john", 15, "test");
const user5 = new UserProfile("bob", 40, "test");

const older = user3.filterOlder([user3, user5]);
console.log(older);
