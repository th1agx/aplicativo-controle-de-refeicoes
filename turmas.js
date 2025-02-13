//turmas.js
// Lista de turmas
export const turmasNome = [
  { ano_Escolar: "03 anos", codTurma: "EI31A", nomeTurma: "PINÓQUIO", turno: "1º", turno_Descr: "MANHÃ", horario: "7:00 às 11:20", prof_Ref: "Arletes Tomé da Silva", prof_Apoio: "Naiara Martins Lima", sala: "2", matr_Frequentes: 16, max_estud: 16 }, 
  { ano_Escolar: "03 anos", codTurma: "EI31B", nomeTurma: "OS 3 PORQUINHOS", turno: "1º", turno_Descr: "MANHÃ", horario: "7:00 às 11:20", prof_Ref: "Danusa Black Matos", prof_Apoio: "Naiara Martins Lima", sala: "1", matr_Frequentes: 15, max_estud: 16 },
  { ano_Escolar: "03 anos", codTurma: "EI32A", nomeTurma: "CINDERELA", turno: "2º", turno_Descr: "TARDE", horario: "13:00 às 17:20", prof_Ref: "Arletes Tomé da Silva", prof_Apoio: "Glaucia Souza Santos Gomes", sala: "2", matr_Frequentes: 16, max_estud: 16 },  
  { ano_Escolar: "03 anos", codTurma: "EI32B", nomeTurma: "FESTA NO CÉU", turno: "2º", turno_Descr: "TARDE", horario: "13:00 às 17:20", prof_Ref: "Bárbara Araújo da Silva", prof_Apoio: "Glaucia Souza Santos Gomes", sala: "1", matr_Frequentes: 15, max_estud: 16 },
  { ano_Escolar: "04 anos", codTurma: "EI41A", nomeTurma: "A BELA E A FERA", turno: "1º", turno_Descr: "MANHÃ", horario: "7:00 às 11:20", prof_Ref: "Luci Aparecida Dos Santos", prof_Apoio: "Fernanda Dias de Araújo", sala: "5", matr_Frequentes: 19, max_estud: 20 },
    { ano_Escolar: "04 anos", codTurma: "EI41B", nomeTurma: "BRANCA DE NEVE", turno: "1º", turno_Descr: "MANHÃ", horario: "7:00 às 11:20", prof_Ref: "Gislene da Silva", prof_Apoio: "Fernanda Dias de Araújo", sala: "3", matr_Frequentes: 18, max_estud: 20 },
  { ano_Escolar: "04 anos", codTurma: "EI41C", nomeTurma: "CHAPEUZINHO VERMELHO", turno: "1º", turno_Descr: "MANHÃ", horario: "7:00 às 11:20", prof_Ref: "Roberta Fernandes da Silva", prof_Apoio: "Helci da Silva Carvalho", sala: "6", matr_Frequentes: 18, max_estud: 20 },
  { ano_Escolar: "04 anos", codTurma: "EI41D", nomeTurma: "JOÃO E MARIA", turno: "1º", turno_Descr: "MANHÃ", horario: "7:00 às 11:20", prof_Ref: "Maria Imaculada de Assis Oliveira", prof_Apoio: "Helci da Silva Carvalho", sala: "4", matr_Frequentes: 19, max_estud: 20 },
  { ano_Escolar: "04 anos", codTurma: "EI42A", nomeTurma: "ALICE NO PAÍS DAS MARAVILHAS", turno: "2º", turno_Descr: "TARDE", horario: "13:00 às 17:20", prof_Ref: "Danielle Maria Castro dos Anjos", prof_Apoio: "Luci Aparecida Dos Santos", sala: "5", matr_Frequentes: 18, max_estud: 20 },
  { ano_Escolar: "04 anos", codTurma: "EI42B", nomeTurma: "PATINHO FEIO", turno: "2º", turno_Descr: "TARDE", horario: "13:00 às 17:20", prof_Ref: "Helci da Silva Carvalho", prof_Apoio: "Luci Aparecida Dos Santos", sala: "4", matr_Frequentes: 20, max_estud: 20 },
  { ano_Escolar: "04 anos", codTurma: "EI42C", nomeTurma: "O PEQUENO PRÍNCIPE", turno: "2º", turno_Descr: "TARDE", horario: "13:00 às 17:20", prof_Ref: "Leidizu dos Santos Andrade Pereira", prof_Apoio: "Evania Ferreira de Almeida", sala: "3", matr_Frequentes: 18, max_estud: 20 },
  { ano_Escolar: "05 anos", codTurma: "EI51A", nomeTurma: "JOÃO E O PÉ DE FEIJÃO", turno: "1º", turno_Descr: "MANHÃ", horario: "7:00 às 11:20", prof_Ref: "Danielle Laura Dantas do Nascimento Fonseca", prof_Apoio: "Eloiza da Silva de Andrade", sala: "9", matr_Frequentes: 18, max_estud: 25 },
  { ano_Escolar: "05 anos", codTurma: "EI51B", nomeTurma: "A FESTA DAS CORES", turno: "1º", turno_Descr: "MANHÃ", horario: "7:00 às 11:20", prof_Ref: "Daniele Antunes Araújo", prof_Apoio: "Eloiza da Silva de Andrade", sala: "10", matr_Frequentes: 19, max_estud: 25 },
  { ano_Escolar: "05 anos", codTurma: "EI51C", nomeTurma: "A LEBRE E A TARTARUGA", turno: "1º", turno_Descr: "MANHÃ", horario: "7:00 às 11:20", prof_Ref: "Meiry Helen Jardim Rodrigues", prof_Apoio: "Thais Lourrany da Silva Rodrigues", sala: "8", matr_Frequentes: 19, max_estud: 25 },
  { ano_Escolar: "05 anos", codTurma: "EI51D", nomeTurma: "CACHINHOS DOURADOS", turno: "1º", turno_Descr: "MANHÃ", horario: "7:00 às 11:20", prof_Ref: "Gabriela Nascimento de Siqueira Duque", prof_Apoio: "Thais Lourrany da Silva Rodrigues", sala: "7", matr_Frequentes: 18, max_estud: 25 },
  { ano_Escolar: "05 anos", codTurma: "EI52A", nomeTurma: "CHAPEUZINHO AMARELO", turno: "2º", turno_Descr: "TARDE", horario: "13:00 às 17:20", prof_Ref: "Luci Aparecida Dos Santos", prof_Apoio: "Evania Ferreira de Almeida", sala: "6", matr_Frequentes: 18, max_estud: 25 },
  { ano_Escolar: "05 anos", codTurma: "EI52B", nomeTurma: "A CIGARRA E A FORMIGA", turno: "2º", turno_Descr: "TARDE", horario: "13:00 às 17:20", prof_Ref: "Rejane de Oliveira Araújo", prof_Apoio: "Ana Cardoso de Souza Silva", sala: "7", matr_Frequentes: 20, max_estud: 25 },
  { ano_Escolar: "05 anos", codTurma: "EI52C", nomeTurma: "A GALINHA RUIVA", turno: "2º", turno_Descr: "TARDE", horario: "13:00 às 17:20", prof_Ref: "Maria Aparecida Santos Gusmão Marques", prof_Apoio: "Evania Ferreira de Almeida", sala: "8", matr_Frequentes: 18, max_estud: 25 },
  { ano_Escolar: "05 anos", codTurma: "EI52D", nomeTurma: "A PRINCESA E O SAPO", turno: "2º", turno_Descr: "TARDE", horario: "13:00 às 17:20", prof_Ref: "Giovanna Pereira Xavier", prof_Apoio: "Roberta Fernandes da Silva", sala: "10", matr_Frequentes: 19, max_estud: 25 },
  { ano_Escolar: "05 anos", codTurma: "EI52E", nomeTurma: "SOLDADINHO DE CHUMBO", turno: "2º", turno_Descr: "TARDE", horario: "13:00 às 17:20", prof_Ref: "Sabrina Fernandes de Almeida", prof_Apoio: "Roberta Fernandes da Silva", sala: "9", matr_Frequentes: "18", max_estud: "25" },
];
