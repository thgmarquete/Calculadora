function clic(){
    var number_1 = document.getElementById('number_1').value
    var number_2 = document.getElementById('number_2').value
    var operation = document.getElementById('operation').valu
    var result = document.getElementById('result')
    var amount_1 = parseInt(number_1)
    var amount_2 = parseInt(number_2)


    if (operation == "sum"){
        
        let sum = (amount_1 + amount_2)
        console.log(`${sum}`)
        alert(` O valor da soma é: ${sum}`)
        result.innerHTML = (`O valor da soma é: ${sum}`)

    }  else if (operation == "subtract") {

        let subtract = (amount_1 - amount_2)
        console.log(`${subtract}`)
        alert(`O valor da subtração é ${subtract}`)
        result.innerHTML = (`O valor da subtração é: ${subtract}`)
        }   
         else if (operation == "multiply"){
                console.log('teste')
                let multiply = (amount_1 * amount_2)
                console.log(`${multiply}`)
                alert(`O valor da multiplicação é ${multiply}`)
                result.innerHTML = (`O valor da multiplicação é: ${multiply}`)
            }  else {
                
                 let divide = (amount_1 / amount_2)
                 console.log(`${divide}`)
                 alert(`O valor da divisao é ${divide}`)
                 result.innerHTML = (`O valor da divisão é: ${divide}`)

                 }

  

}