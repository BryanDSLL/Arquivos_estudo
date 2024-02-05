const alunos = [
    { nome: "Bryan", modulo: "JavaScript", nota_4: 3.5, nota_6: 5 },
    { nome: "Gaby", modulo: "HTML", nota_4: 4, nota_6: 6 },
    { nome: "Pedro", modulo: "JavaScript", nota_4: 1.5, nota_6: 4 },
    { nome: "Ana", modulo: "CSS", nota_4: 2, nota_6: 3 },
    { nome: "Marcos", modulo: "JavaScript", nota_4: 2, nota_6: 3 },
  ];
  
  function calculaMedia(alunos) {
    for (let aluno of alunos) {
      let media = (aluno.nota_4 + aluno.nota_6);
      if (media >= 7) {
        console.log("Parabéns " + aluno.nome + "! Você foi aprovado!")
      } else {
        console.log("Que pena " + aluno.nome + ". Você foi reprovado. :(");
      }
    }
  }
  
  calculaMedia(alunos);
  