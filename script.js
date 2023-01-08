const ham = document.querySelector('#ham')
const nav = document.querySelector('#nav')
let isToggled = false

ham.addEventListener('click', () => {
    isToggled = !isToggled
    nav.classList.toggle('active')
    if (isToggled) {
        ham.src = 'Images/icon-close.svg'
        
    }else{
        ham.src = 'Images/icon-hamburger.svg'
    }
})

const testimonials = document.querySelectorAll('.lingua__testimonial')
const navigations = document.querySelectorAll('.navigation')
const container = document.getElementById('lingua__testimonials-wrapper')
// container.style.transl
container.style.translate = '-40%'
navigations[0].addEventListener('click', () => {
    container.style.translate = '-0%'
})
navigations[1].addEventListener('click', () => {
    container.style.translate = '-20%'
})
navigations[2].addEventListener('click', () => {
    container.style.translate = '-40%'
})
navigations[3].addEventListener('click', () => {
    container.style.translate = '-60%'
})
navigations[4].addEventListener('click', () => {
    container.style.translate = '-80%'
})

for (let i = 0; i < navigations.length; i++) {
    navigations[i].addEventListener('click', () => {
        navigations.forEach(navigation => {
            navigation.classList.remove('active')
        });
        navigations[i].classList.add('active')
    })
}

const accordionMains = document.querySelectorAll('.lingua__faq')

accordionMains.forEach(accordionMain => {
    
    const accordion = accordionMain.querySelector('.lingua__faq-content')
    const header = accordion.querySelector('.lingua__faq-content-header')
    const desc = accordion.querySelector('p')
    const icon = accordion.querySelector('#plus')
    
    
    header.addEventListener('click', () => {
        accordion.classList.toggle('open')
        if (accordion.classList.contains('open')) {
            icon.src = 'Images/Minus.png'
            accordionMain.style.backgroundColor = '#524FD5'
            desc.style.height = `${desc.scrollHeight}px`
        }else{
            accordionMain.style.backgroundColor = '#fff'
            desc.style.height = `0px`
            accordion.style.transition = 'all 0.2s linear'
            icon.src = 'Images/Plus.png'
        }
    })
});
// accordions.forEach((accordion) => {
//     const header = accordion.querySelector('.lingua__faq-content-header')
//     header.addEventListener('click', () => {
//         accordion.classList.toggle('open')
//         // accordion.querySelector('p').style.display = 'block'
//         const desc = accordion.querySelector('p')
//         if (accordion.classList.contains('open')) {
//             desc.style.height = `${desc.scrollHeight}px`
//             accordionMains.forEach(accordionMain => {
                
//                 accordionMain.style.backgroundColor = '#524FD5'
//             });
//         } else {
//             desc.style.height = '0'
//             accordionMains.forEach(accordionMain => {
//                 accordionMain.style.backgroundColor = '#fff'
//             });
//         }
//         console.log(desc)
//     })
// });

