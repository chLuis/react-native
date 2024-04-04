import {Button, StyleSheet, Text, View} from 'react-native';

interface Props {
  name?: string;



}

const HelloWorldScreen = ({name = "World"}: Props) => {
  return (
    <View style={ styles.container}>
      <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>Hello {name}</Text>
      <View style={styles.button}>
        <Button title={name}></Button>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#789',    
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    padding: 20
  },
  button: {
    backgroundColor:'green'
  }
})

export default HelloWorldScreen;
