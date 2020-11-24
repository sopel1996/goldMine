const stone = document.querySelectorAll('.stone');

const footerNav = document.querySelector('.footerMenuSocialLang').children[0];

const popUp = evt => {
    evt.preventDefault();

    const target = evt.target;
    
    if (target.textContent.toLowerCase()=="новости") {
        console.log("asfafasd")
    }
    if (target.textContent.toLowerCase()=="о нас") {
        console.log("123")
    }
    if (target.textContent.toLowerCase()=="контакты") {
        console.log("456")
    }
    if (target.textContent.toLowerCase()=="помощь") {
        console.log("789")
    }
}

for (var i=0; i<stone.length; i++){
    stone[i].addEventListener('click', popUp);
}

footerNav.addEventListener('click', popUp);
