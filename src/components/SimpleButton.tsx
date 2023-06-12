import COLORS from '../styles/colors';
import STYLES from '../styles/styles';
import {Driver} from '../types';
import {PropsWithChildren} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';

interface SimpleButtonProps extends PropsWithChildren {
  handlePress: Function;
}
const SimpleButton = (props: SimpleButtonProps): JSX.Element => {
  return (
    <TouchableHighlight
      underlayColor={COLORS.gray1}
      onPress={() => props.handlePress}>
      <View>{props.children}</View>
    </TouchableHighlight>
  );
};

interface SimpleButtonDriverProps {
  driver: Driver;
}
export const SimpleButtonDriver = (
  props: SimpleButtonDriverProps,
): JSX.Element => {
  return (
    <SimpleButton
      handlePress={() => {
        console.log('Apertou!');
      }}>
      <Text style={STYLES.simpleText}>{props.driver.name}</Text>
    </SimpleButton>
  );
};

export default SimpleButton;
