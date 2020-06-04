const n1 = "1"
const n2 = "12"
document.write(n1 + n2)


//boolean
const bTrue = true
const bFalse = false
document.write(bFalse)


//objetos possuem propriedades e funcionalidades
const pessoa = {
    altura: "1,80",
    idade: 24,
    solteiro: true,
    correr(){
      document.write("executar uma grande logica de correr")
    }
  }
  pessoa.correr()
  

  //vetores
  const colecaoDeBolinhas = ["blue", //"green", 1, {name: "my name"}]
  document.write(colecaoDeBolinhas[3].name)
  

  //Funções - funcionalidades - atalhos - reuso de código
  //registrar função
  function sayMyName(name){
    document.write(name)
  }
  
  //executar função
  sayMyName("Douglas")
  sayMyName("Blau")
  sayMyName("Igor")
  


  //condicionais
  const notaFinal = 7
  if(notaFinal < 5){
    //caminho 1
    document.write("Reprovado")
  } else{
    //caminho 2
    document.write("Aprovado")
  }
  
  
  //loop repetições
  for (i=0; i<3;i++){
    document.write(`<p>${i}</p>`)
  }