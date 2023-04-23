let divTimer = document.querySelector('.timer') 
let show = document.querySelector('.timer_time')
let btnStart = document.querySelector('.start_timer')


let resetTimer = document.createElement('btn')
let removeTimer = document.createElement('btn')
let sp = document.createElement('span')
let redTimer = document.createElement('img')
let greenTimer = document.createElement('img')

resetTimer.setAttribute('class', 'reset_timer')
removeTimer.setAttribute('class', 'remove_timer')
sp.setAttribute('class', 'sp')
redTimer.setAttribute('src', 'img/redTimer.png')
redTimer.setAttribute('class', 'red_timer_img') 
greenTimer.setAttribute('src', 'img/greenTimer.png')
greenTimer.setAttribute('class', 'green_timer_img')    


resetTimer.innerHTML = 'reset the timer'
removeTimer.innerHTML = 'remove the timer'
sp.innerHTML = '24 00 00'

removeTimer.append(redTimer)
resetTimer.append(greenTimer)


let startTimer = (duration, display) => {
    let timer = duration, hours, minutes, seconds
    let inter = setInterval(() => {
        hours = parseInt(timer / 60 / 60 % 60)
        minutes = parseInt(timer / 60 % 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds

        display.textContent = hours + ' ' + minutes + ' ' + seconds

        if (--timer < 0) {
            timer = duration
        }
    }, 1000)
    removeTimer.addEventListener('click', () => {
        clearInterval(inter)
        display.remove()    
        removeTimer.remove()
        resetTimer.remove()

        divTimer.append(sp)
        divTimer.append(btnStart)
    })
    resetTimer.addEventListener('click', () => {
        clearInterval(inter)
        display.remove()

        startTimer(eightHours, display)

        divTimer.prepend(display)
    })
}

let eightHours = 60 * 60 * 24,
    display = show

btnStart.addEventListener('click', () => {
    
    startTimer(eightHours, display)

    divTimer.append(display)
    divTimer.append(resetTimer)
    divTimer.append(removeTimer)
    btnStart.remove()
    sp.remove()
})
