import { Pressable, Text, Platform, StyleSheet } from "react-native"

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({label, onPress, onLongPress}:Props) => {
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
          color: Platform.OS === 'android' ? 'white' : '#5856D6'}}>{label}</Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  botonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#3B3B98' : 'white',
  }
});
