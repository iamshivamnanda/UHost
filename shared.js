const backdrop = document.querySelector('.backdrop');
const modal  = document.querySelector('.modal');
const modalnobttn = document.querySelector('.modal .modal__action--negative');
const planbttns = document.querySelectorAll('.plan button');

const tooglebttn = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

const planbttnhandler = ()=>{
    modal.classList.add('open');
    backdrop.classList.add('open');
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
}
const closemodal = ()=>{
    if(modal){
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

for(planbttn of planbttns){
    planbttn.addEventListener('click',planbttnhandler)
}

backdrop.addEventListener('click', ()=>{
    mobileNav.classList.remove('open');
    closemodal();
}
);
if(modalnobttn){

    modalnobttn.addEventListener('click',closemodal);
}


tooglebttn.addEventListener('click',tooglebttnhandler);

function tooglebttnhandler() {
    mobileNav.classList.add('open');

    backdrop.classList.add('open');

  }


// backdrop.style.display = 'block';
