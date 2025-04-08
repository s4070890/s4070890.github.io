//function
function add(a, b) {
  let c = a + b;
  console.log(c);
  return c;
}
//define the function 數值
//let name = function name (numbers)
let total = add(2, 4);
console.log(total);

//let name = function(define)
a = 3;
b = 4;
total = add(a, b);
console.log(total);

const header = document.querySelectorAll("header");
console.log(header);
console.log(header.innerHTML);

const allpara = document.querySelectorAll("p");
console.log(allpara);
//讓東西print出來
for (let i = 0; i < allpara.length; i++) {
  console.log(allpara[i].textContent);
  allpara[i].style.border = "1px solid blue"; //+style
  allpara[i].style.backgroundColor = "begie";
}

// const 取名＝document.queryselector("在HTML裡面想要的元素第一個")
// const 取名＝document.queryselector("#id名")
// const 取名＝document.queryselectorall("在HTML裡面想要的全部")
const topheading = document.querySelector("h1");
console.log(topheading);
const subheading = document.querySelector("#first-subheading");
console.log(subheading);
const myfirstpara = document.querySelector("p");
console.log(myfirstpara);

const mybutton = document.querySelector("mybutton");
console.log(mybutton);
mybutton.addEventListener("click", handleClick);
const mycat = document.querySelector("mycat");
console.log(mycat);

mycat.addEventListener("mouseenter", addMe);
mycat.addEventListener("mouseenter", removeMe);

function addMe() {
  mycat.classList.add("round");
}

function removeMe() {
  mycat.classList.add("round");
}

function handleClick() {
  console.log("Hey did you just click me");
  mycat.classList, toggle("round");
}
