// Loop = skill
// for loop 
//for (boshlanish; shart; o'zgarish){// ishlaydigan kod} 
// let x = 1 
// ++(incriment) ; -- (decrement)
// x += 1
// x++;
// x++;
// x--;
// for (let start = 50; start >= -1; start--){
//     console.log(start);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Assalomu alaykum! Hurmatli do'stim ${i} chi`);
//     console.log(`Seni to'yimga taklif qilmoqchiman. Pov:Sunnat to'yim emas.`);
//     console.log(`Xurmat bilan Boltavoy`);

// }

// for (let i = 1; i <=50; i++ ){
//     if (i%2===0){
//         console.log(`${i} bu juft son`);
//     }
// }
// const ism = "Muhammadhojixonjonbek"
// for (let i = 0; i < ism.length; i++) {
//     console.log(ism.charAt(i).toUpperCase());
// }
// for (let i = 1; i <=20; i++ ){
//     if (i%2===0){
//         console.log(`${i}  Bu juft son`);
//     } else {
//         console.log(`${i}  Bu toq`);

//     }
// }

// let jamiOylik = oylik.reduse(boshi, qiymat=>{

// })

// let i = 10;
// while( i < 10){
//     console.log(i);
//     i++;
// }
// for ( let i =0; i<10;i++){
//     console.log();

// }
// let son = 10;
// while(son<20){

//     if(son===17){
//         son++;
//         continue;
//     }
//     console.log(son);
//     son++;
// }

// let parol;
// while(true){
//     parol = prompt(`Parolni kiriting`)
//     if (parol=== `uz77`) {
//         alert(`Xush kelibsiz`)
//         break
//     }
//     alert(`Parol xatogyujbjk`)
// }
// let maxfiyRaqam = +prompt`Sirli raqamni kiriting. ex: 40-70`;
// let urinish = 0;
// while (true) {
//     let taxmin = +prompt(`Taxminingizni kiriting`)
//     urinish++;

//     if (taxmin>70 || taxmin<40){
//         alert(`70dan kichik va 40 dan katta raqam kiriting`);
//         continue;
//     }
//     if (urinish === 3) {
//         alert (`465461564 soniyadan so'ng qayta uruning`)
//         break;

//     }
//     if (urinish == 1 && taxmin === maxfiyRaqam) {
//         alert(`Eeee qoyil 1ta urinishda topdingiz `)
//         continue;
//     }
//     if (maxfiyRaqam === taxmin) {
//         alert(`Tabriklaymiz siz ${urinish}ta urunishda topdingiz!`)
//         break
//     }

//     alert(`Qayta uruning.`)
// }
// let davlat = prompt(`Yashirin davlatni  kiriting.(Yevropa davlati)`).toLowerCase();
// let urinish = 0;
// while (true) {
//     let taxmin = prompt(`Taxminingizni kiriting`)
//     urinish++;

//     if (urinish === 3) {
//         alert (`465461564 soniyadan so'ng qayta uruning`)
//         break;

//     }
//     if (davlat === taxmin) {
//         alert(`Tabriklaymiz siz ${urinish}ta urunishda topdingiz!`)
//         break
//     }

//     alert(`Qayta uruning.`)
// }
// 🟢 1️⃣ 1 dan 10 gacha sanash

// Vazifa:
// while loop yordamida 1 dan 10 gacha sonlarni ekranga chiqaring.

// Qadamlar:
//  1. Bitta o‘zgaruvchi yarating (let i = 1).
//  2. while (i <= 10) shartini yozing.
//  3. Har safar i ni konsolga chiqaring (console.log(i)).
//  4. Har aylanishda ini 1 taga oshiring (i++).

// ⸻

// 🟢 2️⃣ 10 dan 1 gacha teskari sanash

// Vazifa:
// while loop yordamida 10 dan 1 gacha kamaytirib chiqaring.

// Qadamlar:
//  1. let i = 10 dan boshlang.
//  2. while (i >= 1) shartini yozing.
//  3. Har safar i ni chiqaring.
//  4. Keyin ini 1 taga kamaytiring (i--).

// ⸻

// 🟢 3️⃣ 1 dan 20 gacha juft sonlar

// Vazifa:
// while yordamida 1 dan 20 gacha bo‘lgan faqat juft sonlarni chiqaring.

// Qadamlar:
//  1. let n = 1 dan boshlang.
//  2. while (n <= 20) shartini yozing.
//  3. Ichida if (n % 2 === 0) bilan juftlikni tekshiring.
//  4. Juft bo‘lsa, chiqaring.
//  5. Har safar n++ bilan oshirib boring.

// ⸻

// 🟢 4️⃣ Foydalanuvchi to‘g‘ri javob kiritmaguncha so‘rash

// Vazifa:
// while yordamida foydalanuvchidan “Toshkent O‘zbekiston poytaxtimi?” deb so‘rang.
// Foydalanuvchi “ha” deb yozmaguncha so‘rash davom etsin.

// Qadamlar:
//  1. prompt() orqali javob oling.
//  2. while (javob !== "ha") deb yozing.
//  3. Agar javob “ha” bo‘lmasa, yana so‘rang.
//  4. To‘g‘ri javob kiritilganda “To‘g‘ri!” deb yozing.

// ⸻

// 🟢 5️⃣ Sonlarning yig‘indisi (1 dan foydalanuvchi kiritgan songacha)

// Vazifa:
// Foydalanuvchi biror musbat son kiritadi.
// while yordamida 1 dan shu songacha bo‘lgan sonlarning yig‘indisini toping.

// Qadamlar:
//  1. prompt() orqali son oling (n).
//  2. let i = 1, let sum = 0 bilan boshlang.
//  3. while (i <= n) shartini yozing.
//  4. Har safar sum = sum + i.
//  5. i++ qilib oshiring.
//  6. Loop tugagach, natijani chiqarish.

// ⸻

// 💡 Qo‘shimcha maslahatlar
//  • while — shart to‘g‘ri bo‘lgan paytda doim takrorlanadi.
//  • Ehtiyot bo‘ling: agar i++ yozishni unutgan bo‘lsangiz, loop to‘xtamaydi (cheksiz aylanadi!).
//  • Har bir mashqni console.log() bilan tekshirib ko‘ring.
// Vazifa:
// Foydalanuvchidan parol kiritish so‘raladi. To‘g‘ri parol “1234” bo‘lsa, “Xush kelibsiz!” deb chiqadi.
// Agar noto‘g‘ri bo‘lsa — while yordamida to‘g‘ri parol kiritmaguncha so‘rash davom etadi.

// Qadamlar:
//  1. let password = prompt("Parolni kiriting:") yozing.
//  2. while (password !== "1234") shartini yozing.
//  3. Ichida password = prompt("Noto‘g‘ri! Qayta kiriting:").
//  4. Foydalanuvchi to‘g‘ri parol kiritganda loop to‘xtaydi.
//  5. Oxirida alert("Xush kelibsiz!") yoki console.log("Xush kelibsiz!") chiqaring.

// ⸻


// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;

// }
// let o = 10;
// while (o >= 1) {
//     console.log(o);
//     o--;

// }
// let n = 0;
// while (n <= 20) {
//     n++;
//     if (n % 2 === 0) {
//         console.log(n);
//     }
// }
// let javob = prompt('Toshkent O‘zbekiston poytaxtimi?').toLowerCase();

// while (true){
//     if (javob !== 'ha') {
//         alert('Qayta kiriting');
//     }
//     if (javob == 'ha') {
//         alert("To'g'ri")
//     }
// }

// let password = +prompt(`Parolni kiriting;`)
// while (true) {
//     if (password!==1234){
//         prompt(`Noto'g'ri. Qayta kiriting`)
//     }
    
//     if (password == 1234){
//         alert("Xush kelibsiz")
//     }
// }