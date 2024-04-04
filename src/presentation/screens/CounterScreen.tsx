import {useState} from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import { PrimaryButton, SecondaryButton } from '../components';
import { Button } from 'react-native-paper';

export function CounterScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>

      {/* <Pressable
        style={({pressed}) => [
          styles.boton,
          pressed && styles.botonPressed,
        ]}
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        >
        <Text style={{
          color: Platform.OS === 'android' ? 'white' : '#5856D6'}}>Incrementar</Text>
      </Pressable> */}
      <View style={{display:'flex', flexDirection: 'row'}}>

      {/* <PrimaryButton 
        label='Sumar'
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        /> */}
      <Button 
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        mode='contained-tonal'
        >
          Incremento!

        </Button>

      <SecondaryButton 
      label='Restar' 
      onPress={() => setCount(count - 1)}
      onLongPress={() => setCount(-50)}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: 'bold',
  }
});
