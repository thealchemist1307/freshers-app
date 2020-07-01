import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

export default function ClassPicker(props) {
  const [selectedValue, setSelectedValue] = useState("L");
  const styles = StyleSheet.create({
    container: {
      borderWidth:2,
      borderRadius:100,
      height:props.height*0.09,
      marginTop:props.height*0.01,
      backgroundColor:'#19e6b9'  
    },
    picker:{
      height: props.height*0.09, width: props.width*0.4 ,
        
    }
  });
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) =>{setSelectedValue(itemValue) 
            props.onSelectClass(itemValue)} }> 
        
        <Picker.Item label="Lecture" value="L" />
        <Picker.Item label="Tutorial" value="T" />
        <Picker.Item label="Practical" value="P" />

      </Picker>
    </View>
  );
}


