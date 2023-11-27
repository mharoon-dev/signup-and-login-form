let signUpBox = document.querySelector('.signUp-box');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let conformPassword = document.querySelector('#conformPassword');
let submit = document.querySelector('#submit');
let loader = document.querySelector('.loader');

let getingDataFromLocalStorage = JSON.parse(localStorage.getItem('userInfo')) || [];
let userInfo = getingDataFromLocalStorage;

submit.addEventListener('click', () => {
  // userInput empty condition
  if (name.value === '' || email.value === '' || password.value === '' || conformPassword.value === '') {
    alert('Please fill the form completely!');
  } else if (password.value !== conformPassword.value) {     // password and conform password matching
    alert('Password and confirm password are not equal!');
  } else { 
    // checking user name and email
    let userAlreadyTaken = userInfo.find((user) => {
      return name.value === user.name || email.value === user.email;
    });

    if (!userAlreadyTaken) {
      let user = {
        name: name.value,
        email: email.value,
        password: password.value,
        conformPassword: conformPassword.value,
      };

      userInfo.push(user);
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      console.log(userInfo);

      name.value = '';
      email.value = '';
      password.value = '';
      conformPassword.value = '';

      signUpBox.style.display = "none"
      loader.style.display = "block"

    //   window location changing
      setTimeout(() => {
        window.location.href = '../login/login.html';
      }, 3000);
    } else {
      alert('Sorry, this username or email is already taken!');
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