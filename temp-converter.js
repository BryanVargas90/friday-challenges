const Farenheit = 80

function converter (Farenheit){
    let celsious = Farenheit - 32
    celsious = (5/9) * celsious
    console.log (`Today is ${Farenheit}F (${celsious}C).`) //10

    // const celsious = (Farenheit -32) * (5/9)
    // console.log (celsious) 
}
converter (Farenheit)
