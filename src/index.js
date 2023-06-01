import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ValidationScreen from "./screens/ValidationScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import CadastrarAnimal from "./screens/CadastrarAnimal";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainNavigation">
        <Stack.Screen
          name="ValidationScreen"
          component={ValidationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
            headerTitle: "Login",
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerTitle: "Registrar",
          }}
        />
        <Stack.Screen
          name="MainNavigation"
          component={MainNavigation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MBT = createMaterialBottomTabNavigator();

export function MainNavigation() {
  return (
    <MBT.Navigator>
      <MBT.Screen name="Home" component={HomeScreen} />
      <MBT.Screen
        name="CadastrarAnimal"
        component={CadastrarAnimal}
        options={{
          headerTitle: "Cadastrar Animal",
          tabBarIcon: "plus",
        }}
      />
    </MBT.Navigator>
  );
}
