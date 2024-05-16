import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from '../screens/Start';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';

const Stack = createNativeStackNavigator();
export default function AuthRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false, }} initialRouteName="Start"> 
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
    )
}