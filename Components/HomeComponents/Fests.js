import React,{Component} from 'react'
import {TouchableOpacity,StyleSheet,View,Text,AsyncStorage,TextInput,Image, ImageBackground,Dimensions,Button} from 'react-native'
class Map extends Component{
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
        textStyle:{
           fontSize:30,
           marginLeft:0.1*width,
           marginRight:0.1*width,
           marginTop:0.04*height,
           backgroundColor:'#1fb0f2',
           alignItems:'center',
           alignSelf:'center',
           borderWidth: 1,
           color:'white', 
           borderRadius:20,
           borderColor: 'black',
           textAlign:'center',
           padding:12
        },
        backgroundImage: {
            flex:1,
            width: null,
            height: null, // or 'stretch'
            resizeMode:'cover'

        },
        logo:{
            marginTop:height*0.07,
            marginLeft:width*0.125,
            marginRight:width*0.125,            
            width: 200,
            height: 200,
            resizeMode: 'contain',
            alignContent:'center',
            justifyContent: 'center',
            alignSelf:'center'

        },
        SubmitButtonStyle: {

            marginTop:height*0.1,
            paddingTop:15,
            paddingBottom:15,
            marginLeft:0.1*width,
            marginRight:0.1*width,
            marginRight:30,
            backgroundColor:'#00BCD4',
            borderRadius:25,
            borderWidth: 1,
            borderColor: '#000'
          },
          TextStyle:{
            color:'#fff',
            textAlign:'center',
        }
    });
        return(   
            <View style={styles.container}>
            <ImageBackground  style={styles.backgroundImage} >
            <Text>Fests</Text>
         </ImageBackground>
       
         </View>
        )
    }
}

export default Map