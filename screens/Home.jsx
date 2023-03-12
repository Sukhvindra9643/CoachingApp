import {
  View,
  Text,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/EvilIcons";
import Icon1 from "react-native-vector-icons/FontAwesome5";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon3 from "react-native-vector-icons/FontAwesome";
import Icon4 from "react-native-vector-icons/Foundation";
import Icon5 from "react-native-vector-icons/Entypo";
import CourseCard from "../components/CourseCard";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <ScrollView>
        <SafeAreaView>
          <View style={styles.navbar}>
            <Icon name="navicon" size={50} style={{ marginTop: 5 }} />
            <View>
              <Icon1
                name="bell"
                size={30}
                style={{ marginTop: 8, marginRight: 20 }}
              />
              <Text style={styles.notificationcount}>10</Text>
            </View>
          </View>

          <View style={styles.hero}>
            <Image
              style={styles.hero_img}
              source={require("../assets/hero.jpeg")}
            />
          </View>

          <View
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("todohome")}>
              <CourseCard
                Icon={Icon1}
                title={"Paid Courses"}
                name={"chalkboard-teacher"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("todohome")}>
              <CourseCard
                Icon={Icon1}
                title={"Free Courses"}
                name={"chalkboard"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("todohome")}>
              <CourseCard
                Icon={Icon2}
                title={"All Courses"}
                name={"library-outline"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("todohome")}>
              <CourseCard
                Icon={Icon2}
                title={"E-Book"}
                name={"md-book-outline"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("todohome")}>
              <CourseCard Icon={Icon3} title={"Notes"} name={"book"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("todohome")}>
              <CourseCard
                Icon={Icon3}
                title={"Live Test"}
                name={"file-text-o"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("todohome")}>
              <CourseCard
                Icon={Icon4}
                title={"Syllabus"}
                name={"clipboard-notes"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("todohome")}>
              <CourseCard Icon={Icon5} title={"Todo"} name={"clipboard"} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  heading: {
    fontSize: 28,
    textAlign: "center",
    marginTop: 25,
    marginBottom: 20,
    color: "#fff",
    backgroundColor: "#474747",
  },
  addBtn: {
    backgroundColor: "#fff",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    alignSelf: "center",
    marginVertical: 20,
    elevation: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
  },
  navbar: {
    position:"relative",
    flex: 1,
    height: 50,
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hero: {
    width: 100,
  },
  hero_img: {
    width: 390,
    height: 200,
    resizeMode: "stretch",
  },
  notificationcount:{
    position:"absolute",
    left:22,
    color:"white",
    fontSize:16
  }
});
