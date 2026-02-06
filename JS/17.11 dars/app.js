const input = document.getElementById('narsaInput');
const btn = document.getElementById('add')
const ulList = document.getElementById('list');


btn.addEventListener('click', function() {
    let narsaNomi = input.value;

    if(narsaNomi === '') {
        alert("Oldin Kerakli narsa nomini kiriting!");
        return;
    }

    let liy = document.createElement('li');
    liy.textContent = narsaNomi;
    liy.className = 'item';
    liy.onclick = function() {
        liy.style.textDecoration = 'line-through'
    }
    ulList.appendChild(liy);

    input.value = ''
})

// liy.remove()

// JS orqali HTML element yaratish.
// document.createElement();
// appendChild();
// const birinchiEl = document.createElement('li');
// birinchiEl.textContent = 'Men yaraldim';
// birinchiEl.className = 'item'
// birinchiEl.style.color = 'white';

// // Button yaratish.
// const tugma = document.createElement('button');
// tugma.textContent = "O'chirish";
// birinchiEl.appendChild(tugma)

// ulList.appendChild(birinchiEl)ere