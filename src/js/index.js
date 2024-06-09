/*@everyone Objetivos 
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista 

- passo 1 - dar um jeito de pegar o elemento HTML da seta avancar 

- passo 2 - dar um jeito de identificar o clique do usuário na seta avançar 

- passo 3 - fazer aparecer o próximo cartão da lista 

- passo 4 - buscar o cartão que esta selecionado e esconder 





4 - buscar o cartão que esta selecionado e esconder*/


/*OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista */
const btnAvancar =document.getElementById("btn-avancar");
//- objt 2 passo 2 - dar um jeito de identificar o clique do usuário na seta voltar - passo 
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

//- passo 2 - dar um jeito de identificar o clique do usuário na seta avançar 
 btnAvancar.addEventListener("click",function () {
    
    console.log(cartaoAtual);
    console.log(cartoes.length - 1); //5
    console.log(cartaoAtual === cartoes.length - 1);


    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
  if(ehUltimoCartao) return;



  //4 - buscar o cartão que esta selecionado e esconder*/  
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

//- passo 3 - fazer aparecer o próximo cartão da lista colocando a classe selecionado nele.

cartaoAtual++;
     Mostrarcartao();

});



//OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista 
//- passo 1 - dar um jeito de pegar o elemento HTML da seta voltar 

 btnVoltar.addEventListener("click",function () {
console.log(cartaoAtual);

 const PrimeiroCartao = cartaoAtual === 0;
  if(PrimeiroCartao) return;


  //4 - buscar o cartão que esta selecionado e esconder*/  
    esconderCartaoselecionado();

//- passo 3 - fazer aparecer o próximo cartão da lista colocando a classe selecionado nele.

cartaoAtual--;
Mostrarcartao();

 });

function Mostrarcartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoselecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
