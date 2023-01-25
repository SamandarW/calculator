function pow(x, n){
    return x ** n
}
console.log(pow(5,3))

function sqrt(x){
    return x ** (1/2)
}
console.log(sqrt(16))

function abs(x){
    if (x > 0){
        return x
    }else{
        return -(x)
    }
}
console.log(abs(-100))

function floor(k,l){
    if((k % l) > 5){
        return k
    }else if((k % l) == 0){
        return k
    }else
    return k
}
console.log(floor(-5.8))

function ceil(m, n){
    if((m % n) > 5){
        return n
    }else if((m % n) == 0){
        return n
    }else
    return n
}
console.log(ceil(4.1))

function round(a){
    return a.toFixed(0)
}
console.log(round(5.5))

function trunc(c){
    return c-(c % 1)
}
console.log(trunc(55.6))



