//estilosRegFreq
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  fechar: {
    position: 'absolute',
    top: 10,
    right: 30,
    marginTop: 30,
  },
  fecharIcon: {
    width: 24,
    height: 24,
  },

   voltar: {
    width: 50,
    height: 50,
    position: 'absolute',
    marginTop: 40,
    right: 2,
    zIndex: 2, //botao sobre por os demais
  },

  voltarIcon: {
    width: 24,
    height: 24,
  },
  
   header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  
  refeicao: {
    width: 50,
    height: 50,
    position: 'absolute',
    marginTop: 30,
    left: 2,
  },
  nomeRegistro: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
  },
  nomeEscola: {
    fontSize: 16,
    color: '#2E86C1',
  },
  turno: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  nomedata: {
    fontSize: 14,
    color: '#707070',
    marginTop: 10,
  },
  data: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#707070',
  },
  
  scrollContainer: {
    flex: 1,
  },
  tipoIdade: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#2E86C1',
  },

  headerRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 5, // Para ajustar o espaçamento entre o header e os dados
  backgroundColor: '#f2f2f2', // Cor de fundo para destacar o cabeçalho
  paddingHorizontal: 2, // Para alinhar os textos à esquerda e à direita
},

turmaHeader: {
  fontSize: 14,
  fontWeight: 'bold',
  width: '20%',
  textAlign: 'left',
},
nomeHeader: {
  fontSize: 14,
  fontWeight: 'bold',
  width: '60%',
  textAlign: 'left',
},
presenteHeader: {
  fontSize: 14,
  fontWeight: 'bold',
  width: '20%',
  textAlign: 'right',
},

  turmaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
  },
  turmaCodigo: {
    flex: 1,
    fontSize: 16,
    width: '20%',
    textAlign: 'left',
  },
  turmaNome: {
    flex: 2,
    fontSize: 10,
    width: '60%',
  },
  turmaPresenteInput: {
    flex: 1,
    height: 40, // ajuste a altura do campo
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 1,
    fontSize: 14,
    textAlign: 'center',
    borderBottomWidth: 1,
    // backgroundColor: '#D9D9D9',
    width: '15%', // Define um tamanho para o campo de presentes
  
    // paddingHorizontal: 5,
    // borderRadius: 5,
  },
  totalPresentes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginTop: 20,
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalValor: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  salvar: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  salvarIcon: {
    width: 40,
    height: 40,
  },
  alterar: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  alterarIcon: {
    width: 40,
    height: 40,
  },

  mensagemSucesso: {
    color: 'green', // Define a cor verde
    fontSize: 14,   // Tamanho da fonte
    textAlign: 'center',  // Centraliza o texto
    marginVertical: 10,   // Adiciona margem em cima e embaixo
  },

  separator: {
  width: 1, // largura da barra
  height: '100%', // altura da barra para preencher a altura do cabeçalho
  backgroundColor: '#ccc', // cor da barra de separação
},


});

export default styles;
