import {
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const Login = (props) => {
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");

  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) navigation.navigate("HomeScreen");
    });

    return unsubscribe;
  }, []);

  const loginBtnHandler = () => {
    auth
      .signInWithEmailAndPassword(isEmail, isPassword)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((err) => Alert(err.message));
  };

  const registerBtnHandler = () => {
    auth
      .createUserWithEmailAndPassword(isEmail, isPassword)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputInnerContainer}
          placeholder="email"
          value={isEmail}
          onChangeText={(txt) => setIsEmail(txt)}
        />

        <TextInput
          style={styles.inputInnerContainer}
          placeholder="password"
          value={isPassword}
          onChangeText={(txt) => setIsPassword(txt)}
          secureTextEntry
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={loginBtnHandler} style={styles.btn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={registerBtnHandler}
          style={[styles.btn, styles.btnOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

// Styles for later implementation

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f8ff",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inputContainer: { width: "80%", justifyContent: "center" },
  inputInnerContainer: {
    backgroundColor: "white",
    borderWidth: 0.2,
    borderRadius: 5,
    padding: 10,
    marginVertical: 2,
  },
  btnContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  btn: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  btnOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  btnText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
