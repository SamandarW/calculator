let cardNumber = '9860657899945645'
function checkNumber(){
if (cardNumber.startsWith('8600') && cardNumber.length == 16){
    console.log('Good Job :)')
    console.log(cardNumber.slice(0,4) + '********' + cardNumber.slice(12,16))
    console.log('UZCARD')
    console.log('********')
}if(cardNumber.startsWith('9860') && cardNumber.length == 16){
    console.log('Excellent :)')
    console.log(cardNumber.slice(0,4) + '********' + cardNumber.slice(12,16))
    console.log('HUMO')
}else{
    console.log('That was Wrong')
}}
checkNumber()
 let name = 'javlon'
 function checkFirstletter(){
console.log(name[0].toUpperCase() + name.substring(1)) 
;
 }
 checkFirstletter()
