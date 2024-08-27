alert('luv u!!!!!!!!!!!!!!!!!!!!!!')
let bt = document.querySelector('.cl')
let hide = document.querySelector('.button')
let swiperShow = document.querySelector('.ko')


let show = () => {
    swiperShow.style.display = 'block'
    hide.style.display = 'none'
}

bt.addEventListener('click', show)  
