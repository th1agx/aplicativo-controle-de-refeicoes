//RegRefeicoesTarde

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
import styles from './estiloRegRefeicao';
import { turmasNome } from './turmas';

export default function RegRefeicoesTarde({ navigation, route }) {
  // Recebe a data passada via parâmetro e define a data atual caso não exista
  const selectedDate = route.params?.selectedDate ? new Date(route.params.selectedDate) : new Date();
  const [refeicoes, setRefeicoes] = useState({});
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

  // Formata a data selecionada para exibição e uso
  const formattedSelectedDate = formatDate(selectedDate);

  useEffect(() => {
    const loadTurmas = () => {
      const creche = turmasNome.filter(
        (turma) => turma.ano_Escolar === '03 anos' && turma.turno_Descr === 'TARDE'
      );
      const preEscola = turmasNome.filter(
        (turma) => (turma.ano_Escolar === '04 anos' || turma.ano_Escolar === '05 anos') && turma.turno_Descr === 'TARDE'
      );
      setCrecheTurmas(creche);
      setPreEscolaTurmas(preEscola);
    };

    const loadRefeicoes = async () => {
      try {
        const storedData = await AsyncStorage.getItem('refeicoesPorDataTarde');
        const dataObject = storedData ? JSON.parse(storedData) : {};
        setRefeicoes(dataObject[formattedSelectedDate]?.refeicoes || {});
      } catch (error) {
        console.error('Erro ao carregar os dados de refeições: ', error);
      }
    };

    loadTurmas();
    loadRefeicoes();
  }, [formattedSelectedDate]); // Observa as mudanças em formattedSelectedDate

  const calcularTotais = (turmas) => {
    return turmas.reduce((totais, turma) => {
      totais.lanche += parseInt(refeicoes[turma.codTurma]?.lanche || 0);
      totais.rept += parseInt(refeicoes[turma.codTurma]?.rept || 0);
      totais.jantar += parseInt(refeicoes[turma.codTurma]?.jantar || 0);
      totais.rept1 += parseInt(refeicoes[turma.codTurma]?.rept1 || 0);
      totais.fruta += parseInt(refeicoes[turma.codTurma]?.fruta || 0);
      totais.rept2 += parseInt(refeicoes[turma.codTurma]?.rept2 || 0);
      return totais;
    }, {
      lanche: 0,
      rept: 0,
      jantar: 0,
      rept1: 0,
      fruta: 0,
      rept2: 0,
    });
  };

  const handleSaveTarde = async () => {
    try {
      const storedData = await AsyncStorage.getItem('refeicoesPorDataTarde');
      const dataObject = storedData ? JSON.parse(storedData) : {};

      const dadosTarde = {
        refeicoes,
        date: formattedSelectedDate,
        creche: calcularTotais(crecheTurmas),
        preEscola: calcularTotais(preEscolaTurmas),
      };

      // Salva os dados com a data como chave
      dataObject[formattedSelectedDate] = dadosTarde;

      await AsyncStorage.setItem('refeicoesPorDataTarde', JSON.stringify(dataObject));

      setMensagemSucesso('Registros da tarde salvos com sucesso!');
      setIsSaved(true);

      setTimeout(() => setMensagemSucesso(''), 5000);
    } catch (error) {
      console.error('Erro ao salvar os dados da tarde: ', error);
    }
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.voltar}
        onPress={() => {
          if (isSaved) {
            navigation.goBack();
            return;
          }

          if (Object.keys(refeicoes).length > 0) {
            Alert.alert(
              "Deseja sair da tela sem salvar os dados?",
              "Clique em CANCELAR e salve os dados ou SAIR sem salvar.",
              [
                { text: "Cancelar", style: "cancel"},
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
        <Image style={styles.voltarIcon} source={require('./imagens/voltar.png')} />
      </TouchableOpacity>

      <View style={styles.header}>
        <Image style={styles.refeicao} source={require('./imagens/refeicao.png')} />

        <Text style={styles.nomeRegistro}>Registro das Refeições</Text>
        <Text style={styles.nomeEscola}>CEMEI Vale das Orquídeas</Text>
        <Text style={styles.turno}>TARDE</Text>
        <Text style={styles.nomedata}>DATA: {formattedSelectedDate}</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.salvar} onPress={handleSaveTarde}>
          <Image style={styles.salvarIcon} source={require('./imagens/salvar.png')} />
        </TouchableOpacity>
      </View>

      {mensagemSucesso && (
        <View style={styles.mensagemSucessoContainer}>
          <Text style={styles.mensagemSucesso}>{mensagemSucesso}</Text>
        </View>
      )}

      <ScrollView style={styles.scrollContainer}>

      {/* CRECHE - 0 A 3 ANOS */}
        <Text style={styles.tipoIdade}>CRECHE - 0 A 3 ANOS</Text>
        {/* Cabeçalhos */}
        <View style={styles.headerRow}>
          <Text style={styles.turmaHeader}>Cod. Turma</Text>
          <View style={styles.separator} />
          <Text style={styles.nomeHeader}>Nome da Turma</Text>
          <View style={styles.separator} />
          <Text style={styles.presenteHeader}>LANCHE</Text>
          <View style={styles.separator} />
          <Text style={styles.presenteHeader}>REPT LANCHE</Text>
          <View style={styles.separator} />
          <Text style={styles.presenteHeader}>JANTAR</Text>
          <View style={styles.separator} />
          <Text style={styles.presenteHeader}>REPT JANTAR</Text>
          <View style={styles.separator} />
          <Text style={styles.presenteHeader}>FRUTA</Text>
          <View style={styles.separator} />
          <Text style={styles.presenteHeader}>REPT FRUTA</Text>
        </View>

        {/* Renderiza as turmas da creche */}
        {crecheTurmas.map((turma) => (
          <View key={turma.codTurma} style={styles.turmaRow}>
            <Text style={styles.turmaCodigo}>{turma.codTurma}</Text>
            <Text style={styles.turmaNome}>{turma.nomeTurma}</Text>
            {['lanche', 'rept', 'jantar', 'rept1', 'fruta', 'rept2'].map((item) => (
              <TextInput
                key={item}
                style={styles.turmaPresenteInput}
                value={refeicoes[turma.codTurma]?.[item] || ''}
                onChangeText={(value) =>
                  setRefeicoes((prev) => ({
                    ...prev,
                    [turma.codTurma]: { ...prev[turma.codTurma], [item]: value },
                  }))
                }
                keyboardType="numeric"
              />
            ))}
          </View>
        ))}

        <Text style={styles.tipoIdade}>PRÉ-ESCOLA - 4 A 5 ANOS</Text>
        {/* Cabeçalhos */}
        <View style={styles.headerRow}>
          <Text style={styles.turmaHeader}>Cod. Turma</Text>
          <View style={styles.separator} />
          <Text style={styles.nomeHeader}>Nome da Turma</Text>
          <View style={styles.separator} />
          <Text style={styles.presenteHeader}>LANCHE</Text>
          <View style={styles.separator} />
          <Text style={styles.presenteHeader}>REPT LANCHE</Text>
          <View style={styles.separator} />
          <Text style={styles.presenteHeader}>JANTAR</Text>
          <View style={styles.separator} />
          <Text style={styles.presenteHeader}>REPT JANTAR</Text>
          <View style={styles.separator} />
          <Text style={styles.presenteHeader}>FRUTA</Text>
          <View style={styles.separator} />
          <Text style={styles.presenteHeader}>REPT FRUTA</Text>
        </View>

        {/* Renderiza as turmas da pré-escola */}
        {preEscolaTurmas.map((turma) => (
          <View key={turma.codTurma} style={styles.turmaRow}>
            <Text style={styles.turmaCodigo}>{turma.codTurma}</Text>
            <Text style={styles.turmaNome}>{turma.nomeTurma}</Text>
            {['lanche', 'rept', 'jantar', 'rept1', 'fruta', 'rept2'].map((item) => (
              <TextInput
                key={item}
                style={styles.turmaPresenteInput}
                value={refeicoes[turma.codTurma]?.[item] || ''}
                onChangeText={(value) =>
                  setRefeicoes((prev) => ({
                    ...prev,
                    [turma.codTurma]: { ...prev[turma.codTurma], [item]: value },
                  }))
                }
                keyboardType="numeric"
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
