//якоря
const anchors = document.querySelectorAll('.anchor_js')
for (let anchor of anchors) {
    anchor.addEventListener('click' ,(event)=>{
        event.preventDefault();
        const blockClass = anchor.getAttribute('href')
        //закрытие навигации после клика  в моб версии
        if (!document.querySelector('.mobile_nav').classList.contains('passive_sec')){
            document.querySelector('.mobile_nav').classList.add('passive_sec')        
        }
        //сам скролл
        document.querySelector('' + blockClass).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        
    })  
}
//кнопка вверх
let navHeigh = document.querySelector('header').offsetTop
let scrollTop = document.querySelector('.to_top_scroll')

window.onscroll = () => {
    if(window.pageYOffset >= navHeigh){
        scrollTop.classList.remove('passive_sec')
    }
    else {
        scrollTop.classList.add('passive_sec')
    }
    if(window.pageYOffset <= navHeigh + 100){
        scrollTop.classList.add('passive_sec')
    }
}

scrollTop.addEventListener('click',()=>{
    document.querySelector('header').scrollIntoView()
})



//Фокус на форму по клику на услугу
const Servises = document.querySelectorAll('.servise')
for (let servise of Servises){
    servise.addEventListener('click', (event)=>{
        event.preventDefault();
        document.getElementById('us_name').focus()
    })
}


//Навбар 
document.querySelector('header').querySelector('.nav_links .navbar').
addEventListener('click',()=>{
    document.querySelector('.mobile_nav').classList.toggle('passive_sec')
})

