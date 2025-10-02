const idade = document.getElementById('idade');
const verifyButton = document.getElementById('verifyButton');
const resultado = document.getElementById('resultado');

function verificarIdade(){
  resultado.classList.remove('visivel');
  const idade = parseInt(idade.value);
  let menssagem = '';

  if(isNan(idade) || idade < 0){
    menssagem = 'Digite uma idade válida.';
  }else if(idade < 18){
    menssagem = "Você é menor de idade";
  }else if(idade < 60){
     menssagem = 'Você é adulto';
  }else{
    menssagem = 'Você é idoso'
  }
}