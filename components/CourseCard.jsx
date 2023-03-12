import { View, Text,StyleSheet} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import Icon from "react-native-vector-icons/Ionicons"

const CourseCard = ({title,name,Icon}) => {
  return (      
    <View style={styles.container}>
        <Icon name={name} size={37}/>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default CourseCard

const styles = StyleSheet.create({
  container:{
    marginVertical:10,
    marginLeft:5,
    width:189,
    height:80,
    backgroundColor: "rgb(155, 183, 207)",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    padding:20,
    borderColor: "black",
    borderRadius:18
    
  },
  title:{
    fontSize:19
  }
})