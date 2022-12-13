// Variáveis 
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")   // to deixando mais resumido o sistema de selecionar uma tela
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1; 

// Eventos 
btnTry.addEventListener('click', contentValidation)
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener("keydown", handleEnterClickReset)

// funcção callback = chamar depois funções geral!!
function contentValidation(){
  if (inputNumber.value == "") {
    alert("por favor preencha o campo abaixo!")
    xAttempts--
  }
}

function handleTryClick(event) {  // pra quando clicarmos no botão de tentar
  event.preventDefault() // aqui estamos dizendo pra o botão dentro do formuário não fazer o padrão , não faça o padrão 
  
  const inputNumber = document.querySelector("#inputNumber")
  const valueNumber = inputNumber.value < 0 || inputNumber.value > 10

  if (valueNumber){    
      alert("por favor somente números entre 0 e 10")
      
    } else if (Number(inputNumber.value) == randomNumber){
      screenToggle()    
      screen2
      .querySelector("h2")
      .innerText = `Parabéns você acertou em ${xAttempts} tentativas válidas!`
    } else {
      xAttempts++  
    }
    inputNumber.value = ""
}

function handleResetClick() { // pra quando clicarmos no botão se reset 
  screenToggle()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function screenToggle() { // essa função estamos usando para alternar as telas 
  screen1.classList.toggle("hide") // toggle se tiver ele tira, se não tiver ele colocar 
  screen2.classList.toggle("hide") // ele basicamente sempre troca 
}

function handleEnterClickReset(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
} 

// desafios propostos pelo maik

// 1 - organizar o código 
// 2 - limite entre clicar 0 a 10 sem números negativos ou maiores que 10
// 3 - mais uma validação que tem que ter um número sem número não executa a função handletryclick
