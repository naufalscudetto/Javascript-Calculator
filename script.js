let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector('.calculator-screen')
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector('.equal-sign')
const clearBtn = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

numbers.forEach((number) => {
    number.addEventListener("click", (event)=>{
    inputNumber(event.target.value)
    updateScreen(currentNumber)    
    })
})

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === ''){
        prevNumber = currentNumber
    }
    
    calculationOperator = operator
    currentNumber = ''
}

equalSign.addEventListener('click' , () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    let prevNumber = ''
    let calculationOperator = ''
    let currentNumber = '0'
}

decimal.addEventListener('click', (event) => {
    inputDecimal(even.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }

    currentNumber += dot
}

