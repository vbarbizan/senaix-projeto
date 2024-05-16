import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import AppProvider from "./src/context";

export default function App(){
    return(
        <NavigationContainer>
            <AppProvider>
            <Routes/>
            </AppProvider>
        </NavigationContainer>
    );
}