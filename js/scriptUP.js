const columns = document.querySelectorAll('.column');
const bigBanner = document.querySelector('.bigBanner');
const optionsContainer = document.querySelector('.optionsContainer');
const refContainer = document.querySelector('.refContainer');
const accountingContainer = document.querySelector('.accountingContainer');
const myMine = document.querySelectorAll('.myMine');
const myGold = document.querySelectorAll('.myGold');
const user = document.querySelector('.user');

const nav = document.querySelector('.nav');

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.cancel');

const refers = document.querySelector('.refBtn');
const banners = document.querySelector('.refBanner');
const operation = document.querySelector('.allOperation');

const showItem = evt => {
    evt.preventDefault();

    const target = evt.target;

    // console.log(target);

    if (target.textContent.toLowerCase() == "моя шахта") {
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

const popUp = evt => {
    evt.preventDefault();

    console.log(target.textContent.toLowerCase());
    if (target.textContent.toLowerCase() == "ваши реферальные баннеры") {
        modal.classList.add('modalActive');
    }
    if (target.textContent.toLowerCase() == "все операции") {
        modal.classList.add('modalActive');
    }
    if (target.textContent.toLowerCase() == "ваши работники") {
        modal.classList.add('modalActive');
    }
    if (target.classList.contains('cancel') || target.classList.contains('modal')) {
        modal.classList.remove('modalActive');
    }


}

for (var i = 0; i < nav.children.length; i++) {
    nav.children[i].addEventListener('click', showItem);
}

refers.addEventListener('click', popUp);
operation.addEventListener('click', popUp);
banners.addEventListener('click', popUp);
modal.addEventListener('click', popUp);
closeModal.addEventListener('click', popUp);
