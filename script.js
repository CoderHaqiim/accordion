const answers = document.querySelectorAll(".answer");
const btns = document.querySelectorAll(".btn");
const icons = ['assets/images/icon-plus.svg','assets/images/icon-minus.svg']
const[plus,minus] = icons

onload = () => btns[0].click()

function closeAllAnswers(){
  answers.forEach(answer=>{
    answer.style.display = `none`
  })
}

function clearBtnStates(btn){
  btns.forEach(btn=>{
    btn.clicked = false
    btn.children[0].src = plus
  })
}

function toggleAnswer(num,visibility,setClick,icon,btn){
  clearBtnStates()
  answers[num].style.display = visibility
  btn.children[0].src = icon
  btn.clicked = setClick
}

btns.forEach(btn=>{
  btn.clicked = false
  btn.onclick = (e) =>{
    closeAllAnswers(btn) 
    switch(e.target.id){
      case 'btn1': (()=>{
        !btn.clicked? (()=>{
          toggleAnswer(0,'block',true,minus,btn)
        })():(()=>{
          toggleAnswer(0,'none',false,plus,btn)
        })()
      })();break;
      case 'btn2': (()=>{
        !btn.clicked? (()=>{
          toggleAnswer(1,'block',true,minus,btn)
        })():(()=>{
          toggleAnswer(1,'none',false,plus,btn)
        })()
      })();break;
      case 'btn3': (()=>{
        !btn.clicked? (()=>{
          toggleAnswer(2,'block',true,minus,btn)
        })():(()=>{
          toggleAnswer(2,'none',false,plus,btn)
        })()
      })();break;
      case 'btn4': (()=>{
        !btn.clicked? (()=>{
          toggleAnswer(3,'block',true,minus,btn)
        })():(()=>{
          toggleAnswer(3,'none',false,plus,btn)
        })()
      })();break;
      default: console.log("hahaha")
    }
  }
})