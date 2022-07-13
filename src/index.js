/**
 * コメントアウト const let
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "上書き";
// console.log(val1);

// // 再宣言
// var val1 = "再宣言！";
// console.log(val1)

// let val2 = "let変数"
// console.log(val2)

// //letは上書き可能
// val2 = "let上書き"
// console.log(val2)

// //letは再宣言不可
// let val2 = "let再宣言"

// const val3 = "const変数"
// console.log(val3)

// //val3 = "上書き"

// const val3 = "再定義"

// const val4 = {
//   name: "NAME",
//   age: "secret"
// };
// val4.name = "yeeees"
// val4.address = "Japan"
// console.log(val4)

// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5)

// //テンプレート文字列

// const name = "testname";
// const age = "25";

// //従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //テンプレートを用いる
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来
//  function func1(str) {
//    return str;
//  }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("FUNK1"));

// const funk2 = (str) => str;
// console.log(funk2("funk2です"));

// const funk3 = (num1, num2) => num1 + num2;
// console.log(funk3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "MYNAME",
//   age: 50
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`
// console.log(message1)

// const { name, age } = myProfile
// const message2 = `名前は${name}です。年齢は${age}です`
// console.log(message2)

const myProfile = ["Name", 26];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}です`;
console.log(message4);
