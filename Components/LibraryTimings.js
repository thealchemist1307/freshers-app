import React,{Component} from 'react'
import {TouchableOpacity,StyleSheet,View,Text,AsyncStorage,TextInput,Image, ImageBackground,Dimensions,Button} from 'react-native'
import { round } from 'react-native-reanimated';
import axios from 'axios';

class LibraryTimings extends Component{
    constructor(props){
        super(props)
        this.state={requests:[]}
        
        
}
componentDidMount() {
    axios.get('https://freshersapi.herokuapp.com/api/library')
    .then(response => {
      console.log(response.data);
      this.setState({requests:response.data})
      console.log(this.state.requests)
    })
    .catch(error => {
      console.log(error);
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
    { 
        const timings=this.state.requests.map((item,index)=>{
                            return(
                                <View key={index.toString()} style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
                        <TouchableOpacity activeOpacity={1} >
                            <Text style={styles.textStyle}>{item.day}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={1}>
                            <Text style={styles.textStyle}>{item.timings}</Text>
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
const height = Dimensions.get('window').height;
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
export default LibraryTimings