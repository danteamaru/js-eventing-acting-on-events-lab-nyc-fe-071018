const element = document.getElementById('dodger')

document.addEventListener('keydown', (event) => {
  
  if (event.which === 37) {
    // 180px
    let previousLeft = element.style.left
    //180
    let previousLeftNumber = parseInt(previousLeft.replace('px',''), 10)
    let newLeftNumber = (previousLeftNumber - 15) + "px"
    element.style.left = newLeftNumber    
  }
})

  function moveDodgerRight(event) {
    
    if (event.which === 37) {
    // 180px
    let previousRight = element.style.left
    //180
    let previousRightNumber = parseInt(previousRight.replace('px',''), 10)
    let newRightNumber = (previousRightNumber + 15) + "px"
    element.style.left = newRightNumber    
  }
    
  }