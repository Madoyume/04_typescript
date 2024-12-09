type UserType = {
  name: string;
  age: number;
};

class UserClass {
  private readonly name: string = "";
  private readonly age: number = 0;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  createUser(name: string, age: number): UserType {
    if (name === "") {
      throw new Error("名前は空にできません！");
    }
    return {
      name,
      age,
    };
  }

  getMessage(message: string): string {
    return `${this.name} (${this.age}) 「${message}」`;
  }
}

const cname = new UserClass("Taka", 30);
console.log(cname.getMessage("こんにちは"));
