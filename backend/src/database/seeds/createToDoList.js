const db = require('../connection');

exports.seed = function (){
  return db('to_do').insert([
  {
    title: "Introdução",
    description: "Estudar Introdução à Javascript",
    day: "Segunda Feira",
    hour: "16:00"
  },
  {
    title: "Execução de Scripts",
    description: "Estudar Maneiras de executar script",
    day: "Terça Feira",
    hour: "16:00"
  },
  {
    title: "Ocultar Scripts",
    description: "Estudar como Ocultar scripts em navegadores antigos",
    day: "Quarta Feira",
    hour: "16:00"
  },
  {
    title: "Tipos de Dados",
    description: "Estudar Tipos de Dados em Javascript",
    day: "Quinta Feira",
    hour: "16:00"
  },
  {
    title: "Navegadores",
    description: "Estudar Versões de navegadores e de Javascript",
    day: "Sexta Feira",
    hour: "16:00"
  },
  {
    title: "Componentização",
    description: "Estudar Componentização em React JS",
    day: "Segunda Feira",
    hour: "18:00"
  },
  {
    title: "Single Page Application",
    description: "Estudar conceito de SPA em React JS",
    day: "Terça Feira",
    hour: "18:00"
  },
  {
    title: "Imutabilidade",
    description: "Estudar conceito de imutabilidade em React JS",
    day: "Quarta Feira",
    hour: "18:00"
  },
  {
    title: "Estado",
    description: "Estudar conceito de estado em React JS",
    day: "Quinta Feira",
    hour: "18:00"
  },
  {
    title: "Propriedade",
    description: "Estudar Propriedade em React JS",
    day: "Sexta Feira",
    hour: "18:00"
  },
  {
    title: "React Native x React JS",
    description: "Estudar as diferenças em React Native e React JS",
    day: "Segunda Feira",
    hour: "20:00"
  },
  {
    title: "Tipos de Navegação",
    description: "Estudar tipos de Navegação em React Native",
    day: "Terça Feira",
    hour: "20:00"
  }
  ])
}