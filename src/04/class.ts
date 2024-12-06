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
  private age: number = 0;
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
}
const Taka = new UserProfile<string>("Taka", 30, "追加データ");
console.log(Taka.isAdult());
// Taka.age = 19;
const dt = Taka.data;

// console.log(UserProfile.adminUser);
// const admin = UserProfile.getAdminUser();
// console.log(admin.age, admin.name);
