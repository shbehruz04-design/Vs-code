// 🟢 Boshlang‘ich (1–3)
//  1. Son tekshirish
// Foydalanuvchidan biror son so‘rab oling. Agar son musbat bo‘lsa, “Musbat son” deb chiqaring, aks holda “Manfiy son”.
//  2. Yosh bo‘yicha tekshiruv
// prompt() orqali yosh so‘ralsin. Agar yosh 18 yoki undan katta bo‘lsa “Katta yoshli”, aks holda “Voyaga yetmagan”.
//  3. Juft yoki toq
// Foydalanuvchi kiritgan son juftmi yoki toqmi aniqlang va tegishli xabarni ko‘rsating.

// ⸻

// 🟡 O‘rta (4–7)
//  4. Bahoni so‘zga aylantirish
// Talaba bahosini (1–5 oralig‘ida) kiritadi.
//  • 5 → “A’lo”
//  • 4 → “Yaxshi”
//  • 3 → “Qoniqarli”
//  • 2 yoki 1 → “Qoniqarsiz”
//  5. Harorat bo‘yicha tavsiya
// Foydalanuvchidan bugungi havo harorati so‘ralsin.
//  • 30 dan yuqori → “Issiq kun, soyada yuring”
//  • 15–30 orasida → “Yoqimli havo”
//  • 1–15 orasida → “Salqin, iliq kiying”
//  • 2 dan past → “Juda sovuq!”
//  6. Parol tekshiruvi
// prompt() orqali parol kiriting. Agar foydalanuvchi “12345” kiritsa “Xush kelibsiz!”, aks holda “Parol xato”.
//  7. Oy tartib raqami bo‘yicha nom
// Foydalanuvchi oy raqamini kiritadi (1–12). Agar 1 bo‘lsa — Yanvar, 2 bo‘lsa — Fevral va hokazo. Agar 1–12 orasida bo‘lmasa, “Bunday oy yo‘q” deb chiqaring.

// ⸻

// 🔵 Murakkabroq (8–10)
//  8. Imtihon natijasi
// Balni kiriting (0–100).
//  • 90–100 → “A’lo”
//  • 70–89 → “Yaxshi”
//  • 50–69 → “Qoniqarli”
//  • 3–49 → “Yiqildingiz”
//  9. Shahar tanlash
// Foydalanuvchidan yashaydigan shahrini so‘ralsin.
//  • “Toshkent” → “Poytaxtda yashaysiz”
//  • “Samarqand”, “Buxoro”, “Xiva” → “Tarixiy shahar!”
//  • Boshqa → “Qiziqarli joy!”
//  10. Avtomobil tezligi
// Tezlikni kiriting.
//  • 4 → “Mashina to‘xtagan”
//  • 1–60 → “Xavfsiz tezlik”
//  • 61–120 → “O‘rtacha tezlik”
//  • 120 dan yuqori → “Juda tez, ehtiyot bo‘ling!”

let son = +prompt("Son kiriting:")

if (son<0){
    console.log("Manfiy son.");
}else{
    console.log("Musbat son.");
}

let yosh = +prompt("Yoshingizni kiriting:")

if (yosh >= 18){
    console.log("Katta yoshli.");
} else{
    console.log("Kichik yoshli.");
    
}
let son2 = +prompt("Sonni kiriting")
if ( Number(son2) %2 === 0){
    console.log("Juft");   
}   else{
    console.log("Toq");
}

let baho = +prompt("Bahoni kiriting:")

if (baho == 5 ){
    console.log("A'lo.");
} else if (baho == 4){ 
    console.log("Yaxshi.");
} else if (baho == 3){
    console.log("Qoniqarli.");
} else if (baho == 2){
    console.log("Qoniqarsiz.");
} else if (baho == 1){
    console.log("Qoniqarsiz");
}

let havo = +prompt("Bugun havo harorati qanday?")
if ( havo > 30){
    console.log("Issiq kun.");   
} else if (havo > 15 && havo < 30 ){
    console.log("Yoqimli havo.");
} else if ( havo > 1 && havo <15){
    console.log("Salqin, issiqroq kiyining!");
} else if ( havo < 2){
    console.log("Juda sovuq.");   
}

let parol = +prompt("Parolni kiriting:")

if (parol == 12345){
    console.log("Xush kelibsiz...");
} else console.log("Parol xato.")

let oy = +prompt("Oyni kiriting")

if (oy = 1 ){
    console.log("Yanvar");
} else if (oy = 2){
    console.log("Fevral");
} else{
    console.log("Bunday oy yo'q");
    
}
let ball = +prompt("Ballni kiriting")

if (ball>90&& ball<=100){
    console.log("A'lo");
} else if (ball>70&& ball<89)
    console.log("Yaxshi")