const element = document.getElementById('dodger')

document.addEeventListener('keydown', (event) => {
  
  if (event.which === 37) {
    // 180px
    let previousLeft = element.style.left
    //180
    let previousLeftNumber = parstInt(previousLeft.replace ('px',''),10)
    let newLeftNumber = (previousLeftNumber - 15) + "px"
    element.style.left = newLeftNumber    
  }
})