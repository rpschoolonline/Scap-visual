// NAVBAR SWITCHING SCRIPT STARTS
let liConverter=document.getElementById("li-converter")
let liSnakegame=document.getElementById("li-snakegame")
let liAddtocart=document.getElementById("li-addtocart")
let liPacnapp=document.getElementById("li-pacnapp")
let SWG=document.getElementById("grand-parent")
let CONVRT=document.getElementById("container-parent")
let ATC=document.getElementById("container")
let PCA=document.getElementById("guardian")
let historySection=document.getElementById("history")

function changeSWG () {
    CONVRT.style.display="none"
    SWG.style.display="flex"
    PCA.style.display="none"
    ATC.style.display="none"
   historySection.style.display="none"
}    
liSnakegame.addEventListener("click",changeSWG)

function changeCNVRT () {
    CONVRT.style.display="flex"
   historySection.style.display="flex"
   SWG.style.display="none"
    PCA.style.display="none"
    ATC.style.display="none"
}
liConverter.addEventListener("click",changeCNVRT)
function changePCA() {
    PCA.style.display="block"
   SWG.style.display="none"
    ATC.style.display="none"
    CONVRT.style.display="none"
   historySection.style.display="none"
}
liPacnapp.addEventListener("click",changePCA)
function changeATC() {
    ATC.style.display="flex"
    PCA.style.display="none"
   SWG.style.display="none"
    CONVRT.style.display="none"
   historySection.style.display="none"
   
}
liAddtocart.addEventListener("click",changeATC)
// NAVBAR SWITCHING SCRIPT ENDS


// CONVERTER SCRIPT STARTS
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let inputType = document.getElementById("input-type")
let resultType = document.getElementById("result-type")
let clear=document.getElementById("clear-btn")
let saveData=document.getElementById("save-inputs")


input1.addEventListener("keyup", myResult)
inputType.addEventListener("change", myResult)
resultType.addEventListener("change", myResult)

 let inputTypeValue = inputType.value
 let resultTypeValue = resultType.value

function myResult() {
  
    
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value

    if (inputTypeValue === "METER" && resultTypeValue === "KILOMETER") {
        input2.value = input1.value / 1000

    } else if (inputTypeValue === "METER" && resultTypeValue === "CENTIMETER") {
        input2.value = input1.value * 100

    } else if (inputTypeValue === "METER" && resultTypeValue === "METER") {
        input2.value = input1.value
    }

    if (inputTypeValue === "KILOMETER" && resultTypeValue === "METER") {
        input2.value = input1.value * 1000

    } else if (inputTypeValue === "KILOMETER" && resultTypeValue === "CENTIMETER") {
        input2.value = input1.value * 100000

    } else if (inputTypeValue === "KILOMETER" && resultTypeValue === "KILOMETER") {
        input2.value = input1.value
    }
    if (inputTypeValue === "CENTIMETER" && resultTypeValue === "KILOMETER") {
        input2.value = input1.value / 100000

    } else if (inputTypeValue === "CENTIMETER" && resultTypeValue === "METER") {
        input2.value = input1.value / 100

    } else if (inputTypeValue === "CENTIMETER" && resultTypeValue === "CENTIMETER") {
        input2.value = input1.value

    }else if(inputTypeValue === "METER/SEC" && resultTypeValue === "KILOMETER/HR"){
        input2.value = input1.value*3.6

    }else if(inputTypeValue === "METER/SEC" && resultTypeValue === "METER/SEC"){
        input2.value = input1.value

    }else if(inputTypeValue === "KILOMETER/HR" && resultTypeValue === "METER/SEC"){
        input2.value = input1.value/3.6

    }else if(inputTypeValue === "KILOMETER/HR" && resultTypeValue === "KILOMETER/HR"){
        input2.value = input1.value

    }else if(inputTypeValue === "SECOND" && resultTypeValue === "MINUTE"){
        input2.value = input1.value/60

    }else if(inputTypeValue === "SECOND" && resultTypeValue === "SECOND"){
        input2.value = input1.value

    }else if(inputTypeValue === "MINUTE" && resultTypeValue === "SECOND"){
        input2.value = input1.value*60

    }else if(inputTypeValue === "MINUTE" && resultTypeValue === "MINUTE"){
        input2.value = input1.value

    }else if(inputTypeValue === "LITER" && resultTypeValue === "MILI-LITER"){
        input2.value = input1.value*1000

    }else if(inputTypeValue === "LITER" && resultTypeValue === "LITER"){
        input2.value = input1.value

    }else if(inputTypeValue === "MILI-LITER" && resultTypeValue === "LITER"){
        input2.value = input1.value/1000

    }else if(inputTypeValue === "MILI-LITER" && resultTypeValue === "MILI-LITER"){
        input2.value = input1.value

    }else if(inputTypeValue === "KILOGRAM" && resultTypeValue === "GRAM"){
        input2.value = input1.value*1000

    }else if(inputTypeValue === "KILOGRAM" && resultTypeValue === "KILOGRAM"){
        input2.value = input1.value

    }else if(inputTypeValue === "GRAM" && resultTypeValue === "KILOGRAM"){
        input2.value = input1.value/1000

    }else if(inputTypeValue === "GRAM" && resultTypeValue === "GRAM"){
        input2.value = input1.value

    }else if(resultTypeValue=="calculator"){
       
function add(x, y) {
    return x + y;
  }
  

  function subtract(x, y) {
    return x - y;
  }
  

  function multiply(x, y) {
    return x * y;
  }

  function divide(x, y) {
    return x / y;
  }
  
  alert("Select operation.\n1. Add\n2. Subtract\n3. Multiply\n4. Divide");
  
  while (true) {

    const choice = prompt("Enter choice (1/2/3/4): ");
  

    if (["1", "2", "3", "4"].includes(choice)) {
      try {
        const num1 = parseFloat(prompt("Enter first number: "));
        const num2 = parseFloat(prompt("Enter second number: "));
        if (isNaN(num1) || isNaN(num2)) {
          alert("Invalid input. Please enter a number.");
          continue;
        }
  
        let result;
        if (choice === "1") {
          result = add(num1, num2);
          alert(`${num1} + ${num2} = ${result}`);
        } else if (choice === "2") {
          result = subtract(num1, num2);
          alert(`${num1} - ${num2} = ${result}`);
        } else if (choice === "3") {
          result = multiply(num1, num2);
          alert(`${num1} * ${num2} = ${result}`);
        } else if (choice === "4") {
          result = divide(num1, num2);
          alert(`${num1} / ${num2} = ${result}`);
        }
  
        const nextCalculation = prompt("Let's do the next calculation? (yes/no): ");
        if (nextCalculation === "no") {
          break;
        }
      } catch (error) {
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("Invalid Input");
    }
  }
    }else if(inputTypeValue=="calculator"){
     
function add(x, y) {
    return x + y;
  }
  

  function subtract(x, y) {
    return x - y;
  }
  

  function multiply(x, y) {
    return x * y;
  }
  
  
  function divide(x, y) {
    return x / y;
  }
  
  alert("Select operation.\n1. Add\n2. Subtract\n3. Multiply\n4. Divide");
  
  while (true) {
    
    const choice = prompt("Enter choice (1/2/3/4): ");
  

    if (["1", "2", "3", "4"].includes(choice)) {
      try {
        const num1 = parseFloat(prompt("Enter first number: "));
        const num2 = parseFloat(prompt("Enter second number: "));
        if (isNaN(num1) || isNaN(num2)) {
          alert("Invalid input. Please enter a number.");
          continue;
        }
  
        let result;
        if (choice === "1") {
          result = add(num1, num2);
          alert(`${num1} + ${num2} = ${result}`);
        } else if (choice === "2") {
          result = subtract(num1, num2);
          alert(`${num1} - ${num2} = ${result}`);
        } else if (choice === "3") {
          result = multiply(num1, num2);
          alert(`${num1} * ${num2} = ${result}`);
        } else if (choice === "4") {
          result = divide(num1, num2);
          alert(`${num1} / ${num2} = ${result}`);
        }
  
      
        const nextCalculation = prompt("Let's do the next calculation? (yes/no): ");
        if (nextCalculation === "no") {
          break;
        }
      } catch (error) {
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("Invalid Input");
    }
  }
    }
        



}
clear.addEventListener("click",(e)=>{
input1.value=""
input2.value=""

})

function save(){

let c=document.createElement("a")


historySection.appendChild(c).innerHTML=`<li>${input1.value} to ${input2.value}</li> `

c.addEventListener("click", function () {
    historySection.removeChild(c)

})

}

saveData.addEventListener("click",save)

function clearing(){


    historySection.innerHTML=  "<span style=color:black;>HISTORY</span>"    +""

}
historySection.addEventListener("dblclick",clearing)
// CONVERTER SCRIPT ENDS


//SNAKE,WATER,GUN GAME SCRIPT STARTS
let computerScore = document.getElementById("computer-score")
let userScore = document.getElementById("your-score")
let win = document.getElementById("win")
let starter=document.getElementById('start')
let countComp = 0
let countUser = 0

function start() {

    let result = document.getElementById("show")
    let arr = ['S', 'W', 'G']
    let comptPick = arr[Math.floor(Math.random() * 3)]
    console.log(comptPick)
    let userPick = prompt("TYPE (S),(W),(G) for snake, water or gun accordingly")

    if (comptPick == userPick) {
        result.textContent = "DRAW"
    } else if (userPick == 'S' && comptPick == 'G') {
        result.innerHTML = `COMPUTER: GUN  <br> <br> USER: SNAKE`
        countComp += 1
        computerScore.textContent = "COMPUTER SCORE:" + countComp
        if (countComp === 10) {
            win.innerHTML = `COMPUTER WON`
            userScore.textContent = `COMPUTER SCORE: ${countUser = 0}`
            computerScore.textContent = `COMPUTER SCORE: ${countComp = 0}`
        }
    } else if (userPick == 'G' && comptPick == 'S') {
        result.innerHTML = `COMPUTER: SNAKE  <br> <br> USER: GUN`
        countUser += 1;
        userScore.textContent = "YOUR SCORE: " + countUser
        if (countUser === 10) {
            win.innerHTML = `USER WON`
            userScore.textContent = `USER SCORE: ${countUser = 0}`
            computerScore.textContent = `COMPUTER SCORE: ${countComp = 0}`
        }
    } else if (userPick == 'S' && comptPick == 'W') {
        result.innerHTML = `COMPUTER: WATER  <br> <br> USER: SNAKE`
        countUser += 1;
        userScore.textContent = "YOUR SCORE: " + countUser
        if (countUser === 10) {
            win.innerHTML = `USER WON`
            userScore.textContent = `USER SCORE: ${countUser = 0}`
            computerScore.textContent = `COMPUTER SCORE: ${countComp = 0}`
        }
    } else if (userPick == 'W' && comptPick == 'S') {
        result.innerHTML = `COMPUTER: SNAKE  <br> <br> USER: WATER`
        countComp += 1
        computerScore.textContent = "COMPUTER SCORE:" + countComp
        if (countComp === 10) {
            win.innerHTML = `COMPUTER WON`
            userScore.textContent = `COMPUTER SCORE: ${countUser = 0}`
            computerScore.textContent = `COMPUTER SCORE: ${countComp = 0}`
        }
    } else if (userPick == 'G' && comptPick == "W") {
        result.innerHTML = `COMPUTER: WATER  <br> <br> USER: GUN`
        countComp += 1
        computerScore.textContent = "COMPUTER SCORE:" + countComp
        if (countComp === 10) {
            win.innerHTML = `COMPUTER WON`
            userScore.textContent = `USER SCORE: ${countUser = 0}`
            computerScore.textContent = `COMPUTER SCORE: ${countComp = 0}`
        }
    } else if (userPick == 'W' && comptPick == 'G') {
        result.innerHTML = `COMPUTER: GUN  <br> <br> USER: WATER`
        countUser += 1;
        userScore.textContent = "YOUR SCORE: " + countUser
        if (countUser === 10) {
            win.innerHTML = `USER WON`
            userScore.textContent = `USER SCORE: ${countUser = 0}`
            computerScore.textContent = `COMPUTER SCORE: ${countComp = 0}`
        }
    }
}
starter.addEventListener("click", start)

function clearingWIN() {
    document.getElementById("win").textContent = ""
}
win.addEventListener("click", clearingWIN)
//SNAKE WATER GUN GAME SCRIPT ENDS


// PASSENGER COUNTER APP SCRIPT STARTS
let buttonClick=document.getElementById("click")
let counting=document.getElementById("count")
let saving=document.getElementById("entries")
let clearbtn=document.getElementById("clear-entries")
let clearCount=document.getElementById("clearcount")
let low=document.getElementById("low")
let high=document.getElementById("high")

let count=0
function incremett(){
   count+=1
counting.textContent=count
 

}
function savee(){
saving.textContent+=  count + " -  " 
counting.textContent=0
count=0

}

clearbtn.addEventListener("click",(e)=>{
saving.textContent= "ENTRIES: "

})

clearCount.addEventListener("click",(e)=>{
   counting.textContent=0
   count=0
})


function minus(){
counting.textContent=count-=1

}
low.addEventListener("click",minus)
// PASSENGER COUNTER APP SCRIPT ENDS


//ADD TO CART APP SCRIPT STARTS
let input = document.getElementById("input-field")
let button = document.getElementById("button")
let shoppingList = document.getElementById("shopping-list")
let clearInShoppinglist = document.getElementById('clear-all')

                    

function saveInputs() {
    let inputValue = input.value
    let li = document.createElement("li")
    shoppingList.appendChild(li).innerHTML = `${inputValue}`
    clearInputFieldEl()

    li.addEventListener("click", function () {
        shoppingList.removeChild(li)

    })
}
button.addEventListener("click", saveInputs)
function clearInputFieldEl() {
    input.value = ""

}

function clearAll() {

    shoppingList.textContent = ``

}
clearInShoppinglist.addEventListener("click", clearAll)
// ADD TO CART APP SCRIPT ENDS

