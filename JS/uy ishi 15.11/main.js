let yordam = document.getElementById("yordam");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let chances = document.getElementById("chances")

let gSon1 = Math.ceil(Math.random() * 100)
let chancesCount = 5;

btn.addEventListener("click", function () {
    let qiymat = Number(input.value);
    if (chancesCount <= 0) {
        yordam.textContent = `Looser. Number was ${gSon1}`;
        btn.textContent = "Looser";
        btn.style.backgroundColor = "red";
        btn.style.color = "white";
        input.style.display = "none";
        return;
    }

    if (input.value == "") {
        alert("Avval sonni kiriting!");
        return;
    }

    if (qiymat === gSon1) {
        yordam.textContent = "You are genious!";
        return;
    } else if (qiymat > gSon1) {
        yordam.textContent = "Your number is higher!";
        chancesCount--;
        chances.textContent = `You have ${chancesCount} chances`;
    } else if (qiymat < gSon1) {
        yordam.textContent = "Your number is lower!";
        chancesCount--;
        chances.textContent = `You have ${chancesCount} chances`;
    }

});
