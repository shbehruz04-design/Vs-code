// let score = 0;
// let savol = document.getElementById('savol');
// let javob = document.getElementById('javob');
// let input = document.getElementById('userAnswer');
// let btn = document.getElementById('tekshirish');

// let son1 = Math.ceil(Math.random() * 10);
// let son2 = Math.ceil(Math.random() * 10);

// savol.textContent = `What is ${son1} multiply by ${son2}?`;

// btn.addEventListener('click', function () {
//     let qiymat = input.value
//     let natija = son1 * son2;

//     if (+qiymat === natija) {
//         score++;
//         javob.textContent = `Score: ${score}`;

//         son1 = Math.ceil(Math.random() * 10);
//         son2 = Math.ceil(Math.random() * 10);
//         savol.textContent = `What is ${son1} multiply by ${son2}?`;

//         input.value = '';
//     } else {
//         alert("Notog'ri");
//         input.value = '';
//     }
// });

// const achko = document.getElementById("javob");
// const savol = document.getElementById("savol");
// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const xato = document.getElementById("xato");

// const random1 = Math.ceil(Math.random()* 10);

// btn.addEventListener("click", function () {
//     let javob = Number(input.value)

// })
const ajko = document.getElementById('javob');
const savol = document.getElementById('savol');
const btn = document.getElementById('btn');
const xato = document.getElementById('xato');
const input = document.getElementById('input');
let wrongSound = document.getElementById("audio");

// Math.floor(2.7) = 2, Math.ceil(2.7) = 3
let rSon1 = Math.ceil(Math.random() * 10);
let rSon2 = Math.ceil(Math.random() * 10);

savol.textContent = `${rSon1} x ${rSon2} = ? `

let score = 0;
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        btn.click();
    }
});

btn.addEventListener('click', function () {
    let javob = input.value;

    if (javob === '') {
        xato.textContent = "Oldin javobni yozing!";
        xato.style.color = 'red';
        return;
    }
    if (score == 10) {
        // rSon1 = Math.ceil(Math.random() * 20);
        // rSon2 = Math.ceil(Math.random() * 20);

        // savol.textContent = `${rSon1} x ${rSon2} = ?`
        // input.value = ''
        // return;
        score++;
        ajko.textContent = `Achko: ${score}`;
        rSon1 = Math.ceil(Math.random() * 20);
        rSon2 = Math.ceil(Math.random() * 20);
        savol.textContent = `${rSon1} x ${rSon2} = ? `
        input.value = ''
        xato.textContent = ''
        return
    }

    if (javob == rSon1 * rSon2) {
        score++;
        ajko.textContent = `Achko: ${score}`;
        rSon1 = Math.ceil(Math.random() * 10);
        rSon2 = Math.ceil(Math.random() * 10);
        savol.textContent = `${rSon1} x ${rSon2} = ? `
        input.value = ''
        xato.textContent = ''
    } else {
        score--;
        ajko.textContent = `Achko: ${score}`
        input.value = "";

        wrongSound.pause();
        wrongSound.currentTime = 0;
        wrongSound.play();
        setTimeout(() => {
            wrongSound.pause();
            wrongSound.currentTime = 0;
        }, 3000);
        let img = document.getElementById("img");
        img.style.display = "block";
        img.classList.add("flash");
            setTimeout(() => {
        img.style.display = "none";
        img.classList.remove("flash"); 
    }, 3000);
        return;
    }

});




