// // let btn = document.getElementById("themeChange");
// // let list = document.getElementById("list");

// // btn.addEventListener('click', () => {
// //     document.body.style.backgroundColor = "#322e2e";
// // })
// let body = document.body
// function darkMode() {
//     body.classList.toggle('dark')
// }
const input = document.getElementById("narsaInput");
const btn = document.getElementById('add');
const ulList = document.getElementById('list');

btn.addEventListener('click', function () {
    let narsaNomi = input.value;

    if (narsaNomi === "") {
        alert('oldin kerakli narsa nomini kiritng')
        return
    }


    let liy = document.createElement("li")
    liy.textContent = narsaNomi;
    liy.className = 'item'
    liy.onclick = function () {
        liy.style.textDecoration = "line-through"
    }

    const tugma = document.createElement("button")
    liy.appendChild(tugma)
    tugma.style.padding = '10px'
    tugma.style.text = '10px'
    tugma.textContent = 'remove'
    tugma.onclick = function () {
        liy.remove()
    }


    ulList.appendChild(liy)

    input.value = ''

})