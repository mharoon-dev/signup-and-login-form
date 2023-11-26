let name = document.querySelector('#name');
let email = document.querySelector('#email')
let password = document.querySelector('#password');
let conformPassword = document.querySelector('#conformPassword');
let submit = document.querySelector('#submit')


let storedUserInfo = localStorage.getItem("userinfo");
let userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : [];

// submit.addEventListener("click", () => {
//     if (name.value == '' || email.value == ''  || password.value == ''  || conformPassword.value == '') {
//         alert('please fill the form  completely!')
//     } else if (password.value !== conformPassword.value)  {
//         alert("password and conform password are not equal!")
//     } else {
//         let user = {
//             name:name.value,
//             email:email.value,
//             password:password.value,
//             conformPassword:conformPassword.value
//         }

//         // userInfo.push(user)
//         localStorage.setItem("userinfo", JSON.stringify(userInfo));
//         console.log(userInfo);


        

//         name.value = ''
//         email.value = ''
//         password.value = ''
//         conformPassword.value = ''
//     }

// })



submit.addEventListener("click", () => {
    if (name.value == '' || email.value == '' || password.value == '' || conformPassword.value == '') {
        alert('Please fill the form completely!');
    } else if (password.value !== conformPassword.value) {
        alert("Password and confirm password are not equal!");
    } else {
        let user = {
            name: name.value,
            email: email.value,
            password: password.value,
            conformPassword: conformPassword.value
        };

        // Push the new user data into the array
        userInfo.push(user);

        // Update the stored user information in localStorage
        localStorage.setItem("userinfo", JSON.stringify(userInfo));

        console.log(userInfo);

        // Clear the input fields
        name.value = '';
        email.value = '';
        password.value = '';
        conformPassword.value = '';
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
// // jonas.calcAge()
// // console.log(matilda);


