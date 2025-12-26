import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerType: "slide",
        overlayColor: "rgba(0,0,0,0.2)",
        headerTitleAlign: "center",
        drawerActiveTintColor: "#1B5E20",
        drawerLabelStyle: {
          fontSize: 15,
          fontWeight: "500",
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Inicio",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      
      <Drawer.Screen
        name="usuarios"
        options={{
          title: "Usuarios",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      
      <Drawer.Screen
        name="configuracion"
        options={{
          title: "Configuración",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}