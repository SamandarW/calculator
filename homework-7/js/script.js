// //KArtalar raqamlarini tekshiruvchi kod
// function checkNumber(cardNumber){
// if (cardNumber.startsWith('8600') && cardNumber.length == 16){
//     console.log('Good Job :)')
//     console.log(cardNumber.slice(0,4) + '********' + cardNumber.slice(12,16))
//     console.log('UZCARD')
//     console.log('********')
// }if(cardNumber.startsWith('9860') && cardNumber.length == 16){
//     console.log('Excellent :)')
//     console.log(cardNumber.slice(0,4) + '********' + cardNumber.slice(12,16))
//     console.log('HUMO')
// }else{
//     console.log('That was Wrong')
// }}
// checkNumber('9860657899945645')
// //ismning bosh harfini katta harfga aylantiruvchi kod
//  let name = 'javlon'
//  function checkFirstletter(){
// console.log(name[0].toUpperCase() + name.substring(1)) 
// ;
//  }
//  checkFirstletter()

// //stringda berilgan qiymatni 17 amrta takrorlovchi kod
// let str = 'Samandar '
// function repeatStr (){
// return str.repeat(17)
// // return str.toUpperCase(s)
// }
// console.log(repeatStr())


// A program that can delete vowels in the text!!!

let str = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, distinctio quas expedita incidunt accusamus ratione, pariatur maxime praesentium beatae, hic quam unde? Optio quas expedita harum eligendi corrupti excepturi! Excepturi. ';
let result = '';

function checkString(str){
    for (let i = 0; i < str.length; i++){
        if (!str[i].includes('i') && !str[i].includes('e') && !str[i].includes('a') && !str[i].includes('u') && !str[i].includes('o')){
            // console.log('str')
            result = result + str[i]
        }
    }
    console.log(result)
}
checkString(str)
