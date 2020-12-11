const stone = document.querySelectorAll('.stoneTitle');
const footerNav = document.querySelector('.footerMenuSocialLang').children[0];
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.cancel');
const signUp = document.querySelector('.signUp');
const popUpDesk = document.querySelectorAll('.popup');

const popUp = evt => {
    // evt.preventDefault();

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
    if (target.textContent.toLowerCase()=="регистрация") {
        modal.classList.add('modalActive');
        popUpDesk[1].classList.add('modalSignUp');
        popUpDesk[0].classList.add('modalSignUp');
        closeModal.classList.add('closeModalSignUp');
    }
    if (target.classList.contains('cancel') || target.classList.contains('modal')){
        modal.classList.remove('modalActive');
        popUpDesk[1].classList.remove('modalSignUp');
        popUpDesk[0].classList.remove('modalSignUp');
        closeModal.classList.remove('closeModalSignUp');
    }
}

for (var i=0; i<stone.length; i++){
    stone[i].addEventListener('click', popUp);
}

footerNav.addEventListener('click', popUp);
closeModal.addEventListener('click', popUp);
modal.addEventListener('click', popUp);
signUp.addEventListener('click', popUp);
