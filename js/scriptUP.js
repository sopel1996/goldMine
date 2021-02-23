//main stone
const stone = document.querySelectorAll('.stoneTitle');
const stoneContainer = document.querySelectorAll('.stone');
//main sign up
const signUp = document.querySelector('.signUp');

//myMine elements
const stonesLvl = document.querySelector('.stoneLvl');
const woodTables = document.querySelector('.woodTables');




//username banner
const user = document.querySelector('.user');
//UP NAV
const nav = document.querySelector('.nav');
//columns
const columnsAll = document.querySelector('.columns');
const columns = document.querySelectorAll('.column');
const bigBanner = document.querySelector('.bigBanner');
//columns content
const optionsContainer = document.querySelector('.optionsContainer');
const refContainer = document.querySelector('.refContainer');
const accountingContainer = document.querySelector('.accountingContainer');
const myMine = document.querySelectorAll('.myMine');
const myGold = document.querySelectorAll('.myGold');

//ref banner
const refers = document.querySelector('.refBtn');
const banners = document.querySelector('.refBanner');
const operation = document.querySelector('.allOperation');

//footer navigation
const footerNav = document.querySelector('.footerMenuSocialLang').children[0];

//modal
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.cancel');
const popUpDesk = document.querySelectorAll('.popup');
const signUpPopUp = document.querySelector(".popupSignUp");
const newsPopUp = document.querySelector(".popupNews");
const aboutUsPopUp = document.querySelector(".popupAboutUs");
const contactsPopUp = document.querySelector(".popupContacts");
const helpPopUp = document.querySelector(".popupHelp");
const forgotPass = document.querySelector(".forgotPass");
const forgotPassContainer = document.querySelector(".forgotPassContainer");
const allOperationContainer = document.querySelector(".popupAllOperation");


window.onload = function () {
    document.body.classList.add('loadedHiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loadedHiding');
    }, 500);
}


const showItem = evt => {
    evt.preventDefault();

    const target = evt.target;

    if (target.textContent.toLowerCase() == "моя шахта") {

        stonesLvl.classList.remove('hide');
        woodTables.classList.remove('hide');
        columnsAll.classList.add('hide');


        if (!target.classList.contains('active')) {
            target.classList.add('active');
        }
        for (var i = 0; i < nav.children.length; i++) {
            if (nav.children[i].textContent.toLowerCase() != "моя шахта") {
                nav.children[i].classList.remove('active');
            }
        }

        user.classList.remove('hide');
        for (var i = 0; i < myMine.length; i++) {
            myMine[i].classList.remove('hide');
        }
        for (var i = 0; i < columns.length; i++) {
            columns[i].classList.remove('hide');
        }

        bigBanner.classList.add('hide');
        optionsContainer.classList.add('hide');
        refContainer.classList.add('hide');
        accountingContainer.classList.add('hide');
        for (var i = 0; i < myGold.length; i++) {
            myGold[i].classList.add('hide');
        }



    }
    if (target.textContent.toLowerCase() == "золото") {

        stonesLvl.classList.add('hide');
        woodTables.classList.add('hide');
        columnsAll.classList.remove('hide');


        if (!target.classList.contains('active')) {
            target.classList.add('active');
        }
        for (var i = 0; i < nav.children.length; i++) {
            if (nav.children[i].textContent.toLowerCase() != "золото") {
                nav.children[i].classList.remove('active');
            }
        }


        for (var i = 0; i < myGold.length; i++) {
            myGold[i].classList.remove('hide');
        }
        for (var i = 0; i < columns.length; i++) {
            columns[i].classList.remove('hide');
        }

        user.classList.add('hide');
        bigBanner.classList.add('hide');
        optionsContainer.classList.add('hide');
        refContainer.classList.add('hide');
        accountingContainer.classList.add('hide');
        for (var i = 0; i < myMine.length; i++) {
            myMine[i].classList.add('hide');
        }

    }
    if (target.textContent.toLowerCase() == "учет") {

        stonesLvl.classList.add('hide');
        woodTables.classList.add('hide');
        columnsAll.classList.remove('hide');

        if (!target.classList.contains('active')) {
            target.classList.add('active');
        }
        for (var i = 0; i < nav.children.length; i++) {
            if (nav.children[i].textContent.toLowerCase() != "учет") {
                nav.children[i].classList.remove('active');
            }
        }
        bigBanner.classList.remove('hide');
        accountingContainer.classList.remove('hide');


        columns[1].classList.add('hide');
        user.classList.add('hide');
        optionsContainer.classList.add('hide');
        refContainer.classList.add('hide');
        for (var i = 0; i < myMine.length; i++) {
            myMine[i].classList.add('hide');
        }
        for (var i = 0; i < myGold.length; i++) {
            myGold[i].classList.add('hide');
        }

    }
    if (target.textContent.toLowerCase() == "работники") {

        stonesLvl.classList.add('hide');
        woodTables.classList.add('hide');
        columnsAll.classList.remove('hide');

        if (!target.classList.contains('active')) {
            target.classList.add('active');
        }
        for (var i = 0; i < nav.children.length; i++) {
            if (nav.children[i].textContent.toLowerCase() != "работники") {
                nav.children[i].classList.remove('active');
            }
        }

        bigBanner.classList.remove('hide');
        refContainer.classList.remove('hide');

        columns[1].classList.add('hide');
        user.classList.add('hide');
        optionsContainer.classList.add('hide');
        accountingContainer.classList.add('hide');
        for (var i = 0; i < myMine.length; i++) {
            myMine[i].classList.add('hide');
        }
        for (var i = 0; i < myGold.length; i++) {
            myGold[i].classList.add('hide');
        }

    }
    if (target.textContent.toLowerCase() == "настройки") {

        stonesLvl.classList.add('hide');
        woodTables.classList.add('hide');
        columnsAll.classList.remove('hide');

        if (!target.classList.contains('active')) {
            target.classList.add('active');
        }
        for (var i = 0; i < nav.children.length; i++) {
            if (nav.children[i].textContent.toLowerCase() != "настройки") {
                nav.children[i].classList.remove('active');
            }
        }

        bigBanner.classList.remove('hide');
        optionsContainer.classList.remove('hide');

        columns[1].classList.add('hide');
        user.classList.add('hide');
        refContainer.classList.add('hide');
        accountingContainer.classList.add('hide');
        for (var i = 0; i < myMine.length; i++) {
            myMine[i].classList.add('hide');
        }
        for (var i = 0; i < myGold.length; i++) {
            myGold[i].classList.add('hide');
        }

    }
}
//TODO: signUpPopUp - убрать где не надо или добавить if
const popUp = evt => {
    evt.preventDefault();
    const target = evt.target;
    if (target.textContent.toLowerCase() == "ваши реферальные баннеры") {
        modal.classList.add('modalActive');
    }
    if (target.textContent.toLowerCase() == "все операции") {
        forgotPassContainer.classList.add('hide');
        //signUpPopUp.classList.add('hide');
        aboutUsPopUp.classList.add('hide');
        contactsPopUp.classList.add('hide');
        helpPopUp.classList.add('hide');
        newsPopUp.classList.add('hide');
        allOperationContainer.classList.remove('hide');

        modal.classList.add('modalActive');

    }
    if (target.textContent.toLowerCase() == "ваши работники") {
        modal.classList.add('modalActive');
    }

    if (target.textContent.toLowerCase() == "забыли пароль?") {
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


    if (target.textContent.toLowerCase() == "новости") {
        forgotPassContainer.classList.add('hide');
        signUpPopUp.classList.add('hide');
        aboutUsPopUp.classList.add('hide');
        contactsPopUp.classList.add('hide');
        helpPopUp.classList.add('hide');
        newsPopUp.classList.remove('hide');

        modal.classList.add('modalActive');
    }
    if (target.textContent.toLowerCase() == "о нас") {
        forgotPassContainer.classList.add('hide');
        signUpPopUp.classList.add('hide');
        newsPopUp.classList.add('hide');
        contactsPopUp.classList.add('hide');
        helpPopUp.classList.add('hide');
        aboutUsPopUp.classList.remove('hide');

        modal.classList.add('modalActive');
    }
    if (target.textContent.toLowerCase() == "контакты") {
        forgotPassContainer.classList.add('hide');
        signUpPopUp.classList.add('hide');
        newsPopUp.classList.add('hide');
        aboutUsPopUp.classList.add('hide');
        helpPopUp.classList.add('hide');
        contactsPopUp.classList.remove('hide');

        modal.classList.add('modalActive');
    }
    if (target.textContent.toLowerCase() == "помощь") {
        forgotPassContainer.classList.add('hide');
        signUpPopUp.classList.add('hide');
        newsPopUp.classList.add('hide');
        aboutUsPopUp.classList.add('hide');
        contactsPopUp.classList.add('hide');
        helpPopUp.classList.remove('hide');

        modal.classList.add('modalActive');
    }
    if (target.textContent.toLowerCase() == "регистрация") {
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
    if (target.classList.contains('cancel') || target.classList.contains('modal')) {
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
if (stone.length!=0){
    for (var i = 0; i < stone.length; i++) {
        stone[i].addEventListener('click', popUp);
    }
   
    signUp.addEventListener('click', popUp);
    forgotPass.addEventListener('click', popUp);
} else{
    for (var i = 0; i < nav.children.length; i++) {
        nav.children[i].addEventListener('click', showItem);
    }
    refers.addEventListener('click', popUp);
    operation.addEventListener('click', popUp); 
    banners.addEventListener('click', popUp);
}

modal.addEventListener('click', popUp);

closeModal.addEventListener('click', popUp);
footerNav.addEventListener('click', popUp);