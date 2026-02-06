// if conditional ("if" shartli operatori)
// if (Agar)
// if else (Agar masa)

//if (shart) {
//shart bajarilsa ishlovchi kod 
//}

// let yosh = 6;

// if (yosh>6) {
//     console.log("Sizga uchish mumkin!")
// } else{
//     console.log("Sizga uchish mumkin emas.");
    
// }


// let yosh = prompt("Yoshingiz")

// if (yosh>6) {
//     console.log("Sizga uchish mumkin!")
// } else{
//     console.log("Sizga uchish mumkin emas.");
    
// }

// let yosh = prompt("Yoshingiz")
// let hasFear = confirm("Sizda balandlikka nisbatan fobia yo'qmi?")
// if (yosh>6 && hasFear === true) {
//     console.log("Sizga uchish mumkin!")
// } else{
//     console.log("Sizga uchish tavsiya etilmaydi.");
    
// }


// let yosh = prompt("Yoshingiz nechida?");

// if (yosh>0 && yosh<=3){
//     console.log(" Kirish tekin");
// }
// else if (yosh>3 && yosh<=5){
//     console.log("Kirish 3000");
    
// } else if( yosh >5 && yosh <= 10){
//     console.log("Kirish 4500");
    
// } else if ( yosh>10 && yosh <= 17){
//     console.log("Kirish 6000");
    
// } else if ( yosh>17 ){
//     console.log("Kirish 15000");
    
// }

// let pul = true;
// let bilm = false;
// let yosh = 19;

// if (yosh >=18 && bilm === true && pul === true){
//     console.log("Sizga prava bor");   
// }  else if (yosh>= 18 || pul === true){
//     console.log("Franklin bobo omon bo'lsin");
    
// }

// let yosh = prompt("Yoshingiz:") 

// if ( yosh >=18 && yosh <= 70 ){
//     console.log("Kirishingiz mumkin.");
// } else if ( yosh <18 ){
//     console.log("Kichik ekansiz.");
    
// } else if(yosh>70){
// console.log("Katta ekansiz.");
// } else if (yosh>100){
//     console.log("Mumkin emas.");
// } else {
//     console.log("Noto'g'ri");
// }

let son1 = Number(prompt("1-sonni kiriting:"))
let son2 = Number(prompt("2-sonni kiriting"))
let amal = prompt("Arifmetik operator kiriting(Masalan: +, -, *, /")

if (  amal === "+"){
    console.log(son1+son2)
}   else if (amal === "-"){
    console.log(son1-son2);   
}   else if (amal === "*"){
    console.log(son1*son2);
}   else if (amal === "/"){
    console.log(son1/son2);   
} else{
    console.log("Noto'g'ri");
    
}
