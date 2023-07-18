//the below script is for landing page of my app
let btn_login = document.getElementById('btn');
//console.log(btn_login);
let input_field = document.getElementById('user_name');
let popUp = document.querySelector('.login');
//console.log(popUp);
//console.log(input_field);
btn_login.addEventListener("click", () => {
    if (input_field.value === '') {
        popUp.style.visibility = 'hidden';
        popUp.style.transform = 'translateX(240px)';
        alert('User Name not entered!');
    } else {
        let style_login = `visibility:visible;
        transform: translateX(0px);`;
        popUp.style = style_login;
        setTimeout(() => {
            window.location.assign('main_page.html');
        }, 1000)
    }
})