let loginBox = document.querySelector('.login-box');
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let login = document.querySelector('#login')
let getingDataFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
let loader = document.querySelector('.loader')

console.log(getingDataFromLocalStorage);


login.addEventListener("click", () => {

let userFound = getingDataFromLocalStorage.find( (user) => {
        if (email.value == user.email) return user
    })
    console.log(userFound);

    if (userFound) {
        if (password.value == userFound.password) {
            // console.log("password match kar gaya hai")

            // giving data to localStorage
            localStorage.setItem("loggedinUser" , JSON.stringify(userFound))

            loginBox.style.display = "none"
            loader.style.display = "block"
      
            // window location changing
            setTimeout(() => {
              window.location.href = '../home/home.html';
            }, 3000);
        } else {
            // console.log("sorry passowrd match nahi kar raha hai");
            alert('sorry wrong password')
        }
        
    }



})
