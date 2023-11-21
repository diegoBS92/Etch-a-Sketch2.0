
let container = document.querySelector('.container')
let btn = document.querySelector('.btn')
let number = document.querySelector('#number')

let generateBoard = () => {
     let boardNum = number.value
     container.innerHTML = ''

     for (let squares = 0; squares < boardNum*boardNum ; squares++) {
        let div = document.createElement('div')
        div.classList.add('child')
        div.addEventListener('mouseover', ()=> div.classList.add('painted'))
        div.setAttribute('style', `width: ${500/boardNum}px; heigth: ${500/boardNum}; box-sizing: border-box; border: 1px red solid;`)
        container.appendChild(div)
     }
}
btn.addEventListener('click', generateBoard)
