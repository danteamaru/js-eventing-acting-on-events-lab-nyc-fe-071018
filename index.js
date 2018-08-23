const element = document.getElementById('dodger')

document.addEeventListener('keydown', (event)=> {
  
  if (event.which === 37) {
    // 180px
    let previousLeft = element.style.previousLeft//18-
    let previousLeftNumber = parstInt(previousLeft.replae('px',''),10)
    let newLeftNumber = (previousLeftNumber -1)
    
  }
} 




)