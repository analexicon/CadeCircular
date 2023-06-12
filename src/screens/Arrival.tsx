import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {Manager} from '../types';

const App = (): JSX.Element => {
  const john = new Manager('John', '123456789', 'john', '1234');
  const [manager, setManager] = useState<Manager>(john);
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        style={STYLES.container}
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={STYLES.simpleText}>
            Olá, mundo!{' '}
            {manager.authenticate('john', '123')
              ? 'Autenticado'
              : 'Não autenticado'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

import STYLES from '../styles/styles';

export default App;
