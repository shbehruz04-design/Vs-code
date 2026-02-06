// // let ismlar = ["dilshod", "ahmad", "zuxriddin", "hoji", "farizbek"];

// // for (i = 0; i < ismlar.length; i++){
// // console.log(ismlar[i].toUpperCase());

// // }

// // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // let kvadrats = [];

// // for (let a = 0; a< numbers.length; a++) {
// //     let numKvadrat = numbers[a] * numbers[a];
// //     kvadrats.push(numKvadrat)
// // }
// // console.log(kvadrats);


// // //Functions - funksiyalar

// // function salomlashish() {
// //     alert("Assalomu aleykum aziz do'stim shokir");
// // }
// // salomlashish();

// // function salomlashPro(ism) {
// //     alert(`Assalomu aleykum ${ism}`);
// // }
// // // salomlashProMax(`Behruz`);
// // function salomlashPro(ism, familya) {
// //     alert(`Assalomu aleykum ${ism} - ${familya}`);
// // }
// // salomlashProMax(`Bexruz`, `Sheraliyev`)



// //Vazifa
// // function ayirish(a,b) {
// //     console.log(a - b);
// // }
// // ayirish(15,2);

// // function kupaytirish(c, d) {
// //     console.log(c * d);
// // }
// // kupaytirish(6 , 8);

// // function bulish(e, f) {
// //     console.log(e / f);   
// // }
// // bulish(60 , 3)

// // function qoldiq(g, h) {
// //     console.log(g &h);
// // }
// // qoldiq(30,12)




// // let fruits = ["apple", "banana"]
// // fruits.push("Orange")
// // console.log(fruits);


// // let numbers = [10, 20, 30, 40];
// // numbers.pop()
// // console.log(numbers);

// // let cars = ["BMW", "Mercedes"]
// // cars.unshift("Tesla")

// // let colors = ["red", "green", "blue"]
// // colors.shift()
// // console.log(colors);

// // let students = ["Ali"]
// // students.push("Salim", "Vali")
// // console.log(students);


// // let cities = ["Tashkent", "Samarkand", "Bukhara"]
// // cities.shift();
// // cities.unshift("Andijan")
// // console.log(cities);


// // let animals = ["cat", "dog", "cow"];
// // let removed = "cow"
// // animals.pop()
// // console.log(animals);
// // console.log("Removed:",removed);



// // function getGrade(a) {
// //     if (a >= 90 && a <= 100) {
// //         console.log("Bahoyingiz: A");
// //     } else if (a >= 80 && a <= 89) {
// //         console.log("Bahoyingiz: B");
// //     } else if (a >= 70 && a <= 79) {
// //         console.log("Bahoyingiz: C");
// //     } else if (a >= 60 && a <= 69) {
// //         console.log("Bahoyingiz: D");
// //     } else if (a >= 0 && a <= 59) {
// //         console.log("Bahoyingiz: B");
// //     }
// // };
// // getGrade(96);


// // function checkNumber(a) {
// //     if (a %2 == 0) {
// //         console.log("Bu juft son");
// //     } else {
// //         console.log("Bu toq son");

// //     }
// // }
// // checkNumber(20)



////Uyga vazifa

// 1 
// function doubleNumber(a) {
//     console.log(a*2);
// }
// doubleNumber(10);
// doubleNumber(25)

// // 2
// function squear(b) {
//     if (b > 0 ) {
//         console.log("Bu sonning kvadrati:", b * b);
//     } else {console.log("Noto'g'ri raqam");
//     }
// }
// squear(9)
// squear(15)

// // 3
// function checkNumber(c) {
//     if (c % 2 == 0) {
//         console.log(`${c} Bu juft son`);
//     } else {
//         console.log(`${c} Bu toq son`);
//         }
// }
// checkNumber(20);
// checkNumber(7)

// // 4
// function greet(name) {
//     console.log(`Salom, ${name}`);;
// }

// greet("Shoqosim")

// // 5
// function checkAge(age) {
//     if (age >= 18) {
//         console.log("Kattalar uchun");   
//     } else {
//         console.log("Bolalar uchun");
//     }
// }
// checkAge(30);
// checkAge(9)

// // 6
// function findMax(son1, son2) {
//     if (son1 > son2) {
//         console.log(` Katta son bu: ${son1}`);
//     } else {
//         console.log(`Katta son bu: ${son2}`);

//     }
// }

// findMax(45, 23);
// findMax(50, 70)

// // 7
// function toFahrenheit(selsiy) {
//   let farageyt = selsiy * 1.8 + 32;
//   console.log(farageyt);
// }
// toFahrenheit(28)
// toFahrenheit(32)

// // 8 
// function getGrade(a) {
//     if (a >= 90 && a <= 100) {
//         console.log("Bahoyingiz: A");
//     } else if (a >= 80 && a <= 89) {
//         console.log("Bahoyingiz: B");
//     } else if (a >= 70 && a <= 79) {
//         console.log("Bahoyingiz: C");
//     } else if (a >= 60 && a <= 69) {
//         console.log("Bahoyingiz: D");
//     } else if (a >= 0 && a <= 59) {
//         console.log("Bahoyingiz: B");
//     }
// };
// getGrade(96);

// // 9
// function wordLength(word) {
//   console.log(word.length);
// }

// wordLength("salom");
// wordLength("hello");
// wordLength("javascript"); 

// // 10
// function triangleArea(b, h ) {
//     let s = 0.5 * b * h;
//     console.log("Uchburchak Yuuzasi", s, "ga  teng");

// }
// triangleArea(6, 4)


//Funcsiyalar
// function kvadratHisoblash(raqam) {
//     console.log(raqam * raqam);
// }
// kvadratHisoblash(10)


// let number = +prompt('70 ni kvadrati nechchi')


// function calc() {
//     let son1 = +prompt("1-sonni kiriting").trim();
//     let amal = prompt("Amalni kiriting").trim();
//     let son2 = Number(prompt("2-sonni kiriting")).trim();

//     if (amal === "+") {
//         return son1 + son2
//     } else if (amal == "-"){
//         return son1 - son2
//     } else if (amal == "/"){
//         return son1 / son2
//     } else if (amal == "*"){
//         return son1 * son2
//     } else {
//         return "Bunday amal yo'q"
//     }
// }
// let natija = calc()
// console.log("Natija:",natija);

// function pravaOlolamanmi() {
//     let baho = +prompt("Bahoyingizni kiriting");
//     let soqqa = +prompt("Pul miqdorini kiriting");
//     let yosh = +prompt("Yoshingizni kiriting");
//     if (baho >= 80 && soqqa > 20000000 && yosh >= 18) {
//         return "Sizga hammasi mojna akasi. Xolasez pravani o'zimiz eltib beramiz"
//     } else if (baho >= 80 && soqqa > 10000000 && yosh >= 18) {
//         return "Siz Silaa. Prava olsangiz bo'ladi"
//     } else if (baho >= 80 && soqqa < 3000000 && yosh >= 18){
//         return "Prava olish uchun ishlash kerak, BOMJJ"
//     };
// }    
//     let pravaNatijasi = pravaOlolamanmi();
//     console.log(pravaNatijasi);

// uy ishi

function checkPassword(password) {
    if (password.length == 8) {
        console.log("Yaxshi parol");
    } else if (password.length < 8){
        console.log("Uzunroq parol kiriting!");
        
    }
}
checkPassword(123456789)
checkPassword(1234)

function wifiAccess(username){
    if (username === "Admin") {
     return "Ruxsat berildi"   
    } else "Ruxsat yo‘q"
}

function ticketPrice(age){
    if (age <7) {
        return "Bepul";
    } else if (age > 7 && age<=18){
        return 10000, "so'm";   
    } else if (age >= 18) {
     return 20000,"so'm";   
    } else{
        return "Kirish mumkin emas";
        
    }
}

ticketPrice(5)
ticketPrice(15)
ticketPrice(80)

function calculateTaxi(distance){
    let narx = 2000;
    let umumiy = distance * narx;
    return umumiy ,"so'm"
}

function electricityBill(kWh){
    let kVt = +prompt("Kvt ni kiriting")

    if (kVt<100 == 500) {
        return 
    } else if ( kVt >100 == 700){

    }
}
function studentGrade(score){
    if (score<= 50) {
        return "Yiqqolmadi";
    } else if (score >= 50 ){
        return "O'tdi";   
    } else if (score = 100) {
     return "a'lo";   
    } else{
        return "Ball yo'q";
        
    }
}

function calculateTaxi(distance){
    let daqiqa = 1500;
    let umumiy1 = distance * daqiqa;
    return umumiy1 ,"so'm"
}

function checkBalance(balance){
    if (balance <= 0) {
        return "Balansingiz tugagan"
    } else return "Balansingiz X so‘m"
}


function checkGuests(name){
    if (name === "Ali" || name == "Laylo") {
     return "Xush kelibsiz"   
    } else "Ro'yxatda yo'q"
}
