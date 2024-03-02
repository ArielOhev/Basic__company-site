const section1 = document.querySelector('#section--3');
const btnScrollTo = document.querySelector('.header__btn');
const homeBtn = document.querySelectorAll('.home__btn');
const contactForm = document.querySelector('.modal');
const closeModal = document.querySelector('.btn--close-modal');
const sendInfo = document.querySelector('#send')
const overlay = document.querySelector('.overlay')




btnScrollTo.addEventListener('click', function(e) {
    e.preventDefault();
    section1.scrollIntoView({
        behavior: 'smooth'
    });
})

///////////////////////////////
//contact with us form
const clickedContact = function() {
    homeBtn.forEach(button => {

        button.addEventListener('click', function(e) {
            e.preventDefault();
            contactForm.classList.remove('hidden');
            overlay.classList.remove('hidden');
            // overlay.classList.add('hidden');
        })
    })
}
const exitContact = function() {
    closeModal.addEventListener('click', function(e) {
        e.preventDefault();
        contactForm.classList.add('hidden');
        overlay.classList.add('hidden');
    })
    sendInfo.addEventListener('click', function(e) {
        e.preventDefault();
        contactForm.classList.add('hidden');
        overlay.classList.add('hidden');
    })


}

clickedContact();
exitContact();