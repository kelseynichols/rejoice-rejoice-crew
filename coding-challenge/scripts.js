// grid on screen
for (let i = 0; i < 5; i++) {
  for (let x = 0; x < 5; x++) {
    let square = document.createElement('div')
    square.className = 'square'
    square.id = 'id' + (i) + (x)
    square.style.top = (i * 40) + 'px'
    square.style.left = (x * 40) + 'px'
    square.addEventListener('click', attack)
    document.getElementById('board1').appendChild(square)
  }
}

// ship placement
let ships = [[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

let hit
function attack (e) {
  let rowNumber = e.target.id.charAt(2)
  let colNumber = e.target.id.charAt(3)
  let clickedSquare = ships[rowNumber][colNumber]
  if (clickedSquare === 1) {
    if (hit === true) {
      console.log('already taken')
      return
    }
    console.log('hit')
    e.target.style.backgroundColor = 'red'
    hit = true
  }
}
