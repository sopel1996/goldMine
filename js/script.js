const stone = document.querySelectorAll('.stoneTitle');
const stoneContainer = document.querySelectorAll('.stone');
const footerNav = document.querySelector('.footerMenuSocialLang').children[0];
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.cancel');
const signUp = document.querySelector('.signUp');
const popUpDesk = document.querySelectorAll('.popup');

const signUpPopUp= document.querySelector(".popupSignUp");
const newsPopUp= document.querySelector(".popupNews");
const aboutUsPopUp= document.querySelector(".popupAboutUs");
const contactsPopUp= document.querySelector(".popupContacts");
const helpPopUp= document.querySelector(".popupHelp");
const forgotPassContainer= document.querySelector(".forgotPassContainer");

const forgotPass= document.querySelector(".forgotPass");


window.onload = function () {
    document.body.classList.add('loadedHiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loadedHiding');
    }, 500);
  }


const popUp = evt => {
    // evt.preventDefault();

    const target = evt.target;

    if (target.textContent.toLowerCase()=="забыли пароль?"){
        signUpPopUp.classList.add('hide');
        newsPopUp.classList.add('hide');
        aboutUsPopUp.classList.add('hide');
        contactsPopUp.classList.add('hide');
        helpPopUp.classList.add('hide');
        
        popUpDesk[1].classList.add('modalSignUp');
        popUpDesk[0].classList.add('modalSignUp');
        closeModal.classList.add('closeModalSignUp');

        forgotPassContainer.classList.remove('hide');

        modal.classList.add('modalActive');
    }
    if (target.textContent.toLowerCase()=="новости") {
        forgotPassContainer.classList.add('hide');
        signUpPopUp.classList.add('hide');
        aboutUsPopUp.classList.add('hide');
        contactsPopUp.classList.add('hide');
        helpPopUp.classList.add('hide');
        newsPopUp.classList.remove('hide');

        modal.classList.add('modalActive');
    }
    if (target.textContent.toLowerCase()=="о нас") {
        forgotPassContainer.classList.add('hide');
        signUpPopUp.classList.add('hide');
        newsPopUp.classList.add('hide');
        contactsPopUp.classList.add('hide');
        helpPopUp.classList.add('hide');
        aboutUsPopUp.classList.remove('hide');

        modal.classList.add('modalActive');
    }
    if (target.textContent.toLowerCase()=="контакты") {
        forgotPassContainer.classList.add('hide');
        signUpPopUp.classList.add('hide');
        newsPopUp.classList.add('hide');
        aboutUsPopUp.classList.add('hide');
        helpPopUp.classList.add('hide');
        contactsPopUp.classList.remove('hide');

        modal.classList.add('modalActive');
    }
    if (target.textContent.toLowerCase()=="помощь") {
        forgotPassContainer.classList.add('hide');
        signUpPopUp.classList.add('hide');
        newsPopUp.classList.add('hide');
        aboutUsPopUp.classList.add('hide');
        contactsPopUp.classList.add('hide');
        helpPopUp.classList.remove('hide');

        modal.classList.add('modalActive');
    }
    if (target.textContent.toLowerCase()=="регистрация") {
        forgotPassContainer.classList.add('hide');
        newsPopUp.classList.add('hide');
        aboutUsPopUp.classList.add('hide');
        contactsPopUp.classList.add('hide');
        helpPopUp.classList.add('hide');
        signUpPopUp.classList.remove('hide');

        popUpDesk[1].classList.add('modalSignUp');
        popUpDesk[0].classList.add('modalSignUp');
        closeModal.classList.add('closeModalSignUp');
        modal.classList.add('modalActive');
    }
    if (target.classList.contains('cancel') || target.classList.contains('modal')){
        modal.classList.remove('modalActive');
        popUpDesk[1].classList.remove('modalSignUp');
        popUpDesk[0].classList.remove('modalSignUp');
        closeModal.classList.remove('closeModalSignUp');

        forgotPassContainer.classList.remove('hide');
        signUpPopUp.classList.remove('hide');
        newsPopUp.classList.remove('hide');
        aboutUsPopUp.classList.remove('hide');
        contactsPopUp.classList.remove('hide');
        helpPopUp.classList.remove('hide');
    }
}

const resize = evt =>{
    const target = evt.target;
    // console.log(evt.relatedTarget.tagName);
    let tmp = target.offsetWidth; 

    if(evt.type == "mouseover" && (evt.relatedTarget.tagName=="MAIN" ||evt.relatedTarget.tagName=="OBJECT" )){
        
        target.style.width=`calc(${tmp}px + 1vw)`;
    
    }else if(evt.type == "mouseout" && (evt.relatedTarget.tagName=="MAIN" ||evt.relatedTarget.tagName=="OBJECT" )){
        target.style.width=`calc(${tmp}px - 1vw)`;
    }
}

// for (var i=0; i<stone.length; i++){
//     stone[i].addEventListener('click', popUp);
//     stoneContainer[i].addEventListener('mouseover', resize);
//     stoneContainer[i].addEventListener('mouseout', resize);
// }

footerNav.addEventListener('click', popUp);
closeModal.addEventListener('click', popUp);
modal.addEventListener('click', popUp);
signUp.addEventListener('click', popUp);
forgotPass.addEventListener('click', popUp);
