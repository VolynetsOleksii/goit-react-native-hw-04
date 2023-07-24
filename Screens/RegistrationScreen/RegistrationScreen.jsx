import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { styles } from "./RegistrationScreenStyles";
import Icon from "react-native-vector-icons/Feather";
import * as ImagePicker from "expo-image-picker";

function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userPhoto, setUserPhoto] = useState(null);
  const [isLoginFocused, setIsLoginFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [visiblePassword, setVisiblePassword] = useState(false);

  const toggleVisiblePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const uploadUserPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    // console.log(result);

    if (!result.canceled) {
      setUserPhoto(result.assets[0].uri);
    }
  };

  const removeUserPhoto = () => {
    setUserPhoto(null);
  };

  const onSubmitButton = () => {
    console.log({ login, email, password });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.imageWraper}>
            {userPhoto && (
              <Image
                source={{ uri: userPhoto }}
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 16,
                }}
              />
            )}
            {!userPhoto ? (
              <TouchableOpacity
                style={styles.addButton}
                onPress={uploadUserPhoto}
              >
                <Icon name="plus-circle" size={25} color="#FF6C00" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.addButton}
                onPress={removeUserPhoto}
              >
                <Icon name="x-circle" size={25} color="#BDBDBD" />
              </TouchableOpacity>
            )}
          </View>

          <Text style={styles.formHeader}>Реєстрація</Text>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.formInputWraper}>
              <TextInput
                style={[
                  isLoginFocused ? styles.focusedInput : styles.unfocusedInput,
                ]}
                onFocus={() => setIsLoginFocused(true)}
                onBlur={() => setIsLoginFocused(false)}
                placeholder="Логін"
                value={login}
                onChangeText={setLogin}
              />
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
                  placeholder="Пароль"
                  secureTextEntry={!visiblePassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  style={styles.passwordShowBtn}
                  onPress={toggleVisiblePassword}
                >
                  <Text style={styles.passwordShowBtnText}>
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
            <Text style={styles.formSubmitButtonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.regButtonText}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default RegistrationScreen;
