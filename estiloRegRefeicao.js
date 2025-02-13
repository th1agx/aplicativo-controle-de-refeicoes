//estiloRegRefeicao
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
    zIndex: 2,
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
    paddingVertical: 5,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 2,
  },

  turmaHeader: {
    fontSize: 12, // Ajuste de tamanho
    fontWeight: 'bold',
    width: 40, // Espaço ajustado
    textAlign: 'left',
  },
  nomeHeader: {
    fontSize: 12, // Ajuste de tamanho
    fontWeight: 'bold',
    width: 50, // Espaço ajustado
    textAlign: 'left',
    paddingVertical: 10, // Para espaçamento vertical
  },
 
presenteHeader: {
    fontSize: 10, // Ajuste de tamanho
    fontWeight: 'bold',
    width: 25, // Espaço ajustado
    height: 40,
    textAlign: 'top',
    paddingVertical: 2,
    marginHorizontal: 5,
    
  },
  
  turmaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
  },
  turmaCodigo: {
    fontSize: 14,
    width: 40, // Espaço ajustado
    textAlign: 'left',
    
  },
  turmaNome: {
    fontSize: 10,
    width: 60, // Espaço ajustado
    textAlign: 'left',
    paddingVertical: 10, // Para alinhamento vertical
  },
  turmaPresenteInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 1,
    fontSize: 14,
    textAlign: 'center',
    width: 40, // Espaço ajustado
    paddingVertical: 10, // Para alinhamento vertical
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    width: 100, // Garantindo que ocupe toda a largura
  },
  
  
  totalPresentes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 1,
    marginTop: 10,
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 1,
    borderRadius: 5,
  },
  totalLabel: {
    fontSize: 12, // Ajuste de tamanho
    fontWeight: 'bold',
    width: 90, // Espaço ajustado
    textAlign: 'left',
    
  },

turmaTotal: {
    fontSize: 10,
    width: 12, // Espaço ajustado
    textAlign: 'left',
    paddingVertical: 10, // Para alinhamento vertical
  },
  
  totalValor: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 1,
    fontSize: 14,
    textAlign: 'center',
    width: 40.5, // Espaço ajustado
    paddingVertical: 10, // Para alinhamento vertical
    marginHorizontal: 1.5,
    backgroundColor: '#f2f2f2'
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
    color: 'green', 
    fontSize: 14,  
    textAlign: 'center',
    marginVertical: 10,
  },

  separator: {
    width: 1, 
    height: '1%',
    backgroundColor: '#ccc',
  },

});

export default styles;
