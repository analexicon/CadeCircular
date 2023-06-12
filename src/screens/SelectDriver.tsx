import STYLES from '../styles/styles';
import {Driver} from '../types';
import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {SimpleButtonDriver} from '../components/SimpleButton';

const SelectDriver = (): JSX.Element => {
  function handlePress() {
    console.log('Apertou!');
  }

  return (
    <View style={STYLES.container}>
      <Text style={STYLES.titleText}>Motoristas</Text>

      <View>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => (
            <SimpleButtonDriver
              driver={new Driver('0', item.key, '', '', '')}
            />
          )}
        />
      </View>
    </View>
  );
};

export default SelectDriver;
