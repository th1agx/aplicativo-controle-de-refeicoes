//TelaPrincipal.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './estilos'; // Importa os estilos

export default function TelaPrincipal({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
        <Image
          style={styles.voltarIcon}
          source={require('./imagens/voltar.png')} 
        />
      </TouchableOpacity>

      <Image
        style={styles.logo}
        source={require('./imagens/login.png')}
      />

      <Text style={styles.nomeApp}>Controle de Refeições</Text>

      <Text style={styles.nomedata}>SELECIONE A DATA PARA REGISTRO: </Text>
        <TouchableOpacity onPress={showDatepicker}>
          <Text style={styles.data}>{formatDate(date)}</Text>
        </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="calendar"
          onChange={onChange}
        />
      )}

      <View style={styles.grupobotoes}>
        <TouchableOpacity
          style={styles.botaoManha}
          onPress={() => navigation.navigate('RegistroFreqManha', { selectedDate: date })}>
          <Text style={styles.textoBotao}>MANHÃ</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.grupobotoes}>
        <TouchableOpacity
          style={styles.botaoTarde}
          onPress={() => navigation.navigate('RegistroFreqTarde', { selectedDate: date })}>
          <Text style={styles.textoBotao}>TARDE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.grupobotoes}>
        <TouchableOpacity
          style={styles.botaoTotal}
          onPress={() => navigation.navigate('RegRefeicoesTotal', { selectedDate: date })}>
          <Text style={styles.textoBotao}>TOTAL GERAL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
