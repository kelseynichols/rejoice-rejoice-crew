document.addEventListener('DOMContentLoaded', goDOM)

function goDOM () {
  let btn = document.getElementById('addSquare')
  btn.addEventListener('click', insertSquare)

  let squareArray = []

  function insertSquare () {
    // create square, push in array, append to page
    let square = document.createElement('div')
    square.id = squareArray.length + 1
    square.innerHTML = square.id
    squareArray.push(square)
    document.body.appendChild(square)

    // show id
    square.addEventListener('mouseover', () => {
      square.style.color = 'white'
    })

    // hide id
    square.addEventListener('mouseout', () => {
      square.style.color = 'transparent'
    })

    // change background color
    square.addEventListener('click', () => {
      let letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      square.style.backgroundColor = color
    })

    // remove square
    square.addEventListener('dblclick', removeSquare)

    function removeSquare (e) {
      let clickedSquare = e.target
      // even?
      if (clickedSquare.innerHTML % 2 === 0) {
        // unless nothing is there
        if (clickedSquare.nextElementSibling === null) {
          window.alert('nope')
          return
        }
        // remove square from DOM
        clickedSquare.nextElementSibling.remove()

        // remove square from array
        let arrayIndex = squareArray.indexOf(clickedSquare)
        squareArray.splice(arrayIndex, 1)

        // renumber remaining squares
        reNumber()
      } else {
        if (clickedSquare.previousElementSibling === btn) {
          window.alert('nope')
          return
        }
        clickedSquare.previousElementSibling.remove()
        let arrayIndex = squareArray.indexOf(clickedSquare)
        squareArray.splice(arrayIndex - 1, 1)
        reNumber()
      }
    }

    function reNumber () {
      let counter = 0
      // loop through array of squares that are left on page, count them, assign them to innerHTML
      squareArray.forEach(square => {
        let remainingSquare = document.getElementById(`${square.id}`)
        counter++
        if (remainingSquare) {
          remainingSquare.innerHTML = counter
        }
      })
    }
  }
}
