//App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './TelaLogin';
import Telaprincipal from './TelaPrincipal';
import RegistroFreqManha from './RegistroFreqManha';
import RegistroFreqTarde from './RegistroFreqTarde';
import RegRefeicoesManha from './RegRefeicoesManha';
import RegRefeicoesTarde from './RegRefeicoesTarde';
import RegRefeicoesTotal from './RegRefeicoesTotal'

const Stack = createNativeStackNavigator();

 //mudar o nome initialRouteName para ver qual tela trabalhar
 export default function App({ navigation }) {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin"> 
        <Stack.Screen 
          name="TelaLogin" 
          component={TelaLogin} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="TelaPrincipal" 
          component={Telaprincipal} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RegistroFreqManha" 
          component={RegistroFreqManha} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RegistroFreqTarde" 
          component={RegistroFreqTarde} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RegRefeicoesTotal" 
          component={RegRefeicoesTotal} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RegRefeicoesManha" 
          component={RegRefeicoesManha} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RegRefeicoesTarde" 
          component={RegRefeicoesTarde} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

