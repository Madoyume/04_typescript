/**
 * @name 基本的な文法、型
 * @author Taka
 * @param none
 */
class index {}

let message: string = "Hello, ";
const target: string = "world!";
console.log(message + target);

message = "Goodbye, ";
// target = ", World";
console.log(message + target);

// 2進数リテラル
const binary: number = 0b1010;
// 8進数リテラル
const octal: number = 0o755;
// 16進数リテラル
const hexadecimal: number = 0xff;

console.log(binary, octal, hexadecimal);

// 任意精度整数
const bignum: bigint = (123n + 456n) * 2n;
console.log(bignum);

const tmpstring: string = "Hello\nWorld!";
console.log(tmpstring);
console.log(`${message}`, `${target}`); // テンプレートリテラル　式埋め込み
console.log("Hello\\world!"); // エスケープシーケンス

// 真偽値
const no: boolean = false;
const yes: boolean = true;

console.log(no, yes);

// null, undifined
const val1: null = null;
const val2: undefined = undefined;

console.log(val1, val2);

// 明示的型な型変換
const num1 = Number(true);
console.log(num1);

const num2 = Number(false);
console.log(num2);

const num3 = Number(null);
console.log(num3);

const num4 = Number(undefined);
console.log(num4);

const bigint1 = BigInt("1234");
console.log(bigint1);

const bigint2 = BigInt(500);
console.log(bigint2);

const bigint3 = BigInt(true);
console.log(bigint3);
