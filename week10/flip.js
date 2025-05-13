const card = document.querySelector(".card");
console.log(card);

//card flip by hover
// card.addEventListener("mousenter", flipMe);
//   function flipMe(){
//     card.classList.add("flip");
//   }

// card.addEventListener("mousenter", flipBack);
//   function flipBack(){
//     card.classList.remove("flip");
//   }

card.addEventListener("click", function () {
  card.classList.toggle("flip");
});
