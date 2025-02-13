//RegistroFreqTarde
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './estilosRegFreq';
import { turmasNome } from './turmas';

export default function RegistroFreqTarde({ navigation, route }) {
  const { selectedDate } = route.params || { selectedDate: new Date() };
  const [presentes, setPresentes] = useState({});
  const [crecheTurmas, setCrecheTurmas] = useState([]);
  const [preEscolaTurmas, setPreEscolaTurmas] = useState([]);
  const [mensagemSucesso, setMensagemSucesso] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const formattedSelectedDate = formatDate(selectedDate);

  useEffect(() => {
    const creche = turmasNome.filter(
      (turma) => turma.ano_Escolar === '03 anos' && turma.turno_Descr === 'TARDE'
    );
    setCrecheTurmas(creche);

    const preEscola = turmasNome.filter(
      (turma) =>
        (turma.ano_Escolar === '04 anos' || turma.ano_Escolar === '05 anos') &&
        turma.turno_Descr === 'TARDE'
    );
    setPreEscolaTurmas(preEscola);

    const loadPresentes = async () => {
      try {
        const storedData = await AsyncStorage.getItem('presentesPorData');
        const dataObject = storedData ? JSON.parse(storedData) : {};
        setPresentes(dataObject[formattedSelectedDate] || {});
      } catch (error) {
        console.error('Erro ao carregar os dados de presentes: ', error);
      }
    };

    loadPresentes();
  }, [formattedSelectedDate]);

  const handleInputChange = (codTurma, value) => {
    setPresentes((prev) => ({ ...prev, [codTurma]: value }));
  };

  const handleSave = async () => {
    try {
      const storedData = await AsyncStorage.getItem('presentesPorData');
      const dataObject = storedData ? JSON.parse(storedData) : {};

      // Atualiza os dados da data específica
      dataObject[formattedSelectedDate] = presentes;

      await AsyncStorage.setItem('presentesPorData', JSON.stringify(dataObject));
      await AsyncStorage.setItem('presentesPorData', JSON.stringify(dataObject));
      setMensagemSucesso(
        'Seu registro de frequência do dia foi registrado com sucesso!');
        setIsSaved(true);

      // Limpa a mensagem após 5 segundos
      setTimeout(() => {
        setMensagemSucesso('');
      }, 5000);

      Alert.alert(
        'Sucesso',
        'Clique no Ícone (lápis) à direita para registrar as REFEIÇÕES!'
      );
    } catch (error) {
      console.error('Erro ao salvar os dados de presentes: ', error);
    }
  };

  const totalPresentesCreche = crecheTurmas.reduce((total, turma) => {
    return total + (parseInt(presentes[turma.codTurma]) || 0);
  }, 0);

  const totalPresentesPreEscola = preEscolaTurmas.reduce((total, turma) => {
    return total + (parseInt(presentes[turma.codTurma]) || 0);
  }, 0);

  const totalPresentesTarde = totalPresentesCreche + totalPresentesPreEscola;

   return (
      <View style={styles.container}>
      <TouchableOpacity
        style={styles.voltar}
        onPress={() => {
          if (isSaved) {
            navigation.goBack();
            return;
          }

          if (Object.keys(presentes).length > 0) {
            Alert.alert(
              "Deseja sair da tela sem salvar os dados?",
              "Clique em CANCELAR e salve os dados ou SAIR sem salvar.",
              [
                { text: "Cancelar", style: "cancel" },
                {
                  text: "Sair",
                  onPress: () => navigation.goBack(),
                },
              ]
            );
          } else {
            navigation.goBack();
          }
        }}
      >
        <Image
          style={styles.voltarIcon}
          source={require('./imagens/voltar.png')}
        />
      </TouchableOpacity>

      <View style={styles.header}>
        <Image
          style={styles.refeicao}
          source={require('./imagens/refeicao.png')}
        />

        <Text style={styles.nomeRegistro}>Registro da Frequência</Text>
        <Text style={styles.nomeEscola}>CEMEI Vale das Orquídeas</Text>
        <Text style={styles.turno}>TARDE</Text>
        <Text style={styles.nomedata}>DATA: {formattedSelectedDate}</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.salvar} onPress={handleSave}>
          <Image
            style={styles.salvarIcon}
            source={require('./imagens/salvar.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.alterar}
          onPress={() => navigation.navigate('RegRefeicoesTarde', { selectedDate })}>
          <Image
            style={styles.alterarIcon}
            source={require('./imagens/alterar.png')}
          />
        </TouchableOpacity>
      </View>

      {mensagemSucesso ? (
        <View style={styles.mensagemSucessoContainer}>
          <Text style={styles.mensagemSucesso}>{mensagemSucesso}</Text>
        </View>
      ) : null}

      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.tipoIdade}>CRECHE - 0 A 3 ANOS</Text>

        <View style={styles.headerRow}>
          <Text style={styles.turmaHeader}>Cod. Turma</Text>
          <Text style={styles.nomeHeader}>Nome da Turma</Text>
          <Text style={styles.presenteHeader}>Presentes</Text>
        </View>

        {crecheTurmas.map((turma) => (
          <View key={turma.codTurma} style={styles.turmaRow}>
            <Text style={styles.turmaCodigo}>{turma.codTurma}</Text>
            <Text style={styles.turmaNome}>{turma.nomeTurma}</Text>
            <TextInput
              style={styles.turmaPresenteInput}
              value={presentes[turma.codTurma] || ''}
              onChangeText={(value) => handleInputChange(turma.codTurma, value)}
              keyboardType="numeric"
            />
          </View>
        ))}

        <View style={styles.totalPresentes}>
          <Text style={styles.totalLabel}>TOTAL PRESENTES NO DIA (0 A 3)</Text>
          <Text style={styles.totalValor}>{totalPresentesCreche}</Text>
        </View>

        <Text style={styles.tipoIdade}>PRÉ-ESCOLA - 4 E 5 ANOS</Text>

        <View style={styles.headerRow}>
          <Text style={styles.turmaHeader}>Cod. Turma</Text>
          <Text style={styles.nomeHeader}>Nome da Turma</Text>
          <Text style={styles.presenteHeader}>Presentes</Text>
        </View>

        {preEscolaTurmas.map((turma) => (
          <View key={turma.codTurma} style={styles.turmaRow}>
            <Text style={styles.turmaCodigo}>{turma.codTurma}</Text>
            <Text style={styles.turmaNome}>{turma.nomeTurma}</Text>
            <TextInput
              style={styles.turmaPresenteInput}
              value={presentes[turma.codTurma] || ''}
              onChangeText={(value) => handleInputChange(turma.codTurma, value)}
              keyboardType="numeric"
            />
          </View>
        ))}

        <View style={styles.totalPresentes}>
          <Text style={styles.totalLabel}>TOTAL PRESENTES NO DIA (4 E 5)</Text>
          <Text style={styles.totalValor}>{totalPresentesPreEscola}</Text>
        </View>

        <View style={styles.totalPresentes}>
          <Text style={styles.totalLabel}>TOTAL GERAL PRESENTES NO DIA</Text>
          <Text style={styles.totalValor}>{totalPresentesTarde}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

