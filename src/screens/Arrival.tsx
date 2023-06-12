import STYLES from '../styles/styles';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

const Arrival = (): JSX.Element => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        style={STYLES.container}
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={STYLES.simpleText}>Olá, mundo!</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Arrival;
