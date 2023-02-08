const navIcon = document.querySelector('.nav-icon');
const pageTopWrapper = document.querySelector('.page-top__wrapper');
const delay = document.querySelector('.page__top-delay');

const navLinks = document.querySelectorAll('.nav-mobile__list a');



navIcon.addEventListener ('click', function() {
    this.classList.toggle('nav-icon--active');
    pageTopWrapper.classList.toggle('page-top__wrapper--active');
    delay.classList.toggle('page__top-delay--active');
    document.body.classList.toggle('lock');
})

navLinks.forEach(function(item){
    item.addEventListener('click', function () { 
        pageTopWrapper.classList.remove('page-top__wrapper--active');
        navIcon.classList.remove('nav-icon--active');
        delay.classList.remove('page__top-delay--active');
        document.body.classList.remove('lock');
     })
})

const btnBack =document.querySelector('#backtop');

btnBack.style.opacity = 0;

document.addEventListener('scroll', function(){
    if (window.pageYOffset > 500) {
        btnBack.style.opacity = 1;
    } else {
        btnBack.style.opacity = 0;
    }
});



const formItems = document.querySelectorAll('.form__input');

console.log(formItems);

formItems.forEach(item=>{
    const placeholder = item.previousElementSibling;
    item.addEventListener('focus', function(){
        placeholder.classList.add('active');
    })

    item.addEventListener('blur', function(){
        if (item.value.length > 0) {
            placeholder.classList.add('active');
        } else {
            placeholder.classList.remove('active');
        }
    })
})