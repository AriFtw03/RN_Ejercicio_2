import { Text, View } from "react-native";

export default function UserInfo({ nombre, rol }) {
 return (
    <View>
    <Text>Nombre: {nombre}</Text>
    <Text>Rol: {rol}</Text>
    </View>
 );
}
