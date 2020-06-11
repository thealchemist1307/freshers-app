import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

export default function DayPicker(props) {
  const [selectedValue, setSelectedValue] = useState("java");
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
            props.onSelectDay(itemValue)} }
      >
        <Picker.Item label="Monday" value="MON" />
        <Picker.Item label="Tuesday" value="TUE" />
        <Picker.Item label="Wednesday" value="WED" />
        <Picker.Item label="Thursday" value="THU" />
        <Picker.Item label="Friday" value="FRI" />
        <Picker.Item label="Saturday" value="SAT" />

      </Picker>
    </View>
  );
}


