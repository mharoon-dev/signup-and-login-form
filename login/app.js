// let loginBox = document.querySelector('.login-box');
// let email = document.querySelector('#email')
// let password = document.querySelector('#password')
// let login = document.querySelector('#login')
// let getingDataFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
// let loader = document.querySelector('.loader')

// console.log(getingDataFromLocalStorage);


// login.addEventListener("click", () => {

// let userFound = getingDataFromLocalStorage.find( (user) => {
//         if (email.value == user.email) return user
//     })
//     console.log(userFound);

//     if (userFound) {
//         if (password.value == userFound.password) {
//             // console.log("password match kar gaya hai")

//             // giving data to localStorage
//             localStorage.setItem("loggedinUser" , JSON.stringify(userFound))

//             loginBox.style.display = "none"
//             loader.style.display = "block"
      
//             // window location changing
//             setTimeout(() => {
//               window.location.href = '../home/home.html';
//             }, 3000);
//         } else {
//             // console.log("sorry passowrd match nahi kar raha hai");
//             alert('sorry wrong password')
//         }
        
//     }



// })


// sign in with fire base

import { app , auth , onAuthStateChanged, signInWithEmailAndPassword} from "../utilities/fireBaseConfigs.js"

onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      
    } else {
        window.location = "../home/home.html"
      // ...
    }
  });

let loginHandler = () => {
    let email = document.querySelector('#email') 
    let password = document.querySelector('#password')
    
    console.log(email.value);
    console.log(password.value);

    /// fire base functionality
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('user loged in sucsessfully!')
        window.location = "../home/home.html"
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.code);
        });
}

let login = document.querySelector('#login')
login.addEventListener('click' , loginHandler)