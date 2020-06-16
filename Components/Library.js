import React,{Component} from 'react'
import {TouchableOpacity,StyleSheet,View,Text,AsyncStorage,TextInput,Image, ImageBackground,Dimensions,Button} from 'react-native'
import LibraryTimings from "./LibraryTimings"
class Library extends Component{
    constructor(props){
        super(props)
    }
   
    

    render()
    {   const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const styles = StyleSheet.create({
        container: {
            flex: 2,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignContent:'center',
            
        },
        textStyle:{
            color:'black',
            textAlign:'center',
            fontSize:20,
            borderWidth:3,
            borderRadius:100,
            paddingRight:10,
            paddingLeft:10,
            marginTop:height*0.05,
            backgroundColor:"white",
            flexWrap:'wrap'
        },
        backgroundImage: {
            flex:2,
            width: null,
            height: null, // or 'stretch'
            resizeMode:'cover'

        },
        
        
          headingStyle:{
            color:'black',
            textAlign:'center',
            fontSize:40,
            borderWidth:3,
            borderRadius:100,
            paddingRight:10,
            paddingLeft:10,
            marginTop:height*0.08,
            backgroundColor:"white",
        }
    });
        return(   
            <View style={styles.container}>
            <ImageBackground source={require("./images/lib.jpg")} style={styles.backgroundImage} >
            <View style={{flex:3,justifyContent:"space-evenly"}}>
            <View style={{flex:0.6,flexDirection:"row",justifyContent:"space-evenly"}}>
            <TouchableOpacity activeOpacity={1}>
                <Text style={styles.headingStyle}>Libray Info</Text>
            </TouchableOpacity>
            </View>
            <LibraryTimings />
            
        
            <View style={{flex:1,flexDirection:"row",justifyContent:"center"}}>
            <TouchableOpacity style={{paddingTop:height*0.03}}>
                <Text style={styles.headingStyle}>Libray Website</Text>
            </TouchableOpacity>
            </View>
         </View>
         </ImageBackground>
       
         </View>
        )
    }
}

export default Library