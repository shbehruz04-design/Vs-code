// //Array = Massivlar
// let boshArray =[] //Bo'sh array
// let A9 = [`Hojiakbar`, `Boltavoy`, `Ozod`, `Behruz`, `Alisher` ]
// let yosh = [ 17, 19, 13, 15, 10]
// let aralash = ["InformationTechnalogies", 67,  "ingiliz tili",70, true, false  ] 
// let mass = [ ["Ali", 12], ["Vali",16], [`Ozod`,76]]
// // console.log(aralash[2]);
// // console.log(mass[1][0]);

// //Elementni o'zgartirish
// A9[4] = "Ozodbek";
// console.log(A9);

// //Oxirigi elementni olish
// let uzunliK = A9.length;
// console.log(A9[uzunlik - 1])

// // Elementlarni alohida chiqarish
// for (let i = 0 ; i <A9.length; i++ ) {
//     console.log(A9[i]);
// }

// for (let b = 0 ; b <aralash.length; b++ ) {
//     console.log(aralash[b]);
// }

// ## 🎯 6.1 Massivlar Nima? - Uy Ishi

// ### Vazifa 1: Massivlar yaratish
// Quyidagi massivlarni yarating va konsolga chiqaring:

// 1. Talabalar ro'yxati - 5 ta talaba ismini o'z ichiga olgan massiv
// 2. Baholar massivi - 7 ta bahoni o'z ichiga olgan massiv  
// 3. Ranglar massivi - 4 ta rang nomini o'z ichiga olgan massiv
// 4. Bo'sh massiv - keyinchalik to'ldiriladigan bo'sh massiv

// Maslahat: Har bir massivni console.log() bilan chiqaring va uzunligini ham ko'rsating.

// ---

// ## 🔍 6.2 Massiv Elementlariga Kirish - Uy Ishi

// ### Vazifa 2: Elementlarni topish va o'zgartirish
// Quyidagi massiv bilan ishlang:

// let mevalar = ["olma", "banan", "apelsin", "uzum", "anor"];


// Vazifalar:
// 1. Birinchi mevani konsolga chiqaring
// 2. Oxirgi mevani konsolga chiqaring  
// 3. Uchinchi mevani "mandarin" ga o'zgartiring
// 4. Barcha mevalarni raqam bilan ko'rsating (1. olma, 2. banan, ...)
// 5. Massiv uzunligini konsolga chiqaring

// Maslahat: for tsikli yordamida barcha elementlarni ko'rsating.

let talabalar = [`Ali`, `Vali`, `HAsan`, `Husan`, `Abdulloh`]
let baholar = [`90`, `95`, `80`, `93`, `88`, `85`, `100`]
let rang = [`Qizil`, `Yashil`, `Ko'k`, `Oq`]
let bushMassiv = []
console.log(talabalar, talabalar.length);
console.log(baholar, baholar.length);
console.log(rang, rang.length);
console.log(bushMassiv, bushMassiv.length);


let mevalar = ["Olma", "Banan", "Apelsin", "Uzum", "Anor"]
let uzunlik = mevalar.length;
console.log(mevalar[0]);
console.log(mevalar[uzunlik - 1]);

mevalar[2] = "Mandarin"
console.log(mevalar);
console.log(mevalar.length);


for (let i = 0; i < mevalar.length; i++) {
  console.log(`${i + 1} ${mevalar[i]}`);
}



for (let b = 0; b < mevalar.length; b++) {
  console.log(mevalar[b]);
}

