        let userName = prompt("Ismingizni kiriting:");
        let userAge = prompt("Yoshingizni kiriting:");
        let userSchool = prompt("Qaysi maktabda oqiysiz?");
        let userSubject = prompt("Sevimli faningiz qaysi?");

        document.getElementById("userName").innerText = userName ||  "Aniqlanmagan";
        document.getElementById("age").innerText = userAge ||  "Aniqlanmagan";
        document.getElementById("school").innerText = userSchool ||  "Aniqlanmagan";
        document.getElementById("subject").innerText = userSubject ||  "Aniqlanmagan";


      
        function addGame() {
            let game = document.getElementById("gameInput").value.trim();
            if (game === "") return alert("O'yin nomini kiriting!");

            let div = document.createElement("div");
            div.className = "game-item";
            div.textContent = "🎮 " + game;

            document.getElementById("gameList").appendChild(div);

            document.getElementById("gameInput").value = "";
        }
        function color() {
            document.body.style.backgroundColor = "violet" 
            alert ("Rang O'zgardi🎨")

        }
        function randomGame() {
            alert("Bugun 'Among Us' o'ynashni tavsiya qilaman! 🎲")
        }
        function salom(){
            alert('Salom! 👋')
        }
        function latifa(){
            alert("Dasturchi nima uchun qorong'uda ishlaydi? Chunki u light mode ni yoqtirmaydi! 💡") ||  alert("JavaScript nima uchun yaxshi? Chunki u har doim fun! 🎉") || alert("Nima uchun kompyuter hech qachon sovuq bo'lmaydi? Chunki u har doim Windows ichida! 😄")
        }