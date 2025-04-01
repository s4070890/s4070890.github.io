console.log("Hello");
console.log("How are you buddy?");
// Use // to comment

let myName = "Rohit";
console.log("Hello", myName);
myName = "sara";
console.log("Hello", myName);
let no = 10;
console.log("Hello", no); //數字不用加“”
let student = "s4070890";
console.log("Hello", student);

let myCity = prompt("Where do you live?");
console.log("I live in", myCity); //網頁顯示問題回答後主控台有答案

{
  let a = 10;
  let b = parseInt("20");
  console.log(a, b);
  let c = a - b;
  console.log(c);
}

//string variables
const myNames = "Rohit";
console.log(myNames);
const myCitys = "Melbourne";
const msg = `
<h1>I live in ${myCitys}</h1>
<p>I love this city</p>`;

//boolem variable TRUE FALSE
let isThisSunady = false;
let isItAfternoon = true;

//objects
const myStudentRecord = {
  name: "Sam",
  id: 1234,
  course: "OART1013",
  islocal: false,
};
console.log(myStudentRecord);
console.log(myStudentRecord.course);

let sNames = ["Rohit", "Jim", "Sara", "Alice"];
// console.log("hello",sNames[0]);
// console.log("hello",sNames[1]);
// console.log("hello",sNames[2]);
// console.log("hello",sNames[3]);
for (let i = 0; i < sNames.length; i++) {
  console.log("Hello", sNames[i]);
 
let numbers = [2, 4, 6, 8, 10];
console.log(numbers[3]);

//like python if else console.log=print
// Always use three=== to make sure they are extraly same including format

//keep using if else no elif bc from top to buttom work remeber to give final work

let grade = 72;
if (grade > 70) {
  console.log("Yey you got HD");
} else {
  console.log("Sorry you just pass the course");
}

let weather = "sunny";
if (weather === "sunny") {
  console.log("What a nice pleasent sunny weather");
} else {
  console.log("Sad is rainy");
}
