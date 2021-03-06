import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Picker,
  Alert,Modal,Text,TouchableOpacity,Dimensions,AsyncStorage 
} from 'react-native';
import RNRestart from 'react-native-restart';
import { Icon,Input } from 'react-native-elements';
import moment from "moment";
import TimeTableView, { genTimeBlock } from 'react-native-timetable';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView } from 'react-native-gesture-handler';
import DayPicker from "./DayPicker"
import ClassPicker from "./ClassPicker"
import { connect } from 'react-redux';

import {postEvent} from "../redux/ActionCreators"
const mapStateToProps = state => ({
  events:state.events
});
const mapDispatchToProps = dispatch => ({
  // eslint-disable-next-line max-len
  postEvent: (title,location,startTime,day) => dispatch(postEvent(title,location,startTime,day)),
  
});
 class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.numOfDays = 6;
    this.pivotDate = genTimeBlock('mon');
    this.height = Dimensions.get('window').height;
    this.width = Dimensions.get('window').width;
    this.state={modalvisible:false,title:"",cno:"",datemodal:false,day:"",time:'',timeDisplay:'Pick Time',ctype:"L"}
    this.scrollViewRef=this.scrollViewRef.bind(this)
    this.onEventPress=this.onEventPress.bind(this)
    this.onAdd=this.onAdd.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
    this.setTitle=this.setTitle.bind(this)
    this.setClass=this.setClass.bind(this)
    this.hideDatePicker=this.hideDatePicker.bind(this)
    this.handleConfirm=this.handleConfirm.bind(this)
    this.handleClass=this.handleClass.bind(this)
    this.handleDay=this.handleDay.bind(this)
    this.onClear=this.onClear.bind(this)
    
   }
   
  scrollViewRef = (ref) => {
    this.timetableRef = ref;
  };

  onEventPress = (evt) => {
    Alert.alert("onEventPress", JSON.stringify(evt));
  };
  onAdd=()=>{
    this.setState({modalvisible:true})
  }
   onSubmit=async ()=>{
    const dateobj = moment(this.state.time);
    console.warn(this.state.ctype)
    if(this.state.ctype==="Q"){ 
      console.warn("Q")
    }
    else if(this.state.ctype==="L"){
      console.warn("Inside L"+this.state.day)
      if((this.state.day==="MON") || (this.state.day==="WED") || (this.state.day==="FRI")){
        console.log(" Working"+this.state.day )
        await this.props.postEvent(this.state.title,this.state.cno,dateobj.hour(),"MON")
        await this.props.postEvent(this.state.title,this.state.cno,dateobj.hour(),"WED")
        await this.props.postEvent(this.state.title,this.state.cno,dateobj.hour(),"FRI")
      }
      else{
        console.log("Not Working"+this.state.day )
        await this.props.postEvent(this.state.title,this.state.cno,dateobj.hour(),"TUE")
        await this.props.postEvent(this.state.title,this.state.cno,dateobj.hour(),"THU")
        await this.props.postEvent(this.state.title,this.state.cno,dateobj.hour(),"SAT")
      }
    }
    else if(this.state.ctype==="T"){
      await this.props.postEvent(this.state.title,this.state.cno,dateobj.hour(),this.state.day)
    } 
    else{
      await this.props.postEvent(this.state.title,this.state.cno,dateobj.hour(),this.state.day)
      await this.props.postEvent(this.state.title,this.state.cno,dateobj.hour() + 1,this.state.day)
    }
   
    this.setState({modalvisible:false,title:"",cno:"",datemodal:false,day:"",time:'',timeDisplay:'Pick Time'})
   
  }
  setTitle=(title)=>{
    this.setState({title:title})
  }
  setClass=(cno)=>{
    this.setState({cno:cno})
  }
  hideDatePicker = () => {
    this.setState({datemodal:false});
  };
 
  handleConfirm = (date) => {  
    this.setState({time:date})
    
    this.hideDatePicker;
  };
  handleDay=(value)=>{
    this.setState({day:value})
    
  }
  handleClass=(value)=>{
    this.setState({ctype:value})
    
  }
  onClear=async ()=>{
    AsyncStorage.clear()
    RNRestart.Restart();
  }
  render() {
    const styles = StyleSheet.create({
      headerStyle: {
        backgroundColor: '#81E1B8',
      },
      tt:{
        flex:5,
        flexDirection:'column'
      },
      container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
      },
      top:{
        paddingRight:this.width*0.1,
        paddingLeft:this.width*0.1,
        backgroundColor:'#19e6b9',
        borderWidth:2,
        marginTop:this.height*0.01,
        borderRadius:100,
        alignContent:'center',
        justifyContent:'center',
        marginBottom:this.height*0.01
      },
      modalButton:{
        paddingRight:this.width*0.1,
        paddingLeft:this.width*0.1,
        backgroundColor:'#19e6b9',
        borderWidth:2,
        marginTop:this.height*0.01,
        borderRadius:100,
        alignContent:'center',
        justifyContent:'center',
        marginBottom:this.height*0.01,
        height:this.height*0.09
      }
    });
    
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.tt}>
           
        <View style={styles.container}>
            <ScrollView >
          <TimeTableView
            scrollViewRef={this.scrollViewRef}
            events={this.props.events.events}
            pivotTime={7}
            pivotDate={this.pivotDate}
            numberOfDays={this.numOfDays}
            onEventPress={this.onEventPress}
            headerStyle={styles.headerStyle}
            formatDateHeader="dddd"
            locale="en"
        
          />
          </ScrollView>
          
        </View>
        <View style={{flex:0.1,flexDirection:'row',justifyContent:'space-evenly'}}>
            <TouchableOpacity style={styles.top} onPress={this.onAdd}><Text>Add</Text></TouchableOpacity>
            <TouchableOpacity style={styles.top} onPress={this.onClear}><Text>Clear</Text></TouchableOpacity>
            
            
            <Modal animationType="slide"
        
        visible={this.state.modalvisible}
        onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{flex:1,flexDirection:'column',justifyContent:'space-evenly',marginTop:this.height*0.01}}>
          <Input
              placeholder="Class Name"
              leftIcon={(
                <Icon
                  name="landmark"
                  type="font-awesome-5"
                />
              )}
              onChangeText={comment => this.setTitle(comment)}
            />
            <Input
              placeholder="Class No."
              leftIcon={(
                <Icon
                  name="comment"
                  type="font-awesome"
                />
              )}
              onChangeText={comment => this.setClass(comment)}
            />
            <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
            
              <TouchableOpacity style={styles.modalButton} onPress={()=>{this.setState({datemodal:true})}}><Text>{this.state.timeDisplay}</Text></TouchableOpacity>
            <DateTimePickerModal
        isVisible={this.state.datemodal}
        mode="time"
        onConfirm={this.handleConfirm}
        onCancel={this.hideDatePicker}
      />
           <DayPicker width={this.width} height={this.height}  onSelectDay={this.handleDay}/>
           
      </View>
      <View style={{flex:0.2,flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity></TouchableOpacity>
      <ClassPicker width={this.width} height={this.height}  onSelectClass={this.handleClass}/>
      <TouchableOpacity></TouchableOpacity>
      </View>
        <View style={{flex:0.2,flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity></TouchableOpacity>
         <TouchableOpacity style={styles.modalButton} onPress={this.onSubmit}><Text>Submit</Text></TouchableOpacity>
        <TouchableOpacity></TouchableOpacity>
        </View>
        </View>
        </Modal>
           </View>
        </View>
        
      </SafeAreaView>
    );
  }

};

export default connect(mapStateToProps, mapDispatchToProps)(TimeTable)