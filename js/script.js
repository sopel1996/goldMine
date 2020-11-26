const stone = document.querySelectorAll('.stoneTitle');
const footerNav = document.querySelector('.footerMenuSocialLang').children[0];
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.cancel');

const popUp = evt => {
    evt.preventDefault();

    const target = evt.target;

    
    if (target.textContent.toLowerCase()=="новости") {
        modal.classList.add('modalActive');
    }
    if (target.textContent.toLowerCase()=="о нас") {
        modal.classList.add('modalActive');
    }
    if (target.textContent.toLowerCase()=="контакты") {
        modal.classList.add('modalActive');
    }
    if (target.textContent.toLowerCase()=="помощь") {
        modal.classList.add('modalActive');
    }
    if (target.classList.contains('cancel') || target.classList.contains('modal')){
        modal.classList.remove('modalActive');
    }
}

for (var i=0; i<stone.length; i++){
    stone[i].addEventListener('click', popUp);
}

footerNav.addEventListener('click', popUp);
closeModal.addEventListener('click', popUp);
modal.addEventListener('click', popUp);
