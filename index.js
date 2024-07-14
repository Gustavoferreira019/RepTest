function activateTitleAnimation(titleSelector, sectionSelector) {
    var title = document.querySelector(titleSelector);
    var section = document.querySelector(sectionSelector);
    var titleOrc = document.querySelector('.title-orcamento');
    var sectionOrc = document.querySelector('#contato-id');
    
    if (section.getBoundingClientRect().top < window.innerHeight * 0.1) {
        title.classList.add('active');
    } else {
        title.classList.remove('active');
    }

    if (sectionOrc.getBoundingClientRect().top < window.innerHeight * 0.48) {
        titleOrc.classList.add('active');
    } else {
        titleOrc.classList.remove('active');
    }
}

function handleScroll() {
    activateTitleAnimation('.services-title', '#services-id');
    activateTitleAnimation('.qmfooter-title', '#firm-id');
    activateTitleAnimation('.title-orcamento','#contato-id')
}


window.addEventListener('scroll', handleScroll);


handleScroll();

window.addEventListener('scroll', handleScroll);


handleScroll();

