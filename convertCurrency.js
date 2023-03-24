const yen = 5
function currency(yen){
    const result = yen * 0.0077
    return `${yen} Yen is ${result} US Dollars.`
}
console.log(currency(yen))