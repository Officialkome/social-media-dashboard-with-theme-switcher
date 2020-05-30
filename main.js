const darkThemeToggler = document.querySelector('#toggleSwitch');
darkThemeToggler.addEventListener('click', darkTheme);
darkTheme();

function darkTheme() {
    const classArray = document.querySelectorAll(".dark-blue-text");
    console.log(classArray);
    const cardArray = document.querySelectorAll(".card");
    if (darkThemeToggler.checked) {
        document.body.classList.add('body-dark-bg');
        document.querySelector(".header-background").classList.add('header-dark-bg');
        document.querySelector('h2').classList.add("theme-white-text");
        classArray.forEach(element => {
            element.classList.add("theme-white-text");
        });

        cardArray.forEach(element => {
            element.classList.add("card-dark-bg");
        });
    }
    else{
        document.body.classList.remove('body-dark-bg');
        document.querySelector(".header-background").classList.remove('header-dark-bg');
        document.querySelector('h2').classList.remove("theme-white-text");
        classArray.forEach(element => {
            element.classList.remove("theme-white-text");
        });

        cardArray.forEach(element => {
            element.classList.remove("card-dark-bg");
        });
    }
}