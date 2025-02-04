import { Platform, StyleSheet } from "react-native";





export const globalStyles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 80,
    fontWeight: '300',
    color: '#060606',
  },
  fabStyle: {
    margin: 16,
    bottom: Platform.OS === 'android' ? 15 : 0,
    right: 0,
    position: 'absolute',
  }
})