import {useState} from 'react';
import {Text, View} from 'react-native';
import { FAB } from 'react-native-paper';
import { globalStyles } from '../theme/global.styles';
import Icon from 'react-native-vector-icons/Ionicons';

export function CounterM3Screen() {
  const [count, setCount] = useState(0);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      
      <FAB 
        //icon="plus"
        variant='tertiary'
        
        rippleColor="#808d6b"
        style={globalStyles.fabStyle}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        icon="accessibility"
      />
    </View>
  );
}

