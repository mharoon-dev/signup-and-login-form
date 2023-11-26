let name = document.querySelector('#name');
let email = document.querySelector('#email')
let password = document.querySelector('#password');
let conformPassword = document.querySelector('#conformPassword');
let submit = document.querySelector('#submit')


let getingDataFromLocalStorage = JSON.parse(localStorage.getItem("userInfo"))
let userInfo = getingDataFromLocalStorage || []

submit.addEventListener("click", () => {

// userInput empty condition
if (name.value == '' || email.value == '' || password.value == '' || conformPassword.value == '') {
    alert('Please fill the form completely!');
} else if (password.value !== conformPassword.value)  { // password and conform password matching
    alert("password and conform password are not equal!")
} else {
    // checking user name and email
let userAlreadyTakeIn = userInfo.find( (user) => {
    if (name.value === user.name || email.value === user.email) return user  
})
    
if (!userAlreadyTakeIn) {
    let user = {
        name:name.value,
        email: email.value,
            password: password.value,
            conformPassword: conformPassword.value
        }
        
        userInfo.push(user);
        localStorage.setItem("usersInfo" ,JSON.stringify(userInfo))
        console.log(userInfo);
        
        name.value = ''
        email.value = ''
        password.value = ''
        conformPassword.value = ''
        
        // window.location.href = '../login/login.html'
} else {
        alert("Sorry, this username or email is already taken!")
    }
}

});



                
                
                
                
                
                


                







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
// jonas.calcAge()
// console.log(matilda);