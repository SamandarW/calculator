//KArtalar raqamlarini tekshiruvchi kod
function checkNumber(cardNumber){
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
checkNumber('9860657899945645')
//ismning bosh harfini katta harfga aylantiruvchi kod
 let name = 'javlon'
 function checkFirstletter(){
console.log(name[0].toUpperCase() + name.substring(1)) 
;
 }
 checkFirstletter()

//stringda berilgan qiymatni 17 amrta takrorlovchi kod
let str = 'Samandar '
function repeatStr (){
return str.repeat(17)
// return str.toUpperCase(s)
}
console.log(repeatStr())
