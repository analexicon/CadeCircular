import STYLES from '../styles/styles';
import React, {PropsWithChildren} from 'react';
import {View, Text} from 'react-native';
import CommonButton from './CommonButton';

interface CommonHeaderProps extends PropsWithChildren {
  leftText?: string;
  rightText?: string;
}

const CommonHeader = (props: CommonHeaderProps): JSX.Element => {
  const leftChild = props.leftText ? (
    <CommonButton
      style={STYLES.headerSidesView}
      handlePress={() => console.log('Left')}>
      <Text style={STYLES.headerSidesText}>{props.leftText}</Text>
    </CommonButton>
  ) : (
    <View style={STYLES.headerSidesView} />
  );

  const rightChild = props.rightText ? (
    <CommonButton
      style={STYLES.headerSidesView}
      handlePress={() => console.log('Right')}>
      <Text style={STYLES.headerSidesText}>{props.rightText}</Text>
    </CommonButton>
  ) : (
    <View style={STYLES.headerSidesView} />
  );

  return (
    <View style={STYLES.header}>
      {leftChild}
      <View style={STYLES.headerCenter}>
        {React.Children.only(props.children)}
      </View>
      {rightChild}
    </View>
  );
};

export default CommonHeader;
