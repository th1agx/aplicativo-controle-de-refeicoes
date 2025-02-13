//estiloTotalGeralRefeicoes.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
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
  
  nomeTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
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
  
   compartilharButton: {
    position: 'absolute',
    top: 100,
    right: 10,
    zIndex: 2,
  },
  compartilharIcon: {
    width: 30,
    height: 30,
  },

  scrollContainer: {
    flex: 1,
    paddingHorizontal: 10,
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
  
  nomeHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    width: 60,
    textAlign: 'left',
    paddingVertical: 10,
  },

  presenteHeader: {
    fontSize: 10,
    fontWeight: 'bold',
    width: 25,
    height: 40,
    textAlign: 'top',
    paddingVertical: 2,
    marginHorizontal: 5,
  },
  
  turmaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 2,
  },
 
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  
  totalValor: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 1,
    fontSize: 14,
    textAlign: 'center',
    width: 40,
    paddingVertical: 10,
    marginHorizontal: 1.5,
    backgroundColor: '#f2f2f2',
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
    width: 0, 
    backgroundColor: '#ffff',
  },

  separator1: {
    width: 28, 
    backgroundColor: '#ffff',
  },
});

export default styles;
