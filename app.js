const board = document.querySelector('#board')
const colors = ['#1E90FF', '#FF00FF', '#DAA520', '#ADFF2F', '#00FF7F', '#C71585', '#0000FF', '#1E90FF',]
const SQUARES_NUMBER = 600

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))
    

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}


function removeColor(element) {
    element.style.backgroundColor = 'whitesmoke'
    element.style.boxShadow = `0 0 2px #000`

}

function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}

