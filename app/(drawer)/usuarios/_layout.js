import { Stack } from "expo-router";

export default function UsuariosLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{ title: "Usuarios" }}
      />
      <Stack.Screen
        name="crear"
        options={{ title: "Crear Usuario" }}
      />
    </Stack>
  );
}