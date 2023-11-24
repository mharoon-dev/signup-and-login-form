let name = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let conformPassword = document.querySelector('#conformPassword')
let submit = document.querySelector('#submit')

let namesArray = []
let emailArray = []
let passwordArray = []
let conformPasswordArray = []

submit.addEventListener("click", () => {
    if (name.value == '' || email.value == ''  || password.value == ''  || conformPassword.value == '') {
        alert('please fill the form  completely!')
    } else if (password.value !== conformPassword.value)  {
        alert("password and conform password are not equal!")
    } else {
        console.log("done");
    }


    namesArray.unshift(name.value)
    emailArray.unshift(email.value)
    passwordArray.unshift(password.value)
    conformPasswordArray.unshift(conformPassword.value)
    console.log(namesArray);
    console.log(emailArray);
    console.log(passwordArray);
    console.log(conformPasswordArray);

})


























// const jonas = {
//     year: 1995,
//     name: "jonas",
//     calcAge: function () {
//         console.log(this);  
//     }
// }

// const matilda = {
//     year: 1991,
//     name: "matilda"
// }
// matilda.calcAge = jonas.calcAge
// matilda.calcAge()
// // jonas.calcAge()
// // console.log(matilda);


