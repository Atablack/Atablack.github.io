const mainContainer = document.querySelector('.main_container')
const goodBtn = document.querySelector('.good_btn')
const badBtn = document.querySelector('.bad_btn')
const animate = document.querySelector('.animate')
const title = document.querySelector('.title')
const answerContainer = document.querySelector('.answer_container')
const yesBtn = document.querySelector('.yes_btn')
const noBtn = document.querySelector('.no_btn')
const dropContainer = document.querySelector('.drop_container')

goodBtn.addEventListener('click', () => {
    animate.style.display = 'block'

    mainContainer.style.transition = "opacity 1s ease-in-out";
    mainContainer.style.opacity = "0";

    setTimeout(() => {
        mainContainer.style.display = "none";
    }, 1000);

    setTimeout(() => {
        answerContainer.style.display = 'flex'

        setTimeout(() => {
            answerContainer.style.opacity = "1";
        }, 50)
    }, 11500)
})
badBtn.style.width = '130px'

badBtn.addEventListener('click', () => {
    if (badBtn.style.width === '130px') {
        badBtn.style.width = '100px'
        badBtn.style.height = '32px'

        goodBtn.style.width = '165px'
        goodBtn.style.height = '48px'
        goodBtn.style.fontSize = '18px'
        
        badBtn.innerHTML = 'а я нет'
        goodBtn.innerHTML = 'тоже вас люблю'
        alert('еще разок')
    } else if (badBtn.style.width === '100px') {
        badBtn.style.width = '70px'
        badBtn.style.height = '23px'

        goodBtn.style.width = '180px'
        goodBtn.style.height = '60px'
        goodBtn.style.fontSize = '22px'

        badBtn.innerHTML = 'нетт'
        goodBtn.innerHTML = 'люблюю не могу'
        alert('давайте попробуем по новой')
    } else if (badBtn.style.width === '70px') {
        badBtn.style.width = '55px'
        badBtn.style.height = '25px'

        goodBtn.style.width = '220px'
        goodBtn.style.height = '75px'
        goodBtn.style.fontSize = '28px'

        title.style.marginBottom = '27px'

        badBtn.innerHTML = 'ноуп'
        goodBtn.innerHTML = 'люблюлюблю'

        alert('мне кажется нужно еще разочек')
    } else if (badBtn.style.width === '55px') {
        badBtn.style.display = 'none'

        goodBtn.style.width = '290px'
        goodBtn.style.height = '75px'
        goodBtn.style.fontSize = '30px'

        title.style.marginBottom = '25px'

        goodBtn.innerHTML = 'люблююююю!'

        alert('теперь точно не ошибетесь')
    }
})

yesBtn.addEventListener('click', () => {
    animate.style.transition = "opacity 1s ease-in-out";
    animate.style.opacity = "0";

    setTimeout(() => {
        animate.style.display = "none";
    }, 1000); 


    setTimeout(() => {
        dropContainer.style.display = 'flex'

        setTimeout(() => {
            dropContainer.style.opacity = "1";
        }, 50)
    }, 1500)
})

noBtn.addEventListener('click', () => {
    alert('ну тут уже нельзя на эту кнопку нажимать')
    noBtn.style.transition = "opacity 1s ease-in-out";
    noBtn.style.opacity = "0";

    setTimeout(() => {
        noBtn.style.display = "none";
    }, 1000); 
})