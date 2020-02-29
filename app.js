const buttonZero = document.querySelector(".zeroBtn");
const buttonOne = document.querySelector(".oneBtn");
const buttonTwo = document.querySelector(".twoBtn");
const buttonThree = document.querySelector(".threeBtn");
const buttonFour = document.querySelector(".fourBtn");
const buttonFive = document.querySelector(".fiveBtn");
const buttonSix = document.querySelector(".sixBtn");
const buttonSeven = document.querySelector(".sevenBtn");
const buttonEight = document.querySelector(".eightBtn");
const buttonNine = document.querySelector(".nineBtn");
const buttonDot = document.querySelector(".dotBtn");
const buttonClear = document.querySelector(".CBtn");
const buttonNegative = document.querySelector(".negBtn");
const buttonPercentage = document.querySelector(".percentBtn");
const buttonDivide = document.querySelector(".divBtn");
const buttonMulptiply = document.querySelector(".mulBtn");
const buttonSubtract = document.querySelector(".minusBtn");
const buttonAdd = document.querySelector(".plusBtn");
const buttonEqual = document.querySelector(".equalBtn");
const previousOperandandTextElement = document.querySelector(".previous-operand");
const currentOperandandTextElement = document.querySelector(".current-operand");
const negative = "-1";
const percenty = ".01"; 



class calculator {

    constructor(previousOperandandTextElement, currentOperandandTextElement) {
        this.previousOperandandTextElement = previousOperandandTextElement
        this.currentOperandandTextElement = currentOperandandTextElement
        this.savedOperand = "";
        this.readyToReset = false;
        this.cleared = true;
        this.enter = false;
        this.clear()
    }
    
    clear(){
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;

    };
    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return 
        this.currentOperand = this.currentOperand.toString() + number.toString()

    };
    chooseOperation(operation){
        if (this.currentOperand === "") return
        if (this.previousOperand !== "") {
        this.compute() }
        this.operation = operation 
        this.previousOperand = this.currentOperand
        this.currentOperand = ""

    };

    percentFunc(operation){
        
        if (this.previousOperand === "%") {
        this.compute() }
        this.operation = operation 
        this.previousOperand = this.currentOperand
        this.currentOperand = "1"
        this.compute() 
        this.currentOperand = ""
        this.currentOperand = this.previousOperand
        this.previousOperand = "";
        
        
    }
    goNegative(operation){
        
        if (this.previousOperand === "n") {
        this.compute() }
        this.operation = operation 
        this.previousOperand = this.currentOperand
        this.currentOperand = "1"
        this.compute() 
        
        
    }




    compute(){
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch (this.operation){
            case '+':
                computation = prev + current
                this.readyToReset = true;
                this.currentOperand = computation
                this.operation = undefined
                this.previousOperand = ""
                break
            case '-':
                computation = prev - current
                this.readyToReset = true;
                this.currentOperand = computation
                this.operation = undefined
                this.previousOperand = ""
                break
            case '/':
                computation = prev / current
                this.readyToReset = true;
                this.currentOperand = computation
                this.operation = undefined
                this.previousOperand = ""
                break   
            case 'x':
                computation = prev * current
                this.readyToReset = true;
                this.currentOperand = computation
                this.operation = undefined
                this.previousOperand = ""
                break
            case '%':
                computation = prev * percenty
                this.readyToReset = true;
                this.previousOperand = computation
                this.operation = undefined
                
                break
                case 'n':
                computation = prev * negative
                
                this.currentOperand = computation
                this.operation = undefined
                this.previousOperand = ""
                break
            default:
                return  

        }
        

    };

    updateDisplay(){
        
        
        
        
        this.currentOperandandTextElement.innerText = this.currentOperand
        this.previousOperandandTextElement.innerText = this.previousOperand
        
    
        
        
    }


}


const Calculator = new calculator(previousOperandandTextElement, currentOperandandTextElement);

buttonZero.addEventListener('click', () => {
    if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand === ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
       Calculator.cleared = false;
       

    }
    else if (Calculator.previousOperand === "Max number input"){
        Calculator.readyToReset = true;
        Calculator.previousOperand = "";
        Calculator.currentOperand = "";
    }

    else if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand !== ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
        Calculator.cleared = false;
    }

    if(Calculator.currentOperand === "0") {
        Calculator.currentOperand = "0"
        return
    }
    if (Calculator.previousOperand === "" &&
    Calculator.currentOperand !== "" &&
    Calculator.cleared &&
    Calculator.readyToReset) {
        Calculator.appendNumber(buttonZero.innerText)
        Calculator.updateDisplay()
        Calculator.readyToReset = true;
    }
    else if(Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.cleared) {
        
        }
    else if (Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.readyToReset){
            Calculator.readyToReset = true;
            Calculator.currentOperand = "";
    }
    
    Calculator.readyToReset = false;
    Calculator.appendNumber(buttonZero.innerText)
    Calculator.updateDisplay()
    

    buttonZero.classList.add("fadeColorThree");
    setTimeout(function() {
      buttonZero.classList.remove("fadeColorThree");
    }, 300);


})   

buttonOne.addEventListener('click', () => {
    if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand === ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
       Calculator.cleared = false;
       

    }
    else if (Calculator.previousOperand === "Max number input"){
        Calculator.readyToReset = true;
        Calculator.previousOperand = "";
        Calculator.currentOperand = "";
    }
    else if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand !== ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
        Calculator.cleared = false;
    }

    if (Calculator.previousOperand === "" &&
    Calculator.currentOperand !== "" &&
    Calculator.cleared &&
    Calculator.readyToReset) {
        Calculator.appendNumber(buttonOne.innerText)
        Calculator.updateDisplay()
        Calculator.readyToReset = true;
    }
    else if(Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.cleared) {
        
        }
    else if (Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.readyToReset){
            Calculator.readyToReset = true;
            Calculator.currentOperand = "";
    }
    
        Calculator.readyToReset = false;    
        Calculator.appendNumber(buttonOne.innerText)
        Calculator.updateDisplay()

        buttonOne.classList.add("fadeColorThree");
    setTimeout(function() {
      buttonOne.classList.remove("fadeColorThree");
    }, 300);


})   

buttonTwo.addEventListener('click', () => {
    if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand === ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
       Calculator.cleared = false;
       

    }
    else if (Calculator.previousOperand === "Max number input"){
        Calculator.readyToReset = true;
        Calculator.previousOperand = "";
        Calculator.currentOperand = "";
    }
    else if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand !== ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
        Calculator.cleared = false;
    }

    if (Calculator.previousOperand === "" &&
    Calculator.currentOperand !== "" &&
    Calculator.cleared &&
    Calculator.readyToReset) {
        Calculator.appendNumber(buttonTwo.innerText)
        Calculator.updateDisplay()
        Calculator.readyToReset = true;
    }
    else if(Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.cleared) {
        
        }
    else if (Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.readyToReset){
            Calculator.readyToReset = true;
            Calculator.currentOperand = "";
    }
    
        Calculator.readyToReset = false;    
        Calculator.appendNumber(buttonTwo.innerText)
        Calculator.updateDisplay()

        buttonTwo.classList.add("fadeColorThree");
    setTimeout(function() {
      buttonTwo.classList.remove("fadeColorThree");
    }, 300);


})   


buttonThree.addEventListener('click', () => {
    if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand === ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
       Calculator.cleared = false;
       

    }
    else if (Calculator.previousOperand === "Max number input"){
        Calculator.readyToReset = true;
        Calculator.previousOperand = "";
        Calculator.currentOperand = "";
    }
    else if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand !== ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
        Calculator.cleared = false;
    }

    if (Calculator.previousOperand === "" &&
    Calculator.currentOperand !== "" &&
    Calculator.cleared &&
    Calculator.readyToReset) {
        Calculator.appendNumber(buttonThree.innerText)
        Calculator.updateDisplay()
        Calculator.readyToReset = true;
    }
    else if(Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.cleared) {
        
        }
    else if (Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.readyToReset){
            Calculator.readyToReset = true;
            Calculator.currentOperand = "";
    }
    
        Calculator.readyToReset = false;    
        Calculator.appendNumber(buttonThree.innerText)
        Calculator.updateDisplay()

        buttonThree.classList.add("fadeColorThree");
    setTimeout(function() {
      buttonThree.classList.remove("fadeColorThree");
    }, 300);
})   

buttonFour.addEventListener('click', () => {
    if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand === ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
       Calculator.cleared = false;
       

    }
    else if (Calculator.previousOperand === "Max number input"){
        Calculator.readyToReset = true;
        Calculator.previousOperand = "";
        Calculator.currentOperand = "";
    }
    else if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand !== ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
        Calculator.cleared = false;
    }

    if (Calculator.previousOperand === "" &&
    Calculator.currentOperand !== "" &&
    Calculator.cleared &&
    Calculator.readyToReset) {
        Calculator.appendNumber(buttonFour.innerText)
        Calculator.updateDisplay()
        Calculator.readyToReset = true;
    }
    else if(Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.cleared) {
        
        }
    else if (Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.readyToReset){
            Calculator.readyToReset = true;
            Calculator.currentOperand = "";
    }
    
        Calculator.readyToReset = false;    
        Calculator.appendNumber(buttonFour.innerText)
        Calculator.updateDisplay()

        buttonFour.classList.add("fadeColorThree");
        setTimeout(function() {
        buttonFour.classList.remove("fadeColorThree");
        }, 300);


})   

buttonFive.addEventListener('click', () => {
    if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand === ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
       Calculator.cleared = false;
       

    }
    else if (Calculator.previousOperand === "Max number input"){
        Calculator.readyToReset = true;
        Calculator.previousOperand = "";
        Calculator.currentOperand = "";
    }
    else if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand !== ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
        Calculator.cleared = false;
    }

    if (Calculator.previousOperand === "" &&
    Calculator.currentOperand !== "" &&
    Calculator.cleared &&
    Calculator.readyToReset) {
        Calculator.appendNumber(buttonFive.innerText)
        Calculator.updateDisplay()
        Calculator.readyToReset = true;
    }
    else if(Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.cleared) {
        
        }
    else if (Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.readyToReset){
            Calculator.readyToReset = true;
            Calculator.currentOperand = "";
    }
    
        Calculator.readyToReset = false;    
        Calculator.appendNumber(buttonFive.innerText)
        Calculator.updateDisplay()

        buttonFive.classList.add("fadeColorThree");
        setTimeout(function() {
        buttonFive.classList.remove("fadeColorThree");
        }, 300);


})   

buttonSix.addEventListener('click', () => {
    if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand === ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
       Calculator.cleared = false;
       

    }
    else if (Calculator.previousOperand === "Max number input"){
        Calculator.readyToReset = true;
        Calculator.previousOperand = "";
        Calculator.currentOperand = "";
    }
    else if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand !== ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
        Calculator.cleared = false;
    }

    if (Calculator.previousOperand === "" &&
    Calculator.currentOperand !== "" &&
    Calculator.cleared &&
    Calculator.readyToReset) {
        Calculator.appendNumber(buttonSix.innerText)
        Calculator.updateDisplay()
        Calculator.readyToReset = true;
    }
    else if(Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.cleared) {
        
        }
    else if (Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.readyToReset){
            Calculator.readyToReset = true;
            Calculator.currentOperand = "";
    }
    
        Calculator.readyToReset = false;    
        Calculator.appendNumber(buttonSix.innerText)
        Calculator.updateDisplay()

        buttonSix.classList.add("fadeColorThree");
        setTimeout(function() {
        buttonSix.classList.remove("fadeColorThree");
        }, 300);
})   

buttonSeven.addEventListener('click', () => {
    if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand === ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
       Calculator.cleared = false;
       

    }
    else if (Calculator.previousOperand === "Max number input"){
        Calculator.readyToReset = true;
        Calculator.previousOperand = "";
        Calculator.currentOperand = "";
    }
    else if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand !== ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
        Calculator.cleared = false;
    }

    if (Calculator.previousOperand === "" &&
    Calculator.currentOperand !== "" &&
    Calculator.cleared &&
    Calculator.readyToReset) {
        Calculator.appendNumber(buttonSeven.innerText)
        Calculator.updateDisplay()
        Calculator.readyToReset = true;
    }
    else if(Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.cleared) {
        
        }
    else if (Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.readyToReset){
            Calculator.readyToReset = true;
            Calculator.currentOperand = "";
    }
    
        Calculator.readyToReset = false;    
        Calculator.appendNumber(buttonSeven.innerText)
        Calculator.updateDisplay()
    
        buttonSeven.classList.add("fadeColorThree");
        setTimeout(function() {
        buttonSeven.classList.remove("fadeColorThree");
        }, 300);
})   

buttonEight.addEventListener('click', () => {
    if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand === ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
       Calculator.cleared = false;
       

    }
    else if (Calculator.previousOperand === "Max number input"){
        Calculator.readyToReset = true;
        Calculator.previousOperand = "";
        Calculator.currentOperand = "";
    }
    else if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand !== ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
        Calculator.cleared = false;
    }

    if (Calculator.previousOperand === "" &&
    Calculator.currentOperand !== "" &&
    Calculator.cleared &&
    Calculator.readyToReset) {
        Calculator.appendNumber(buttonEight.innerText)
        Calculator.updateDisplay()
        Calculator.readyToReset = true;
    }
    else if(Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.cleared) {
           
        
        
        }
    else if (Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.readyToReset){
            Calculator.readyToReset = true;
            Calculator.currentOperand = "";
    }
    else {
        Calculator.readyToReset = false;    
    }
        Calculator.appendNumber(buttonEight.innerText)
        Calculator.updateDisplay()

        buttonEight.classList.add("fadeColorThree");
        setTimeout(function() {
        buttonEight.classList.remove("fadeColorThree");
        }, 300);
})   

buttonNine.addEventListener('click', () => {
    if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand === ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
       Calculator.cleared = false;
       

    }
    else if (Calculator.previousOperand === "Max number input"){
        Calculator.readyToReset = true;
        Calculator.previousOperand = "";
        Calculator.currentOperand = "";
    }
    else if(Calculator.currentOperand.length >= 9 && Calculator.previousOperand !== ""){
        Calculator.previousOperand = "Max number input";
        Calculator.readyToReset = true;
        Calculator.cleared = false;
    }

    if (Calculator.previousOperand === "" &&
    Calculator.currentOperand !== "" &&
    Calculator.cleared &&
    Calculator.readyToReset) {
        Calculator.appendNumber(buttonNine.innerText)
        Calculator.updateDisplay()
        Calculator.readyToReset = true;
    }
    else if(Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.cleared) {
        
        }
    
    else if (Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.readyToReset){
            Calculator.readyToReset = true;
            Calculator.currentOperand = "";
    }

    
        Calculator.readyToReset = false;  
        Calculator.appendNumber(buttonNine.innerText)
        Calculator.updateDisplay()

        buttonNine.classList.add("fadeColorThree");
        setTimeout(function() {
        buttonNine.classList.remove("fadeColorThree");
        }, 300);
})   

buttonDot.addEventListener('click', () => {
    if (Calculator.previousOperand === "" &&
    Calculator.currentOperand !== "" &&
    Calculator.cleared &&
    Calculator.readyToReset) {
        Calculator.appendNumber(buttonDot.innerText)
        Calculator.updateDisplay()
        Calculator.readyToReset = true;
    }
    else if(Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.cleared) {
        
        }
    else if (Calculator.previousOperand === "" &&
        Calculator.currentOperand !== "" &&
        Calculator.readyToReset){
            Calculator.readyToReset = true;
            Calculator.currentOperand = "";
    }
    
        Calculator.readyToReset = false;    
        Calculator.appendNumber(buttonDot.innerText)
        Calculator.updateDisplay()

        buttonDot.classList.add("fadeColorThree");
        setTimeout(function() {
        buttonDot.classList.remove("fadeColorThree");
        }, 300);
})   



// Below is Operations

buttonAdd.addEventListener('click', () => {
    if (Calculator.previousOperand === "."){
        Calculator.previousOperand = "0"
    }
    Calculator.chooseOperation(buttonAdd.innerText)
    Calculator.updateDisplay()

    buttonAdd.classList.add("fadeColorTwo");
    setTimeout(function() {
      buttonAdd.classList.remove("fadeColorTwo");
    }, 300);


})   

buttonSubtract.addEventListener('click', () => {
    if (Calculator.previousOperand === "."){
        Calculator.previousOperand = "0"
    }
    Calculator.chooseOperation(buttonSubtract.innerText)
    Calculator.updateDisplay()

    buttonSubtract.classList.add("fadeColorTwo");
    setTimeout(function() {
      buttonSubtract.classList.remove("fadeColorTwo");
    }, 300);


})   

buttonMulptiply.addEventListener('click', () => {
    if (Calculator.previousOperand === "."){
        Calculator.previousOperand = "0"
    }
    Calculator.chooseOperation(buttonMulptiply.innerText)
    Calculator.updateDisplay()

    buttonMulptiply.classList.add("fadeColorTwo");
    setTimeout(function() {
      buttonMulptiply.classList.remove("fadeColorTwo");
    }, 300);


})   

buttonDivide.addEventListener('click', () => {
    if (Calculator.previousOperand === "."){
        Calculator.previousOperand = "0"
    }
    Calculator.chooseOperation(buttonDivide.innerText)
    Calculator.updateDisplay()

    buttonDivide.classList.add("fadeColorTwo");
    setTimeout(function() {
      buttonDivide.classList.remove("fadeColorTwo");
    }, 300);


})   

buttonPercentage.addEventListener('click', () => {
    if (Calculator.previousOperand === "."){
        Calculator.previousOperand = "0"
    }
    Calculator.readyToReset = true;
    Calculator.cleared = false;
    Calculator.percentFunc(buttonPercentage.innerText)
    Calculator.updateDisplay()
    
    buttonPercentage.classList.add("fadeColor");
    setTimeout(function() {
      buttonPercentage.classList.remove("fadeColor");
    }, 300);
    
})   

buttonNegative.addEventListener('click', () => {
    if (Calculator.previousOperand === "."){
        Calculator.previousOperand = "0"
    }
    if (Calculator.cleared){
        Calculator.readyToReset = false;
    }
    else {Calculator.readyToReset = true;}
    Calculator.goNegative("n")
    Calculator.updateDisplay()
    

    buttonNegative.classList.add("fadeColor");
    setTimeout(function() {
      buttonNegative.classList.remove("fadeColor");
    }, 300);


})  




buttonEqual.addEventListener('click', function button(){ 
    if (Calculator.previousOperand === "."){
        Calculator.previousOperand = "0"
    }
    if (Calculator.enter){
        Calculator.compute()
    }
    Calculator.compute()
    Calculator.updateDisplay()
    Calculator.cleared = false;
    Calculator.enter = true;
    
    


    buttonEqual.classList.add("fadeColorTwo");
    setTimeout(function() {
      buttonEqual.classList.remove("fadeColorTwo");
    }, 300);
    
}) 

buttonClear.addEventListener('click', function button(){ 
    Calculator.clear()
    Calculator.updateDisplay()
    Calculator.cleared = true;
    
    
    


    
    buttonClear.classList.add("fadeColor");
    setTimeout(function() {
      buttonClear.classList.remove("fadeColor");
    }, 300);
    
    

    
    
}) 
