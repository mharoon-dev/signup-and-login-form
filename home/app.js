let body = document.querySelector('body')
let navbar = document.querySelector('.navbar')
let loader = document.querySelector('.loader')
let userName = document.querySelector('#userName')
let userNameForBrowser = document.querySelector('#userNameForBrowser')

// name of the user on the browser
userName.innerHTML = JSON.parse(localStorage.getItem('loggedinUser')).name
userNameForBrowser.innerHTML = JSON.parse(localStorage.getItem('loggedinUser')).name


// geting data from localStorage
let getLoggedInUser = JSON.parse(localStorage.getItem('loggedinUser'))
console.log(getLoggedInUser);

// logout button and function on it
let logoutBtn = document.querySelector('#logoutBtn')
logoutBtn.addEventListener('click', () => {

    // Remove the 'loggedinUser' item from localStorage
    localStorage.removeItem('loggedinUser');

    // styling on the logout 
    navbar.style.display = "none"
    loader.style.display = "block"
    body.style.height = "100vh"
    body.style.display = "flex"
    body.style.justifyContent = "center"
    body.style.alignItems = "center"
  
    // change the location of window
    setTimeout(() => {
        window.location.href = "../login/login.html"
    }, 3000);

});