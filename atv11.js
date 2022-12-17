function clicar() {
    var nome = document.querySelector(".num1").value;
    var idade = document.querySelector(".num2").value;
   
    var resultado = (`Bem vindo(o)! seu nome é ${nome} e sua idade é ${idade}.`) 
    document.querySelector(".resultado").innerHTML = resultado;
}