

ScrollReveal({
    distance: '80px',
    duration: 2000,
    Delay: 200,

});

ScrollReveal().reveal('.font, .container-card',{origin: 'right'});
ScrollReveal().reveal('.photo',{origin: 'left'});

// Typed JS


const typed = new Typed ('.multiple-text',{
    strings: ['Mahasiswa','FrontEnd Developer','UI/UX Design', 'Design Grapich','Vidio Editor'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 100,
    loop: true,
})
