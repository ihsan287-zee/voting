let userInput = document.getElementById("age-input");
let btnValidate = document.getElementById("btn");
let message = document.getElementById("display");


btnValidate.addEventListener('click',()=>{
    if (userInput.value >= 18) {
        message.innerHTML = "Congratulations, you are Eligible";
        message.style.color = "green";
    }else{
        message.innerHTML = "Sorry, you are not Eligible";
        message.style.color = "red";
    }
})