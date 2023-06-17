import {SafeAreaProvider} from 'react-native-safe-area-context';
import SelectDriver from './screens/SelectDriver';

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <SelectDriver />
    </SafeAreaProvider>
  );
};

export default App;
