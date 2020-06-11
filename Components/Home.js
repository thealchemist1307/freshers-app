import React,{Component} from 'react'
import {TouchableOpacity,StyleSheet,View,Text,AsyncStorage,TextInput,Image, ImageBackground,Dimensions,Button} from 'react-native'
import { Icon } from 'react-native-elements';
import {createAppContainer,SafeAreaView} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
class Home extends Component{

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
            
            alignContent:'center',
            
        },
        logo:{
            
            marginLeft:width*0.125,
            marginRight:width*0.125,            
            width: 200,
            height: 200,
            resizeMode: 'contain',
            alignContent:'center',
            justifyContent: 'center',
            alignSelf:'center'

        },
        ImageStyle:{
            width: 200,
            height: 50,
            paddingBottom:50,
        },
        ButtonStyle: {
            paddingTop:height*0.09,
            alignContent:'center',
            justifyContent: 'center',
            alignSelf:'center'
                      },
        backgroundImage: {
        flex:1,
        width: null,
        height: null, // or 'stretch'
        resizeMode:'cover'

    },
    });
        return(   
            <View style={styles.container}>
            <ImageBackground source={require("./images/back.jpg")} style={styles.backgroundImage} >
            <View style={styles.container}>
                <Image style={styles.logo} source={require("./images/logo.png")} />
                <TouchableOpacity style={styles.ButtonStyle}
			onPress={() => this.props.navigation.navigate('History')}
		  >
			 <Image style={styles.ImageStyle} source={require("./images/historyb.png")}/>
		  </TouchableOpacity>
          <TouchableOpacity style={styles.ButtonStyle}
			onPress={() => this.props.navigation.navigate('Clubs')}
		  >
			 <Image style={styles.ImageStyle} source={require("./images/cadb.png")}/>
		  </TouchableOpacity>
          <TouchableOpacity  style={styles.ButtonStyle}
			onPress={() => this.props.navigation.navigate('Fests')}
		  >
			 <Image style={styles.ImageStyle} source={require("./images/festb.png")}/>
		  </TouchableOpacity>
            </View>
         </ImageBackground>
       
         </View>
        )
    }
}

export default Home