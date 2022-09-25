const display = document.querySelector('.textview');
let buttons = document.querySelectorAll('.button')


function insert(num){
  display.value +=  num;
  }
  
  function equals(){
       try {     
         let result = eval(display.value); 
         display.value = result
        } catch (error) {
         display.value = "Invalid input"
         setTimeout(() => {
          display.value = ""
         }, 1000);
       }
  }
  
  function clean(){
    display.value = ""
  }
  
  function back(){
    display.value = display.value.slice(0, -1)
  }