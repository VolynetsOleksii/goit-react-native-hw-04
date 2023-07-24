import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "./LoginScreenStyles";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);
  

  const toggleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const onSubmitButton = () => {
    console.log({ email, password });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.formHeader}>Увійти</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.formInputWraper}>
              <TextInput
                style={[
                  isEmailFocused ? styles.focusedInput : styles.unfocusedInput,
                ]}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                placeholder="Адреса електронної пошти"
                value={email}
                onChangeText={setEmail}
              />
              <View style={styles.passwordWraper}>
                <TextInput
                  style={[
                    isPasswordFocused
                      ? styles.focusedInput
                      : styles.unfocusedInput,
                  ]}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  placeholder={"Пароль"}
                  secureTextEntry={!visiblePassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  style={styles.passwordShowBtn}
                  onPress={toggleVisiblePassword}
                >
                  <Text style={styles.passwordShowBtnText}>
                    {" "}
                    {visiblePassword ? "Приховати" : "Показати"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            style={styles.formSubmitButton}
            onPress={onSubmitButton}
          >
            <Text style={styles.formSubmitButtonText}>Увійти</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.regButtonText}>
              Немає акаунту? Зареєструватися
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default LoginScreen;
