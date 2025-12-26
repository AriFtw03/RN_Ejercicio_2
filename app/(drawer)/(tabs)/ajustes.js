import { StyleSheet, Text, View } from "react-native";

export default function Ajustes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ajustes</Text>
      <Text style={styles.text}>
        Configuración general de la aplicación y preferencias de usuario.
      </Text>
      <Text style={styles.text}>
        Versión: 1.0.0
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 26,
    marginBottom: 12,
    
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: "center",
  },
});