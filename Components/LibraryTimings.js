import React,{Component} from 'react'
import {TouchableOpacity,StyleSheet,View,Text,AsyncStorage,TextInput,Image, ImageBackground,Dimensions,Button} from 'react-native'
import { round } from 'react-native-reanimated';
class LibraryTimings extends Component{
    constructor(props){
        super(props)
        this.state={requests:''}
    fetch('https://reactnative.dev/movies.json')
    .then((response) => {
        console.log(response)
          this.setState({requests:response.json()})
    })
          
    .catch((error) => {
      console.error(error);
    });
        
}
     
    Timings=[
        {
            day:'Weekdays',
            timing:'10:00 am - 9:00 pm'
        },
        {
            day:'  Sunday  ',
            timing:'12:00 am - 9:00 pm'
        },
        {
            day:'    Exam    ',
            timing:'7:00 am - 12:00 pm'
        },
        {
            day:'  Holidays  ',
            timing:'    Library Closed    '
        }
    ]
    render()
    {   const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    const styles = StyleSheet.create({ 
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
            flexWrap:'wrap',
        },
        
    });
    console.log(this.state)
        const timings=this.Timings.map((item,index)=>{
                            return(
                                <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
                        <TouchableOpacity activeOpacity={1} >
                            <Text style={styles.textStyle}>{item.day}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1}>
                            <Text style={styles.textStyle}>{item.timing}</Text>
                        </TouchableOpacity>
                            
                        </View>
                            )
                        })
                        
        return(   
            <View style={{flex:1,justifyContent:'space-evenly'}}>
            {timings}
            </View>
        )
    }
}

export default LibraryTimings