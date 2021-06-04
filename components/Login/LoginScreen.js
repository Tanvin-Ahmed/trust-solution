import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Image, Platform, StatusBar } from "react-native";

import { Heading } from "./Heading";
import { Input } from "./Input";
import { FilledButton } from "./FilledButton";
import { AuthContainer } from "./AuthContainer";
import { loginContext } from "../../App";

export function LoginScreen({ navigation }) {
  const { setLoginInfo } = useContext(loginContext);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleLogin = () => {
    const emailValid = /\S+@\S+\.\S+/.test(email);
    if (emailValid) {
      if (password.trim()) {
        setLoginInfo({ email });
        setTimeout(() => {
          navigation.navigate("Home");
        }, 50);
      } else {
        alert("Please Enter Password");
      }
    } else {
      alert("Email is Badly Formatted");
    }
  };

  return (
    <AuthContainer style={styles.body}>
      <Image
        style={styles.loginImg}
        source={require("../../images/login.png")}
      />
      <Heading style={styles.title}>LOGIN</Heading>
      <Input
        style={styles.input}
        placeholder={"Email"}
        keyboardType={"email-address"}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        style={styles.input}
        placeholder={"Password"}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <FilledButton
        title={"Login"}
        style={styles.loginButton}
        onPress={handleLogin}
      />
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 48,
    marginTop: 50,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 32,
  },
  body: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    fontFamily: "sans-serif",
  },
  loginImg: {
    width: "100%",
    height: "300px",
  },
});
