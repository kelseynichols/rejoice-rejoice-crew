$(document).ready(() => {
  $('#btn').on('click', addBar)

  let actions = []
  let isRunning = false
  setInterval(checkQueue, 100)

  function checkQueue() {
    if(actions.length && isRunning === false) {
      let id = actions.shift()
      console.log(id)
      grow(id)
    }
  }
  function addBar () {
    let barContainer = document.createElement('div')
    let progressBar = document.createElement('div')
    barContainer.className = 'progress-container'
    progressBar.className = 'progressbar'
    progressBar.id = Math.floor((Math.random() * 100) + 1);
    $(barContainer).append(progressBar)
    $('.container').append(barContainer)
    actions.push((progressBar.id))
  }
  function grow (id) {
    isRunning = true
    $(`#${id}`).animate({
      width: '250px'
    }, 3000, () => {
      isRunning = false
    })
  }
})
