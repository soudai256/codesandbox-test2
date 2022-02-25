/**
 * const,let等の変数宣言
 */

// var val1 ="var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数は上書き可能";
// console.log(val1);

// //var変数は再宣言可能
// var val1="var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き"
// console.log(val2);

// //letは再宣言不可能
// let val2 ="let変数を再宣言";

// const val3 ="const変数";
// console.log(val3);

// //const変数は上書き不可能
// //val3 ="const変数を上書き";

// //const変数は再宣言不可能
// const val3="const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name:"きんたま",
//   age:3,
// }

// val4.name ="うんこ";
// val4.addres = "大阪"
// console.log(val4);

//constで定義した配列はプロパティの変更が可能

// const val5 = ["dog", "cat"];
// val5[0] = "rabbit";
// val5.push("bird");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "きんたま";
// const age = "3";
// //「私の名前は金玉です。年齢は3歳です。」という文字列を出したい

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
//  function func1(str) {
//    return str;
//  }
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

//アロー関数
const func2 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;
console.log(func3(10, 23));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "きんたま",
//   age: 3
// };

// const message3 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message3);

// const {name,age} = myProfile;
// const message4 =`私の名前は${name}です。年齢は${age}です`;
// console.log(message4);

// const myProfile =["きんたま","4"]

// const message5 =`名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message5);

// const [name,age] =myProfile;
// const message6 =`名前は${name}です。年齢は${age}です。`;
// console.log(message6);

/**
 * デフォルト値、引数など
 */

const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん!`);
sayHello();

/**
 * スプレッド構文　...
 */

//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2 );
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [20, 39];

const arr6 = [...arr4];
arr6[0] = 139;
console.log(arr6);
console.log(arr4);

// const arr7=[...arr4,...arr5];
// console.log(arr7);

// const arr8 =arr4;
// arr8[0] = 194;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
