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

// const myProfile = ["Name", 26];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

// /**
//  * デフォルト値
//  */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1,2]
// // console.log(arr1);
// // console.log(...arr1)

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1)

// //まとめる
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2
// console.log(num1)
// console.log(num2)
// console.log(arr3)

// //配列のコピー・結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// //スプレッド構文により、元のarr4には影響を与えない
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);
// console.log(arr6);

// const arr7 = [...arr4, ...arr5]
// console.log(arr7)

// const arr8 = arr4;
// arr8[0] = 100
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["Aさん", "Bさん", "Cさん"];
// for(let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`)
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2)

//nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`))

//filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr)

// const newNameArr = nameArr.map((name) => {
//   if (name === "Cさん") {
//     return name;
//   } else {
//     return `${name}様`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */

//条件 ? trueのとき : falseのとき
// const val1 = 1 > 2 ? 'TRUE' : 'FALSE!';
// console.log(val1)

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
// console.log(formattedNum)

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲ないです";
// };
// console.log(checkSum(50, 20));

/**
 * 論理演算子
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります")
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrueになります")
// }

// // ||左がfalseなら右を返す
// const num = 100;
// const fee = num || "金額未設定です"
// console.log(fee);

// && は左がtrueなら右を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
