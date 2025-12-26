import { Drawer } from "expo-router/drawer";
export default function DrawerLayout() {
 return (
 <Drawer
    screenOptions={{
    headerTitleAlign: "center",
    headerStyle: {
    backgroundColor: "#E8F5E9",
    },
    headerTitleStyle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1B5E20",
    },
    headerTintColor: "#1B5E20",
    }}
 />
 );
 }
