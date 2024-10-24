alert ('Bem vindo ao jogo secreto!');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute; 
let tentativas = 1; 

//enquanto o chute não for igual o número secreto: 
while (chute != numeroSecreto) {
    chute = prompt ('Escolha um número secreto entre 1 e 100');

    //se o chute for igual ao número secreto: 
if (chute == numeroSecreto) {
    break; 
} else { 
    
    if ( numeroSecreto > chute ) {
        alert(`O número secreto é maior que o ${chute}`);
    } else {
    alert (`O número secreto é menor que o ${chute}`);
 }

 // tentativas = tentativas + 1 
 tentativas++; 
} 
 
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
alert (`Você descobriu o ${numeroSecreto} com ${tentativas} ${palavraTentativa}`)


