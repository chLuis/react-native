import { Pressable, Text, Platform, StyleSheet } from "react-native"

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const SecondaryButton = ({label, onPress, onLongPress}:Props) => {
  return(
    <Pressable
        style={({pressed}) => [
          styles.boton,
          pressed && styles.botonPressed,
        ]}
        onPress={() => onPress && onPress()}
        onLongPress={() => onLongPress && onLongPress()}
        >
        <Text style={{
          color: Platform.OS === 'android' ? 'white' : '#b0344d'}}>{label}</Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: Platform.OS === 'android' ? '#b0344d' : 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  botonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#89283b' : 'white',
  }
});
