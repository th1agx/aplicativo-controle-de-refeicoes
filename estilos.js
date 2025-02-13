// estilos.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    padding: 8,
  },

  nomeApp: {
    color: '#000',
    fontSize: 25,
    marginBottom: 60,
  },

  nomeRegistro: {
    color: '#000',
    fontSize: 16,
    marginBottom: 10,
  },

  nomeEscola: {
    color: '#000',
    fontSize: 14,
    marginBottom: 10,
  },

  turno: {
    color: '#000',
    fontSize: 14,
    marginBottom: 10,
  },

  nomedata: {
    color: '#000',
    fontSize: 15,
    marginBottom: 10,
    fontWeight: 'bold', // Deixa o texto em negrito
  },

  data: {
    color: '#2E86C1', // Altera a cor para azul
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  tipoIdade: {
    color: '#000',
    fontSize: 14,
    marginBottom: 10,
  },

  label: {
    color: '#000',
    fontSize: 17,
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: '5%',
  },

  caixatexto: {
    backgroundColor: '#D9D9D9',
    marginBottom: 20,
    width: '90%',
    fontSize: 17,
    padding: 10,
    borderRadius: 8,
  },

  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 10,
  },

  senhaContainer: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    marginBottom: 20,
    width: '90%',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  inputSenha: {
    flex: 1,
    fontSize: 17,
  },


  esqueceuSenha: {
    color: '#000',
  },

  grupobotoes: {
    width: '90%',
  },

   fechar: {
    position: 'absolute',
    top: 60,
    right: 20,
  },

  fecharIcon: {
    width: 24,
    height: 24,
  },

  voltar: {
    position: 'absolute',
    top: 60,
    right: 30,
  },

  voltarIcon: {
    width: 24,
    height: 24,
  },

  salvarIcon: {
    width: 30,
    height: 30,
  },

  alterarIcon: {
    width: 30,
    height: 30,
  },

  logo: {
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    
  },

  refeicao: {
    width: 40,
    height: 40,

  },
  
  botaoLogin: {
    backgroundColor: '#3F6A92',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    
  },

  botaoManha: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },

  botaoTarde: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },

   botaoTotal: {
    backgroundColor: '#D9D9D9',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  
  textoBotao: {
    color: '#000',
    fontSize: 17,
  },
  
  crieconta: {
    color: '#000',
  },

});
