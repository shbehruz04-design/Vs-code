// let raqam = +prompt("Kunni kiriting")

// switch (raqam) {
//     case 1:
//         console.log("Bugun dushanba");
//         break;

//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//         break;
// }

// // let word = prompt("Meva nomini kiriting").toLocaleLowerCase();
// // switch (word) {
// //     case "apple":
// //         console.log("Tarjimasi: Olma");
// //         break;

// //     case "Pomegranate":
// //         console.log("Tarjimasi: Anor");
// //         break;
// //     case "Orange":
// //         console.log("Tarjimasi: Apelsin");
// //         break;

// //     case "Banana":
// //         console.log("Tarjimasi: Banan");
// //         break;
// //     default :
// //     console.log("Bunday meva yo'q");

// // }
// // let color = prompt("Rangni kiriting:").toLowerCase();

// // switch (color) {
// //     case "blue":
// //         console.log("Tarjimasi: Ko'k");
// //         break;
// //     case "yellov":
// //         console.log("Tarjimasi: Sariq");
// //         break;
// //     case "black":
// //         console.log("Tarjimasi: Qora");
// //         break;
// //     default:
// //         console.log("Bunday rang ba'zada yo'q");
// //         break;
// // }


let yosh = prompt("Yoshingizni kiriting:")
if (Number(yosh) >= 18) {
    console.log("Kirish mumkin");
} else {
    console.log("Kirish taqiqlanadi");
}

let son = prompt("Sonni kiriting")
if (Number(son) % 2 === 0) {
    console.log("Juft");
} else {
    console.log("Toq");
}
let son2 = prompt("Sonni kiriting")

if (Number(son2) > 0) {
    console.log("Musbat");
} else if (son2 < 0) {
    console.log("Manfiy")
} else {
    console.log("Nol");

}

let havo = prompt("Havo haroratini kiriting")
if (havo < 0) {
    console.log("Juda sovuq, issiqroq kiyining");
} else if (havo > 0 && havo < 20) {
    console.log("Salqin");
} else {
    console.log("Iliq");
}
let parol = prompt("Parolni kiriting").toLowerCase();
if (parol == "secret") {
    console.log("Xush kelibsiz");
} else {
    console.log("Noto'g'ri parol");
}

let sonA = +prompt("Birinchi sonni kiriting")
let sonB = +prompt("Ikkinchi sonni kiriting")
if (sonA > sonB) {
    console.log("Katta son", sonA);
} else {
    console.log("Katta son", sonB);
}
let ball = +prompt("Ballni kiriting:")
if (ball >= 60) {
    console.log("O'tdi");
} else {
    console.log("O'tmadi");
}
let summa = +prompt("Summani kiriting")

if (summa >= 100000) {
    console.log("Chegirma mavjud");
} else console.log("Chegirma yo'q");

let kun = +prompt("Kunni kiriting:")

switch (kun) {
    case 1:
        console.log("Bugun dushanba.");
        break;

    case 2:
        console.log("Seshanba.");
        break;
    case 3:
        console.log("Chorshanba.");
        break;
    case 4:
        console.log("Payshanba.");
        break;
    case 5:
        console.log("Juma.");
        break;
    case 6:
        console.log("Shanba.");
        break;
    case 7:
        console.log("Yakshanba.");
        break;
    default:
        console.log("Xato kiritildi.");
        break;
}

let harakat = prompt("Svetafor rangini kiriting:").toLowerCase();

switch (harakat) {
    case "qizil":
        console.log("To'xta.");
        break;
    case "sariq":
        console.log("Tayyor tur.");
        break;
    case "yashil":
        console.log("Yurish mumkin.");
        break;
    default:
        console.log("Noto'g'ri rang.");
        
        break;
}
let kirishYoshi = prompt("Kirish uchun yoshingizni kiriting")
switch (kirishYoshi) {
    case (kirishYoshi>0 && kirishYoshi<6):
        console.log("Bepul");
        break;
    case (kirishYoshi>7 && kirishYoshi<18):
        console.log("Arzon",20000);
        break;
    case (kirishYoshi>19 && kirishYoshi<60):
        console.log("To'liq",40000);
        break;
    case (kirishYoshi>61):
        console.log("Chegirmali", 25000);
        break;
}
let login = prompt("Loginni kiriting:").toLowerCase();
let parol2 = prompt("Parolni kiriting:").toLowerCase();

if (login === admin && parol2 === 1234){
    console.log("Xush kelibsiz");
} else {
    console.log("Login yoki parol noto'g'ri");
}
let buy = +prompt("Boyni kiriting (metr)")
let vazn = +prompt("Vaznni kiriting (kg)") 
let bmi = vazn/buy
if (bmi<18.5){
    console.log("Ozgina");
} else if (bmi>18.5&&bmi<24.9){
    console.log("Me'yoriy");   
} else if (bmi>=25){
    console.log("Ortiqcha ");
}

let summA = prompt("Summani kiriting:")
let azolik = confirm("A'zomisiz")
if (summA>= 200000 || azolik == true ){
    console.log("Yetkazib berishi bepul");
} else{
    console.log("Yetkazib berish pullik");
    
}

let bal = prompt("Ballni kiriting")
if (bal>=90&& bal<=100){
    console.log("A");
}else if (bal>=80 && bal <=89){
    console.log("B");
} else if (bal>=70&& bal<=79){
    console.log("C");
} else if (bal >=60&&bal<=69){
    console.log("D");
} else if (bal>=0&& bal<=59){
    console.log("F");
}
let transport = prompt("Transport turini kiriting").toLowerCase();
switch (transport) {
    case "velosiped":
        console.log("Maximum tezlik 30");
        break;

    default:
        break;
} 

let oy2 = prompt("Oy raqamini kiriting")
switch (oy2) {
    case 1:
        console.log('1-Yangi yil');
        break;
    case 3 : 
    console.log("3-Navro'z");
    

    default:
        console.log("Bunday oyda bayram yo'q");
        
        break;
}
