var nome
var listaNomes = "Alunos presentes: ";


        // FEITO EM WHILE
        while (nome != "") {
            nome = prompt ("Insira o nome do aluno presente: ");
            listaNomes = listaNomes + ", " + nome         
        }
        console.log(listaNomes);

        // FEITO EM DO WHILE
        do {
            nome = prompt ("Insira o nome do aluno presente: ");
            listaNomes = listaNomes + ", " + nome
        }  while (nome != "");

        console.log(listaNomes);


