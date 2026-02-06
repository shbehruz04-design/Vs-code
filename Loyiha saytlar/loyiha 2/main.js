const hisoblash = document.getElementById("calculate");
hisoblash.addEventListener("click", function (){
    let yosh = Number(document.getElementById("age").value)
    let natija =  2025 - yosh
    document.getElementById("answer").textContent = `Your age is ${natija} years old`
} 
    
)