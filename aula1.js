var maiorAltura = 0;
var menorAltura = 2.99;

var somaAlturaHomem = 0;
var contHomem = 0;
var contMulher = 0;

for (var i = 0; i < 15; i++){
    var sexo = prompt("Qual seu sexo? [M]masculino ou [F]feminino");
    var altura = prompt("Qual sua altura, informe em números decimais. ex:(1.73)");

    var alturaint = parseFloat(altura);

    if (sexo == "m"){
        contHomem++;
        somaAlturaHomem += alturaint;
        if(alturaint > maiorAltura){
            maiorAltura = altura;
        }
        
        if(alturaint < menorAltura){
            menorAltura = altura;
        }        
    }else if(sexo == "f"){
        contMulher++;
        if(alturaint > maiorAltura){
            maiorAltura = altura;
        }
        
        if(alturaint < menorAltura){
            menorAltura = altura;
        }
    }else{
        console.log("Usuário não cadastrado (Opção inválida)");
    }    
}

var media = somaAlturaHomem/contHomem;
console.log(`Média de altura dos homens: ${media.toFixed(2)}m`);
console.log(`Maior altura do grupo: ${maiorAltura}m`);
console.log(`Menor altura do grupo: ${menorAltura}m`);
console.log(`Quantidade de mulheres: ${contMulher}`);