import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Sharing from 'expo-sharing';
import { captureRef } from 'react-native-view-shot';
import styles from './estiloTotalGeralRefeicoes';

export default function RegRefeicoesTotal({ navigation, route }) {
  const { selectedDate } = route.params || {};
  const [totaisCreche, setTotaisCreche] = useState({ manha: {}, tarde: {} });
  const [totaisPreEscola, setTotaisPreEscola] = useState({ manha: {}, tarde: {} });
  const [date, setDate] = useState(new Date(selectedDate));
  const viewRef = React.useRef();

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const registrosManha = await AsyncStorage.getItem('refeicoesPorDataManha');        
        const registrosTarde = await AsyncStorage.getItem('refeicoesPorDataTarde');

        if (registrosManha) {
          const dataObject = JSON.parse(registrosManha);
          const dadosManha = dataObject[date.toLocaleDateString('pt-BR')];

          if (dadosManha) {
            setTotaisCreche(prev => ({ ...prev, manha: dadosManha.creche || {} }));
            setTotaisPreEscola(prev => ({ ...prev, manha: dadosManha.preEscola || {} }));
          }
        }

        if (registrosTarde) {
          const dataObject = JSON.parse(registrosTarde);
          const dadosTarde = dataObject[date.toLocaleDateString('pt-BR')];

          if (dadosTarde) {
            setTotaisCreche(prev => ({ ...prev, tarde: dadosTarde.creche || {} }));
            setTotaisPreEscola(prev => ({ ...prev, tarde: dadosTarde.preEscola || {} }));
          }
        }
      } catch (error) {
        console.error('Erro ao carregar os dados: ', error);
      }
    };

    carregarDados();
  }, [date]);

  const renderTotais = (tipo, totais) => (
    <View key={tipo}>
      <Text style={styles.tipoIdade}>TOTAL {tipo}</Text>
      <View style={styles.headerRow}>
        <Text style={styles.nomeHeader}>TURNO</Text>
        <View style={styles.separator} />
        <Text style={styles.presenteHeader}>DESJEJUM</Text>
        <View style={styles.separator} />
        <Text style={styles.presenteHeader}>REPT DESJEJUM</Text>
        <View style={styles.separator} />
        <Text style={styles.presenteHeader}>ALMOÇO</Text>
        <View style={styles.separator} />
        <Text style={styles.presenteHeader}>REPT ALMOÇO</Text>
        <View style={styles.separator} />
        <Text style={styles.presenteHeader}>FRUTA</Text>
        <View style={styles.separator} />
        <Text style={styles.presenteHeader}>REPT FRUTA</Text>
      </View>

      <View style={styles.totalRow}>
        <Text style={styles.nomeHeader}>MANHÃ</Text>
        <View style={styles.separator} />
        <Text style={styles.totalValor}>{totais.manha?.cafe || 0}</Text>
        <Text style={styles.totalValor}>{totais.manha?.rept || 0}</Text>
        <Text style={styles.totalValor}>{totais.manha?.almoco || 0}</Text>
        <Text style={styles.totalValor}>{totais.manha?.rept1 || 0}</Text>
        <Text style={styles.totalValor}>{totais.manha?.fruta || 0}</Text>
        <Text style={styles.totalValor}>{totais.manha?.rept2 || 0}</Text>
      </View>

      <View style={styles.headerRow}>
        <Text style={styles.nomeHeader}>TURNO</Text>
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

      <View style={styles.totalRow}>
        <Text style={styles.nomeHeader}>TARDE</Text>
        <View style={styles.separator} />
        <Text style={styles.totalValor}>{totais.tarde?.lanche || 0}</Text>
        <Text style={styles.totalValor}>{totais.tarde?.rept || 0}</Text>
        <Text style={styles.totalValor}>{totais.tarde?.jantar || 0}</Text>
        <Text style={styles.totalValor}>{totais.tarde?.rept1 || 0}</Text>
        <Text style={styles.totalValor}>{totais.tarde?.fruta || 0}</Text>
        <Text style={styles.totalValor}>{totais.tarde?.rept2 || 0}</Text>
      </View>
    </View>
  );


  const handleShare = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.8,
      });
      await Sharing.shareAsync(uri, { dialogTitle: 'Enviar itens para' });
    } catch (error) {
      console.error('Erro ao compartilhar a imagem: ', error);
    }
  };

  return (
    <View style={styles.container} ref={viewRef}>
      <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
        <Image style={styles.voltarIcon} source={require('./imagens/voltar.png')} />
      </TouchableOpacity>

      <View style={styles.header}>
        <Image style={styles.refeicao} source={require('./imagens/refeicao.png')} />
        <Text style={styles.nomeRegistro}>Registro das Refeições</Text>
        <Text style={styles.nomeEscola}>CEMEI Vale das Orquídeas</Text>

        <Text style={styles.nomedata}>DATA: {date.toLocaleDateString('pt-BR')}</Text>

        {/* Botão compartilhar */}
        <TouchableOpacity style={styles.compartilharButton} onPress={handleShare}>
          <Image style={styles.compartilharIcon} source={require('./imagens/compartilhar.png')} />
        </TouchableOpacity>
      </View>

      <Text style={styles.nomeTitulo}>LISTAGEM DE REFEIÇÕES SERVIDAS</Text>

      <ScrollView>
        {renderTotais('CRECHE (0 A 3 ANOS)', totaisCreche)}
        {renderTotais('PRÉ-ESCOLA (4 A 5 ANOS)', totaisPreEscola)}
      </ScrollView>
    </View>
  );
}
