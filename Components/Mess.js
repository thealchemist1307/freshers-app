import React,{Component} from 'react'
import {TouchableOpacity,StyleSheet,View,Text,AsyncStorage,TextInput,Image, ImageBackground,Dimensions,Button} from 'react-native'
import VTT from "./VTT"
class Mess extends Component{
    constructor(props){
        super(props)
    }
   
    

    render()
    {   const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignContent:'center',
            
            
        },
        backgroundImage: {
            flex:1,
            width: null,
            height: null, // or 'stretch'
            resizeMode:'cover'

        },
        mess : {
            flex:2,
            flexDirection:'column',


        },
        menu:{flex:1.5,
            alignContent:'center',
            justifyContent:'center',
            alignItems:'center',
            height:height*0.9,
            paddingBottom:200
        }
    });
        return(   
            <View style={styles.container}>
            <ImageBackground source={require("./images/mess.jpg")} style={styles.backgroundImage} >
           <View style={styles.mess}>
            <View style={styles.menu}>
                <Text>MENU</Text>
            </View>
            <VTT />
            </View>
         </ImageBackground>
       
         </View>
        )
    }
}

export default Mess