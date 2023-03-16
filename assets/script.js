//Aula 78 Function Construtora
function Calculadora() {  // criando a calculadora 
 this.display = document.querySelector('.display'); // seleciona o display direto do html 
 
 this.inicia = () =>  {
   this.capturaCliques(); //ArrowFunction
   this.Capturaenter();
};
this.capturaEnter = () => {
  document.addEventListener('keypress', e => {
    if (e.keyCode !== 13) return;
    this.realizaConta();
  });
};

 this.capturaCliques = () => { 
   document.addEventListener('click', event => {
   const el = event.target; // 
   if (el.classList.contains('btn-num')) this.addNumDisplay(el);
   if (el.classList.contains('btn-clear')) this.clear(el);
   if (el.classList.contains('btn-del')) this.del(el);
   if (el.classList.contains('btn-eq')) this.realizaConta(el);
   });
 };
this.realizaConta = () => {
  try {
    const conta = eval(this.display.value);
      if(!conta) {
        alert('conta invalida');
        return;
      }
    this.display.value = conta;
    } catch(e) {
    alert('Conta inválida');
    return;
  }
}

 this.addNumDisplay = el => {
   this.display.value += el.innerText;
   this.display.focus();
 }
 this.clear = el => this.display.value = '';
 this.del = () => this.display.value = this.display.value.slice(0, -1);

} // fim da funcao CAlculadora

const calculadora = new Calculadora();
calculadora.inicia();