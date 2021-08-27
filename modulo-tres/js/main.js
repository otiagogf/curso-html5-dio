//var nome = "Tiago Figueira";
//var idade = 27;
//var idade2 = 10;

//alert(nome + " tem " + idade + " anos!!!");

////(idade + idade2);

/*
Usando os números como texto

var idade = "27";
var idade2 = "10";
alert(idade + idade2);
*/

/*

Usando o console do navegador para mostrar as variáveis

var idade = 27;
var idade2 = 10;
console.log(nome)
console.log(idade + idade2);
*/

/*
 * Usando replace para strings "alteração de texto"
 * var = frase = "O Japão é o melhor time do mundo";
 * console.log(frase) mostrando a frase original
 * console.log(frase.replace("Japão, "Brasil")); Alterando Japão por Brasil
 * alert(frase.replace("Japão, "Brasil"));
 */

/* 
    Ajustando texto todo para maiúsculo
    console.log(frase.toUppercase());

    Ajustando texto todo para minúsuclo
    console.log(frase.toLowerCase());
*/
function soma(n1, n2) {
    return n1 + n2;
}

/*function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));*/

function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://www.youtube.com/");
    //window.location.href = "https://www.youtube.com/";
}

function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}





