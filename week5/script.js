// Use // to comment
//定義; console.log, if else,for迴圈
//like print(""")in Python
console.log("Hello");
console.log("How are you buddy?");

// let id名＝"ABC";
let myName = "Rohit"; //用let定義東西方便後面召用
console.log("Hello", myName);
myName = "sara";
console.log("Hello", myName);
let student = "s4070890";
console.log("Hello", student);

let no = 10; //數字不用加“”
console.log("Hello", no);

// let id名「方便後續print時有共同代號可以召出不同答案」＝prompt[可以自填key」("question")
let myCity = prompt("Where do you live?");
console.log("I live in", myCity); //網頁顯示問題回答後主控台有答案

//{}這種括號表示式子謹在此內部運作
{
  let a = 10;
  let b = parseInt("20"); //parseInt 會把字串裡的數字轉成數值
  console.log(a, b);
  let c = a - b;
  console.log(c);
}

//string variables=any text in"""
const myNames = "Rohit";
console.log(myNames);
const myCitys = "Melbourne";
//可以直接沿用<h1>or<p>...來製造print的效果 但若要插入id值-${id名稱}
//有要print的東西超過一行要用``包起來
const msg = `
<h1>I live in ${myCitys}</h1> 
<p>I love this city</p>`;

//boolem variable = TRUE FALSE
let isThisSunady = false;
let isItAfternoon = true;

//一個大資料裡包含子項只有文字有"“ {裡面任意定義}
const myStudentRecord = {
  name: "Sam",
  id: 1234,
  course: "OART1013",
  islocal: false,
};
//可以選擇print完整或單子項
console.log(myStudentRecord);
console.log(myStudentRecord.course);

//定義多子項met同name 用逗號隔開
let sNames = ["Rohit", "Jim", "Sara", "Alice"];

//類似於for迴圈 for (let i = 0表示從頭開始; i < 母項名.length確保運轉; i++向上遞加) {
for (let i = 0; i < sNames.length; i++) console.log("Hello", sNames[i]);

//arrays
let numbers = [2, 4, 6, 8, 10];
console.log(numbers[3]); //數字從0開始算呦

//like python if else console.log=print

//keep using if else no elif bc from top to buttom work remeber to give final work

let grade = 72;
if (grade > 70) {
  console.log("Yey you got HD");
} else {
  console.log("Sorry you just pass the course");
}

// Always use three === to make sure they are extraly same including format
let weather = "sunny";
if (weather === "sunny") {
  console.log("What a nice pleasent sunny weather");
} else {
  console.log("Sad is rainy");
}
