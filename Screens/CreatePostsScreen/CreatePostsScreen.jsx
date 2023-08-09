import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "./CreatePostsScreenStyles";
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";

function CreatePostScreen() {
 
  const [postPhoto, setPostPhoto] = useState(null);
  const [photoTitle, setPhotoTitle] = useState("");

  const uploadPostPhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    
    if (!result.canceled) {
      setPostPhoto(result.assets[0].uri);
    }
  };

  const removePostPhoto = () => {
    setPostPhoto(null);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.titleWraper}>
          <TouchableOpacity>
            <Icon name="arrow-left" size={24} color="rgba(33, 33, 33, 0.8)" />
          </TouchableOpacity>
          <Text style={styles.title}>Створити публікацію</Text>
        </View>
        <View style={styles.form}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.postPhotoWraper}>
              {postPhoto && (
                <Image
                  source={{ uri: postPhoto }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 8,
                  }}
                />
              )}
              {!postPhoto ? (
                <TouchableOpacity
                  style={styles.addPhotoButton}
                  onPress={uploadPostPhoto}
                >
                  <Icon2 name="camera" size={24} color="#BDBDBD" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{...styles.addPhotoButton,
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                  }}
                  onPress={removePostPhoto}
                >
                  <Icon2 name="camera" size={24} color="#FFFFFF" />
                </TouchableOpacity>
              )}
            </View>
            {!postPhoto ? (
              <TouchableOpacity
                onPress={uploadPostPhoto}
              >
                <Text
                  style={styles.addButtonText}
                >
                  Завантажте фото
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={removePostPhoto}
              >
                <Text
                   style={styles.addButtonText}
                >
                  Редагувати фото
                </Text>
              </TouchableOpacity>
            )}
            <View style={styles.formInputWraper}>
              <TextInput 
                style={styles.formInput}
                placeholder="Назва..."
                placeholderTextColor="#BDBDBD"
                value={photoTitle}
                onChangeText={setPhotoTitle}
              />
              <View style={styles.mapWraper}>
                <View style={styles.mapButton}>
                  <Icon name="map-pin" size={24} color="#BDBDBD" />
                </View>
                <TextInput
                  style={{...styles.formInput,
                    paddingLeft: 28,
                    marginBottom: 0,
                  }}
                  placeholder={"Місцевість..."}
                  placeholderTextColor="#BDBDBD"
                  value={photoTitle}
                  onChangeText={setPhotoTitle}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            style={styles.formSubmitButton}
          >
            <Text style={styles.formSubmitButtonText}>Опубліковати</Text>
          </TouchableOpacity>
          <View style={styles.controlsWraper}>
            <TouchableOpacity style={styles.trashButton}>
              <Icon name="trash-2" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CreatePostScreen;
