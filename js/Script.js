//declarando variaveis da navbar e da ul

const navbar =document.querySelector('.navbar')
const allLi = document.querySelectorAll('li')

//declarando variaveis de cada item da navbar

const curriculo = navbar.querySelector(".cur")
const contato = navbar.querySelector(".contac")
const sobre = navbar.querySelector(".sobre")
const cur = document.querySelector(".curri")
const cont = document.querySelector(".conta")
const sob = document.querySelector(".sob")
const Tinst = document.querySelector(".Tinst")
const link = document.querySelector(".link1")
  
//progamando a seleção de itens

allLi.forEach( (li, index) => {
        li.addEventListener("click", e => {
          if(li.classList.contains("active-list")) {
            li.classList.remove("active-list")
          }else { 
            if (curriculo.classList.contains('active-list')){
              curriculo.classList.remove("active-list")
            } 
            if (contato.classList.contains('active-list')) {
              contato.classList.remove("active-list")
            }
            if (sobre.classList.contains('active-list')) {
              sobre.classList.remove("active-list")
            li.classList.add("active-list")}
           else { 
            
          li.classList.add("active-list")
            }
          }

        })
        li.addEventListener("mouseover", e => {
        
          li.classList.add("MouseOver")
        })
        li.addEventListener("mouseout", e => {
          navbar.querySelector(".MouseOver").classList.remove("MouseOver")
          li.classList.remove("MouseOver")
        })
     })
  
  //programando para aparecer e desaparecer o conteúdo

curriculo.addEventListener("click", e => {
  if(Tinst.classList.contains('open')) {
  }else {
    Tinst.classList.add("open"); 
  }
  
    if(cont.classList.contains('open')) {
    }else {
      cont.classList.add("open"); 
    }
    if(sob.classList.contains('open')) {
    }else {
      sob.classList.add("open"); 
    }
   if(cur.classList.contains('open')) {
    cur.classList.remove('open')
   } else {
    cur.classList.add('open')
    Tinst.classList.remove("open"); 
   }
    
})
contato.addEventListener("click", e => {
  if(Tinst.classList.contains('open')) {
  }else {
    Tinst.classList.add("open"); 
  }
    if(cur.classList.contains('open')) {
    }else {
      cur.classList.add("open"); 
    }
    if(sob.classList.contains('open')) {
    }else {
      sob.classList.add("open"); 
    }
    if(cont.classList.contains('open')) {
      cont.classList.remove('open')
    }else {
      cont.classList.add("open"); 
      Tinst.classList.remove("open"); 
    }
})
sobre.addEventListener("click", e => {
  if(Tinst.classList.contains('open')) {
  }else {
    Tinst.classList.add("open"); 
  }
    if(cur.classList.contains('open')) {
    }else {
      cur.classList.add("open"); 
    }
    if(cont.classList.contains('open')) {
    }else {
      cont.classList.add("open"); 
    }
    if(sob.classList.contains('open')) {
      sob.classList.remove('open')
    }else {
      sob.classList.add("open"); 
      Tinst.classList.remove("open"); 
    }
})


     //Programando o link do curricúlo

     link.addEventListener("mouseover", e => {
        
      link.classList.add("MouseOver")
    })
    link.addEventListener("mouseout", e => {
      link.classList.remove("MouseOver")
    })
