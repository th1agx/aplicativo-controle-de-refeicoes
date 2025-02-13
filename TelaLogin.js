//TelaLogin
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import styles from './estilos'; 
import { dadosProfessores } from './professores'; 
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const validarUsuario = (cpf, matricula) => {
  return dadosProfessores.find(
    (usuario) => usuario.cpf === cpf && usuario.matricula === matricula
  );
};

// Função personalizada para exibir a Notificação
const mostrarNotificacao = (mensagem) => {
  Alert.alert('Notificação', mensagem);
};

export default function TelaLogin() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigation = useNavigation();

  const validar = () => {
    if (!usuario) {
      mostrarNotificacao('Por favor, preencha a sua Matrícula.');
      return;
    }
    
    if (!senha) {
      mostrarNotificacao('Por favor, preencha a matrícula.');
      return;
    }

    const usuarioEncontrado = validarUsuario(usuario, senha);
    if (usuarioEncontrado) {
      mostrarNotificacao('Usuário autenticado com sucesso!');
      navigation.navigate('TelaPrincipal'); // Navega para Telaturnos
    } else {
      mostrarNotificacao('Matrícula inválida em Usuário ou Senha incorreta.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80} // Ajuste conforme necessário
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('./imagens/login.png')}
          />

          <Text style={styles.nomeApp}>Controle de Refeições</Text>

          <Text style={styles.label}>Usuário</Text>

          <TextInput
            style={styles.caixatexto}
            placeholder="Digite sua Matrícula da PMC"
            value={usuario}
            onChangeText={setUsuario}
          />

          <Text style={styles.label}>Senha</Text>

          <View style={styles.senhaContainer}>
            <TextInput
              secureTextEntry={!mostrarSenha}
              style={styles.inputSenha}
              placeholder="Digite novamente sua Matrícula"
              value={senha}
              onChangeText={setSenha}
            />
            <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
              <MaterialIcons
                name={mostrarSenha ? 'visibility' : 'visibility-off'}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.grupobotoes}>
            <TouchableOpacity style={styles.botaoLogin} onPress={validar}>
              <Text style={styles.textoBotao}>FAZER LOGIN</Text>
            </TouchableOpacity>
          </View>

         
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
