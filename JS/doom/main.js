// // const title = document.getElementById("sarlavha");
// // console.log(title);
// // title.textContent = "Salom dunyo";
// // title.style.fontSize = "90px";
// // title.style.color = "red";
// // const text = document.getElementById("matn");
// // text.textContent = "My name is Bexruz";
// // text.style.fontSize = "45px";
// // const box1 = document.getElementById("box");
// // box1.style.width ="200px";
// // box1.style.height ="200px";
// // box1.style.backgroundColor ="greenYellow";
// // box1.textContent ="I can write code without ChatGPT cuz I use other AI(Just joking)";
// // const tugmacha = document.getElementById("tugma")
// // const rasm1 = document.getElementById("rasm");


// //         let yosh = prompt("Yoshingizni kiriting");

// //         if (yosh >= 18) {
// //             sarlavha.textContent = "Kirishingiz mumkin"
// //         } else sarlavha.textContent = "Mumkin emas"

// // function textRangi() {
// //   if  (sarlavha.style.color == "red"){
// //     sarlavha.style.color = "blue"
// //   }else sarlavha.textContent = "Tugma bosildi"
// // }        
// // function tugmaRangi() {
// //     tugmacha.style.backgroundColor = "Red"
// //     tugmacha.textContent = "Bosildi"
// // }

function changeText(){
  document.getElementById("heading").textContent = "Tugma bosildi";
}

function clearContent() {
  document.getElementById("paragraph").textContent = "...";
}



function makeRed() {
  document.getElementById("colorBox").style.backgroundColor = "red";
}

function shrink(){
  document.getElementById("bigBox").style.height = "100px";
}

function makeBold(){
  document.getElementById("text").style.fontWeight = "bold";
}



function hideElement(){
  document.getElementById("message").style.display = "none";
}

function resizeAndGreet(){
  document.getElementById("header").textContent = "Kattalashtirildi";
 document.getElementById("header").style.fontSize = "32px";
}

function resetCount(){
  document.getElementById("count").textContent = "0";
  document.getElementById("count").style.color = "green";
}



function changeButtonText(){
  document.getElementById("myButton").textContent = "Bosildi";
  document.getElementById("myButton").style.backgroundColor = "lime";
}

function updateAll(){
  document.getElementById("first").textContent = "Bajarildi";
  document.getElementById("second").style.color = "purple";
}


// const natija =  document.getElementById("natija");


// let son = 0;
// function add() {
//   // son++;
//   son += 1;
//   natija.textContent = son
// }
// function sub() {
//   // son++;
//   if (son > 0){
//       son--; 
//   natija.textContent = son;
//   } else {
//      son = 0;
//     natija.textContent = son;
//   }

// }
// function reset(){
//   // document.getElementById("natija").textContent = "0";
//   // son = 0;
//   son = 0;
//  natija.textContent = son;
