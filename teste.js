const usuarios = [
  {
    nome: 'Lucas',
    idade: 24
  },
  {
    nome: 'Melissa',
    idade: 21
  },
  {
    nome: 'Marcelo',
    idade: 58
  },
  {
    nome: 'Arthur',
    idade: 10
  },
  {
    nome: 'Julia',
    idade: 8
  },
  {
    nome: 'Caio',
    idade: 18
  }
]

const menoresDeIdade = usuarios.filter((menores) => menores.idade < 18)
const maioresDeIdade = usuarios.filter((menores) => menores.idade >= 18)

console.table(menoresDeIdade)
console.table(maioresDeIdade)
