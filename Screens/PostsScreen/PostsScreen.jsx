import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./PostsScreenStyles";

function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWraper}>
        <Text style={styles.title}>Публікації</Text>
        <TouchableOpacity>
          <Icon name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
      <View style={styles.userInfoWraper}>
        <Image
          source={require("../../assets/images/userPhoto.jpg")}
          style={styles.userInfoPhoto}
        />
        <View>
          <Text style={styles.userInfoName}>Natali Romanova</Text>
          <Text style={styles.userInfoEmail}>natali.romanova@gmail.com</Text>
        </View>
      </View>
      <View style={styles.controlsWraper}>
        <TouchableOpacity>
          <Icon name="grid" size={24} color="#212121" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="user" size={24} color="#212121" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PostsScreen;
