function matnniOzgartir() {
            let matn = document.getElementById("matn");
            matn.textContent = "Matn muvaffaqiyatli o'zgartirildi!";
        }
        
        function rangniQizil() {
            let matn = document.getElementById("matn");
            matn.style.color = "red";
        }
        
        function rangniYashil() {
            let matn = document.getElementById("matn");
            matn.style.color = "green";
        }
        
        function rangniKuk() {
            let matn = document.getElementById("matn");
            matn.style.color = "blue";
        }
        
        function kattalikniOzgartir() {
            let sarlavha = document.getElementById("sarlavha");
            sarlavha.style.fontSize = "40px";
        }
        
        function aslHolatgaQaytar() {
            let matn = document.getElementById("matn");
            let sarlavha = document.getElementById("sarlavha");
            
            matn.textContent = "Bu matn o'zgaradi";
            matn.style.color = "black";
            sarlavha.style.fontSize = "32px";
        }