import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../context/useAuth";

export default function Home() {
    const { user, signOut } = useAuth();
    return (
        <View style={{ justifyContent: "center", alignItems: "center", }}>
            <Text>Home</Text>
            <Text style={{ fontSize: 24 }}>{user.username}</Text>
            <TouchableOpacity onPress={() => signOut()}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}