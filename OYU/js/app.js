// let dropdown_cont = document.querySelector('.dropdown_descr_container')
let f = document.querySelector('.f')
let s = document.querySelector('.s')
let th = document.querySelector('.th')
let fo = document.querySelector('.fo')

let dropdown_descr = document.querySelector('.dropdown_descr')
let dropdown_descrS = document.querySelector('.dropdown_descrS')
let dropdown_descrTh = document.querySelector('.dropdown_descrTh')
let dropdown_descrFo = document.querySelector('.dropdown_descrFo')

let text = document.createElement('p')
let text2 = document.createElement('p')
let text3 = document.createElement('p')
let text4 = document.createElement('p')

let dropdown_descr_container = document.querySelector('.dropdown_descr_container')
let dropdown_descr_containerS = document.querySelector('.dropdown_descr_containerS')
let dropdown_descr_containerTh = document.querySelector('.dropdown_descr_containerTh')
let dropdown_descr_containerFo = document.querySelector('.dropdown_descr_containerFo')

let arrow_down = document.querySelector('.arrow_down')
let arrow_downS = document.querySelector('.arrow_downS')
let arrow_downTh = document.querySelector('.arrow_downTh')
let arrow_downFo = document.querySelector('.arrow_downFo')

let arrow_up = document.createElement('img')
let arrow_upS = document.createElement('img')
let arrow_upTh = document.createElement('img')
let arrow_upFo = document.createElement('img')

arrow_up.setAttribute('src', 'img/arrow_up.png')
arrow_up.setAttribute('class', 'arrow_down')

arrow_upS.setAttribute('src', 'img/arrow_up.png')
arrow_upS.setAttribute('class', 'arrow_down')

arrow_upTh.setAttribute('src', 'img/arrow_up.png')
arrow_upTh.setAttribute('class', 'arrow_down')

arrow_upFo.setAttribute('src', 'img/arrow_up.png')
arrow_upFo.setAttribute('class', 'arrow_down')




let dropdown = () => {
    
    if (f.classList.toggle('.f')) {
        f.style.backgroundColor = '#ffffff'
        f.style.border = '1px solid black'
        f.style.transition = 'all 1s'
        dropdown_descr.style.color = '#032539'
        
        text.innerHTML = 'Наши декоративные деревянные изделия предоставляют возможность придать вашему интерьеру уникальный стиль и эстетику. Они добавляют красоту и изящество.'
        
        text.setAttribute('class', 't')
        
        f.append(text)
        arrow_down.remove()

        dropdown_descr_container.append(arrow_up)  
    } 
    else {
        text.remove()
        f.style.backgroundColor = '#032539'
        f.style.border = 'none'
        f.style.transition = 'all 1s'
        dropdown_descr.style.color = '#ffffff'
        dropdown_descr_container.append(arrow_down)
        arrow_up.remove()
    }
}

f.addEventListener('click', dropdown)


let dropdownS = () => {
    
    if (s.classList.toggle('.s')) {
        s.style.backgroundColor = '#ffffff'
        s.style.border = '1px solid black'
        s.style.transition = 'all 1s'
        dropdown_descrS.style.color = '#032539'
        
        text2.innerHTML = 'Мы предоставляем декоративные деревянные изделия, изготовленные из натурального дерева, что подчеркивает их натуральность и экологичность.'
        
        text2.setAttribute('class', 't')
        
        s.append(text2)
        arrow_downS.remove()

        dropdown_descr_containerS.append(arrow_upS)
    } 
    else {
        text2.remove()
        s.style.backgroundColor = '#032539'
        s.style.border = 'none'
        s.style.transition = 'all 1s'
        dropdown_descrS.style.color = '#ffffff'
        dropdown_descr_containerS.append(arrow_downS)
        arrow_upS.remove()
    }
}
s.addEventListener('click', dropdownS)


let dropdownTh = () => {
    
    if (th.classList.toggle('.th')) {
        th.style.backgroundColor = '#ffffff'
        th.style.border = '1px solid black'
        th.style.transition = 'all 1s'
        dropdown_descrTh.style.color = '#032539'
        
        text3.innerHTML = 'Все наши изделия изготавливаются с использованием высококачественных материалов и с пристальным вниманием к деталям. Это гарантирует высокое качество и долговечность каждого изделия.'
        
        text3.setAttribute('class', 't')
        
        th.append(text3)
        arrow_downTh.remove()

        dropdown_descr_containerTh.append(arrow_upTh)
    } 
    else {
        text3.remove()
        th.style.backgroundColor = '#032539'
        th.style.border = 'none'
        th.style.transition = 'all 1s'
        dropdown_descrTh.style.color = '#ffffff'
        dropdown_descr_containerTh.append(arrow_downTh)
        arrow_upTh.remove()
    }  
}
th.addEventListener('click', dropdownTh)


let dropdownFo = () => {
    
    if (fo.classList.toggle('.fo')) {
        fo.style.backgroundColor = '#ffffff'
        fo.style.border = '1px solid black'
        fo.style.transition = 'all 1s'
        dropdown_descrFo.style.color = '#032539'
        
        text4.innerHTML = 'НКаждое изделие, созданное нами, уникально. Мы гордимся индивидуальными деталями и ручной работой, что делает каждое изделие особенным и неповторимым.'
        
        text4.setAttribute('class', 't')
        
        fo.append(text4)
        arrow_downFo.remove()

        dropdown_descr_containerFo.append(arrow_upFo)
    } 
    else {
        text4.remove()
        fo.style.backgroundColor = '#032539'
        fo.style.border = 'none'
        fo.style.transition = 'all 1s'
        dropdown_descrFo.style.color = '#ffffff'
        dropdown_descr_containerFo.append(arrow_downFo)
        arrow_upFo.remove()
    } 
}
fo.addEventListener('click', dropdownFo)
