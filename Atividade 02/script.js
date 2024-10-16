let estudantes = [
    {
      id: 1,
      nome: "João",
      disciplinas: {
        "Matemática": 7.5,
        "História": 8.0
      }
    },
    {
      id: 2,
      nome: "Maria",
      disciplinas: {
        "Matemática": 9.0,
        "História": 7.0
      }
    },
    {
      id: 3,
      nome: "Carlos",
      disciplinas: {
        "Matemática": 6.5,
        "História": 8.5
      }
    }
  ];
  
  estudantes.push({
    id: 4,
    nome: "Ana",
    disciplinas: {
      "Matemática": 8.5,
      "História": 9.0
    }
  });
  
  estudantes = estudantes.filter(estudante => estudante.id !== 2);
  
  estudantes.forEach(estudante => {
    estudante.disciplinas["Matemática"] += 1;
  });
  
  console.log(estudantes);
  