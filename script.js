
let container = document.querySelector('.board')
let btn = document.querySelector('.btn')
let number = document.querySelector('#number')

let generateBoard = () => {
     let boardNum = +(number.value)
     container.innerHTML = ''

     if(boardNum > 100 || boardNum < 2) {
      alert('please introduce a number between 2 and 100')
      
     } else {
      for (let squares = 0; squares < boardNum*boardNum ; squares++) {
         let div = document.createElement('div')
         div.classList.add('child')
         div.addEventListener('mouseover', ()=> div.style.background = `rgb(${Math.trunc(Math.random()*255)}, ${Math.trunc(Math.random()*255)}, ${Math.trunc(Math.random()*255)})`)
         div.setAttribute('style', `width: ${500/boardNum}px; heigth: ${500/boardNum}; box-sizing: border-box; `)
         container.appendChild(div)
      }
     }
}
btn.addEventListener('click', generateBoard)
