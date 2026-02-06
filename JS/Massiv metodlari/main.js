// // Methods - metodlar.
// // metodlar doim nuqta bilan boshlanib, qavs bilan tugaydi.
// // .push(), .pop(), . shift(), .unshift(), .indexOf(), .includes(), .splice();

// let cars = ["Onix","Nexia", "Lacetti"];
// // .pop() = massivdan so'nggi elementni olib tashlaydi
// cars.pop(); // olib tashlandi

// //.push() = Massiv oxiriga elementlar qo'shadi
// cars.push("Cobalt", "Gentra", "Monza") // elementlar qo'shadi

// // .shift() = massivni boshidan bitta elementni o'chiradi
// cars.shift()

// //.unshift() = massiv boshiga element qo'shadi
// cars.unshift("Trecer", "Monza", "KIA Sonate")

// // .indexOf() = elementni qaysi indexda turganini qaytaradi
// console.log(cars.indexOf("Nexia"));
// console.log(cars.indexOf("BMW")); // topilmasa -1 qaytaradi

// //.includes() = Massiv ichida so'ralgan element borligini tekshiradi
// console.log(cars.includes("KIA Sonate"));

// //  .splice(bolshlashIndex, nechtaO'chirish) = Element O'chirish
// //  .splice(bolshlashIndex, nechtaO'chirish, Element qo'shish) = Element qo'shish 
// cars.splice(3, 3)
// cars.splice(3, 0, "Ferrari", "Damas")

// console.log(cars);

// const users = ["Asilbek", "Hojiakbar", "Abduracmon"]
// let newUser = prompt("Ismingizni kiriting")

// if (users.includes(newUser)) {
//     console.log("Ro'yxatdan o'tgansiz");
// } else {
//     console.log("Siz ro'yxatga qo'shildingiz");
//     users.push(newUser)
//     console.log(users);

// }
// let talabalar = [ "Ahmad", "Karim"]
// console.log("Boshlang'ich ro'yxat:");
// console.log(talabalar);
// console.log("Talabalar soni:" + talabalar.length);

// talabalar.push("Sardor");
// talabalar.push("Malika")
// console.log("Yangi talabalar qo'shildi:");
// console.log(talabalar);

// let oxirgiTalaba = talabalar.pop();
// console.log("Olib tashlangan talaba: " + oxirgiTalaba);
// console.log("Hozirgi ro'yxat:");
// console.log(talabalar);

// talabalar.unshift("Zarina")
// console.log("Boshiga qo'shildi: ");
// console.log(talabalar);


// let birinchiTalaba = talabalar.shift();
// console.log("Birinchi talaba olib tashlandi: " +birinchiTalaba);
// console.log("Hozirgi ro'yhat");
// console.log(talabalar);



// let pozitsiya = talabalar.indexOf("Sardor")
// if (pozitsiya != -1) {
//     console.log("Sardor " + pozitsiya + " pozitsiyasida");
// } else{
//     console.log("Sardor topilmadi");
// }

// console.log("Final talabalar ro'yxati:");
// for (let i = 0; i < talabalar.length; i++) {
//     console.log((i + 1) + ". " + talabalar[i]);
// }

