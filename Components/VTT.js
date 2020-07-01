import React from 'react';
import { StyleSheet, Text, View,Platform,TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import FadeInView from './FadeInView';
import * as FileSystem from 'expo-file-system';
import {Audio} from 'expo-av'
import * as Permissions from 'expo-permissions'
import Toast from 'react-native-simple-toast';
import { Icon } from 'react-native-elements';

const recordingOptions = {
    // android not currently in use. Not getting results from speech to text with .m4a
    // but parameters are required
    android: {
        extension: '.awb',
        outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_AMR_WB,
        audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AMR_WB,
        sampleRate: 16000,
        numberOfChannels: 1,
        bitRate: 128000,
    },
    ios: {
        extension: '.wav',
        audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
        sampleRate: 16000,
        numberOfChannels: 1,
        bitRate: 128000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false,
    },
};

export default class VTT extends React.Component {
    constructor(props) {
        super(props);
        this.recording = null;
        this.message=null;
        this.state = {
            isFetching: false,
            isRecording: false,
        }
    }

  

    deleteRecordingFile = async () => {
        console.log("Deleting file");
        try {
            const info = await FileSystem.getInfoAsync(this.recording.getURI());
            await FileSystem.deleteAsync(info.uri)
        } catch(error) {
            console.log("There was an error deleting recording file", error);
        }
    }

    getTranscription = async () => {
        this.setState({ isFetching: true });
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') return;
        const info = await FileSystem.getInfoAsync(this.recording.getURI());
       
        try {
            
            var bodyFormData = new FormData();
            var clip={
                uri: info.uri,
                type: 'audio/amr-wb',
                name: 'clip.awb',
            }
            bodyFormData.append('audio',clip); 
            console.log("In get transcription")
                   await fetch(
                        'https://freshersapi.herokuapp.com/api/vtt',
                        {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                        body: bodyFormData,
                        })
                        .then(resp => {
                            return resp.json();
                        })
                        .then((responseJson) => {
                         console.log('Printing out json'); 
                         this.message=responseJson
                         console.log(this.message)
                         Toast.show(this.message);
                        })
                        .catch((error) => console.warn("fetch error:", error))
                        ;

        } catch(error) {
            console.log('There was an error reading file', error);
            this.stopRecording();
            this.resetRecording();
        }
        this.setState({ isFetching: false });
    }

    startRecording = async () => {
        console.log("Recording")
        const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        if (status !== 'granted') return;

        this.setState({ isRecording: true });
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: true,
        });
        const recording = new Audio.Recording();

        try {
            await recording.prepareToRecordAsync(recordingOptions);
            await recording.startAsync();
        } catch (error) {
            console.log(error);
            this.stopRecording();
        }

        this.recording = recording;
    }

    stopRecording = async () => {
        this.setState({ isRecording: false });
        try {
            await this.recording.stopAndUnloadAsync();
            console.log("Stopped Recording")
        } catch (error) {
            // Do nothing -- we are already unloaded.
        }
    }

    resetRecording = () => {
        this.deleteRecordingFile();
        this.recording = null;
    }

    handleOnPressIn = () => {
        this.startRecording();
    }

    handleOnPressOut = () => {
        this.stopRecording();
        this.getTranscription();
    }



    render() {
        const { isRecording, isFetching } = this.state;
        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPressIn={this.handleOnPressIn}
                        onPressOut={this.handleOnPressOut}
                    >
                        {isRecording &&
                        <FadeInView>
                            <Icon  name="mic" backgroundColor={"#fc2848"} borderRadius={100} size={80} color="#48C9B0" />
                        </FadeInView>
                    }
                    {!isRecording &&
                        <Icon name="mic"  backgroundColor={"#fc2848"} borderRadius={100} size={80} color="#ffff" />
                    }
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#48C9B0',
        paddingVertical: 20,
        width: '90%',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
    }
});
