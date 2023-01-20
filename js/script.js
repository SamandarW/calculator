let num1 = +prompt('enter the first number')
let symbol = prompt('enter the operation')
let num2 = +prompt('enter the second number')
let user = {}
user.num1 = num1
user.symbol = symbol
user.num2 = num2
if(symbol == '+'){
    console.log('num1+num2')
}
else if(symbol == '-'){
console.log('num1-num2')
}
else if(symbol == '/'){
    console.log('num1/num2')
}
else if (symbol == '*'){
    console.log('num1*num2')
}

console.log (user) 
switch(symbol){
    case '+':
    result = num1+num2
    break
    case '-':
        result = num1-num2
        break
    case '/':
        result = num1/num2
        break
    case '*':
        result = num1*num2
        break    


}
alert(result)