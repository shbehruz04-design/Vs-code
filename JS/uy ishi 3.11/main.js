let yosh = document.getElementById("age")
let all = document.getElementById("allowedAll")
let drive = document.getElementById("driveOnly")
let none = document.getElementById("notAllowed")


all.style.display = "none"
drive.style.display = "none"
none.style.display = "none"
function checkAge() {

    let age = Number(yosh.value)

    all.style.display = "none";
    drive.style.display = "none";   
    none.style.display = "none";


    if (age >= 18 && age<21) {
        drive.style.display = "block"
    } else if (age >= 21){
        all.style.display = "block"
    } else if (age<18&& age>=1){
        none.style.display = "block"
    } else{
        alert("Please add your age!")
    }
}