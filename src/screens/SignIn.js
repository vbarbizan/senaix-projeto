import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import MyButton from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/useAuth";


export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = useAuth();


  async function handleSubmit() {
    try {
      setError("");
      await signIn({ email, password });
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("Falha no login. Verifique suas credenciais.");
      }
    }
  }


  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={32} color="#8a8787" />
      </TouchableOpacity>
      <View>
        <Text style={style.title}>Estamos quase lá.</Text>
        <Text style={style.subtitle}>
          Faça seu login para começar a utilizar o app.
        </Text>
      </View>
      <View style={{ gap: 16 }}>
        <View style={style.inputBox}>
          <Feather name="mail" size={24} color="#8a8787" />
          <TextInput
            style={style.input}
            placeholder="Digite seu email"
            placeholderTextColor="#8a8787"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={style.inputBox}>
          <Feather name="lock" size={24} color="#8a8787" />
          <TextInput
            style={style.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#8a8787"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        {error && <Text>{error}</Text>}
        <MyButton
          onPress={handleSubmit}
          text="Login"
          style={{ width: "100%" }}
        />
      </View>
    </View>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-between",
    padding: 16,
  },


  title: {
    fontSize: 54,
    fontWeight: "700",
    width: 240,
    color: "#3D3D4D",
  },


  subtitle: {
    fontSize: 20,
    fontWeight: "300",
    width: 280,
    marginTop: 16,
  },


  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#8a8787",
    borderRadius: 4,
    width: "100%",
  },


  input: {
    flex: 1,
    fontSize: 18,
  },
  erro: {
    color: "#DC1637",
    fontWeight: "400",
    textAlign: "center",
    marginVertical: 16,
  },
});
