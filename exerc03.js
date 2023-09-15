let nome = prompt("Qual seu nome?");

let idade = parseFloat(prompt("Qual a sua idade?"))

let ano = parseInt(prompt("Ano atual:"))

let niver = prompt("Você já fez aniversário esse ano?")


// um igual (=) significa que esta guardando algo
// dois iguais (==) significa que estou comparando os caracteres
// três iguais (===) significa que estou comparando caracteres e o tipo do dado


var result = ano - idade

if(niver == "sim"){
    alert(`Você nasceu em: ${result}`);

}else{
    var result1 = result - 1;
    alert(`Você nasceu em: ${result1}`)

}

