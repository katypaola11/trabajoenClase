import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CalculadoraScreen from '../screens/CalculadoraScreen';
import IMCScreen from '../screens/IMCScreen';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FormularioScreen from '../screens/FormularioScreen';
import RegistroScreen from '../screens/RegistroScreen';
import DireccionScreen from '../screens/DireccionScreen';
import EncuestaScreen from '../screens/EncuestaScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ListalocalScreen from '../screens/listas/ListalocalScreen';
import ListaExternaScreen from '../screens/listas/ListaExternaScreen';
import Ejercicio from '../screens/listas/EjercicioScreen';
import EjercicioScreen from '../screens/listas/EjercicioScreen';


const Stack = createStackNavigator()

function MyStack() {
    return (
        <Stack.Navigator initialRouteName='Tabs'>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Tabs" component={MyTabs} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator()
function MyTabs() {
    return (
        <Tab.Navigator initialRouteName='Top' screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Calculadora" component={CalculadoraScreen} options={{ tabBarIcon: () => (<AntDesign name="calculator" size={30} color="black" />) }} />
            <Tab.Screen name="IMC" component={IMCScreen} />
            <Tab.Screen name="Formulario" component={FormularioScreen} />
            <Tab.Screen name="Registro" component={RegistroScreen} />
            <Tab.Screen name="Direccion" component={DireccionScreen} />
            <Tab.Screen name="Encuesta" component={EncuestaScreen} />
            <Tab.Screen name="Top" component={MyTop}/>

        </Tab.Navigator>
    )

}


const Top= createMaterialTopTabNavigator()

function MyTop(){
    return(
        <Top.Navigator>
            <Top.Screen name="Ejercicio" component={EjercicioScreen}/>
            <Top.Screen  name="Local" component={ListalocalScreen}/>
            <Top.Screen name="Externa" component={ListaExternaScreen}/>
        </Top.Navigator>
    )
}

export default function NavegadorPrincipal() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )

}