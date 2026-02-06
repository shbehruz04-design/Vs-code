let hisobla = document.getElementById("hisobla");
hisobla.addEventListener("click", function(){
    let son1 = Number(document.getElementById("son1").value);
    let son2 = Number(document.getElementById("son2").value);
    let natija1 = son1+son2;
    document.getElementById("javob").textContent =  natija1;
})

let kupaytir = document.getElementById("kupaytir");
kupaytir.addEventListener("click", function(){
    let son1Kupaytir = Number(document.getElementById("son1").value);
    let son2Kupaytir = Number(document.getElementById("son2").value);
    let natija2 = son1Kupaytir*son2Kupaytir;
    document.getElementById("javob2").textContent = natija2;
})

let kvadrat = document.getElementById("kvadrat");
kvadrat.addEventListener("click", function(){
    let sonKvadrat = Number(document.getElementById("sonKvadrat").value);
    let natija3 = sonKvadrat * sonKvadrat;
    document.getElementById("javob3").textContent =  natija3;
})

let tekshir = document.getElementById("tekshir");
tekshir.addEventListener("click", function(){
    let yosh = Number(document.getElementById("yoshingiz").value);
    if (yosh >=18) {
        document.getElementById("javob4").textContent =  "Siz balog'atga yetgansiz";
    } else if(yosh <= 17)
    document.getElementById("javob4").textContent =  "Siz hali kichkinasiz";
})

let topish = document.getElementById("topish");
topish.addEventListener("click", function(){
    let avg1 = Number(document.getElementById("avg1").value);
    let avg2 = Number(document.getElementById("avg2").value);
    let avg3 = Number(document.getElementById("avg3").value);
    let natija4 = (avg1+avg2+avg3) / 3;
    document.getElementById("javob5").textContent = natija4;
})

let konvert = document.getElementById("konvert");
konvert.addEventListener("click", function(){
    let dollar = Number(document.getElementById("dollar").value);
    let natija5 = dollar * 11950;
    document.getElementById("javob6").textContent =  natija5 + "  so'm";
})

let konvert2 = document.getElementById("konvert2");
konvert2.addEventListener("click", function(){
    let kilo = Number(document.getElementById("kilo").value);
    let natija6 = kilo * 1000;
    document.getElementById("javob7").textContent =  natija6 + "  gram";
})

let solishtir = document.getElementById("solishtir");
solishtir.addEventListener("click", function(){
    let comp1 = Number(document.getElementById("comp1").value);
    let comp2 = Number(document.getElementById("comp2").value);
    if (comp1 > comp2) {
        document.getElementById("javob8").textContent =  "Katta son:  "+comp1;
    } else if(comp1<comp2){
    document.getElementById("javob8").textContent =  "Katta son:  "+comp2;
    } else if(comp1==comp2){
        document.getElementById("javob8").textContent =  "Sonlar teng"
    }
})

let perimetrniTop = document.getElementById("perimetrniTop");
perimetrniTop.addEventListener("click", function(){
    let tomon1 = Number(document.getElementById("tomon1").value);
    let natija7 = tomon1*4;
    document.getElementById("javob9").textContent = natija7;
})

let salom = document.getElementById("salom");
salom.addEventListener("click", function(){
    let ism = String(document.getElementById("ism").value);
    document.getElementById("javob10").textContent = `Salom, ${ism}`
})