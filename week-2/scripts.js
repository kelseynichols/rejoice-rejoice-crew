document.addEventListener('DOMContentLoaded', goDOM)

function goDOM () {
  let btn = document.getElementById('addSquare')
  btn.addEventListener('click', insertSquare)

  let squareArray = []

  function insertSquare () {
    let square = document.createElement('div')
    square.className = 'square'
    square.id = squareArray.length + 1
    square.innerHTML = square.id
    document.body.appendChild(square)
    squareArray.push(square)

    square.addEventListener('mouseover', showNumber)
    square.addEventListener('mouseout', hideNumber)
    square.addEventListener('click', changeBackgroundColor)
    square.addEventListener('dblclick', removeSquare)

    function showNumber () {
      square.style.color = 'white'
    }

    function hideNumber () {
      square.style.color = 'transparent'
    }

    function changeBackgroundColor () {
      let letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      square.style.backgroundColor = color
    }

    function reNumber () {
      let counter = 0

      squareArray.forEach(x => {
        let squarez = document.getElementById(`${x.id}`)

        counter++
        if (squarez) {
          squarez.innerHTML = counter
        }
      })
    }

    function removeSquare (e) {
      let thisSquare = e.target
      let squareNumber = thisSquare.innerHTML
      if (squareNumber % 2 === 0) {
        // if (thisSquare.nextElementSibling === null) {
        //   window.alert("there's nothing to remove!")
        //   return
        // }
        thisSquare.nextElementSibling.remove()
        let arrayIndex = squareArray.indexOf(thisSquare)
        squareArray.splice(arrayIndex, 1)
        reNumber()

        // squareArray.shift()
        // this.squareArray
        // console.log(squareArray.length)
        // thisSquare.id = arrayIndex
      } else {
        if (thisSquare.previousElementSibling === btn) {
          window.alert("can't remove the button!")
          return
        }
        thisSquare.previousElementSibling.remove()
      }
    }
  }
}
