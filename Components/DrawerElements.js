import React, { Component } from 'react';
import { Modal,Image, NetInfo, Platform, ScrollView, StyleSheet, Text, View, ScrollViewComponent } from 'react-native';
import { Icon } from 'react-native-elements';
import {createAppContainer,SafeAreaView} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator,DrawerItems} from 'react-navigation-drawer'
import { Provider } from 'react-redux';
import { ConfigureStore } from '../redux/configureStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import Home from "./Home"
import Map from "./Map"
import Library from "./Library"
import Mess from "./Mess"
import TimeTable from "./TimeTable"
import Facebook from "./Facebook"
import Clubs from"./HomeComponents/Clubs"
import History from "./HomeComponents/History"
import Fests from "./HomeComponents/Fests"
const HomeNavigator = createAppContainer(createStackNavigator({
    Home: { screen: Home,
        navigationOptions: ({ navigation }) => ({ // navigationOptions can be an object or be a function that takes in props 
             headerStyle:{
                 backgroundColor:"black",

                
                
             },
             headerTitleStyle: {
                color: 'white'
            },
            headerLeft:()=> <Icon name='menu' size={30}
                color='white'
                onPress={() => navigation.toggleDrawer()}
            />
        }) },
    Fests:{screen:Fests},
    History:{screen:History},
    Clubs:{screen:Clubs},
    
    
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: 'white'
        }
    }
}));

const MapNavigator = createAppContainer(createStackNavigator({
    Map: { screen: Map,
        navigationOptions: ({ navigation }) => ({ // navigationOptions can be an object or be a function that takes in props 
            headerStyle:{
                backgroundColor:"#5ed660",
               
               
            },
            headerLeft:()=><Icon name='menu' size={30} 
                color='white'
                onPress={() => navigation.toggleDrawer()}
            /> 
        }) }, 
    
}, {
    initialRouteName: 'Map',
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'red'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
}));
const LibraryNavigator = createAppContainer(createStackNavigator({
    Library: { screen: Library,
        navigationOptions: ({ navigation }) => ({ // navigationOptions can be an object or be a function that takes in props 
             headerStyle:{
                 backgroundColor:"black",

                
                
             },
             headerTitleStyle: {
                color: 'white'
            },
            headerLeft:()=> <Icon name='menu' size={30}
                color='white'
                onPress={() => navigation.toggleDrawer()}
            />
        }) }, 
    
}, {
    initialRouteName: 'Library',
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: 'white'
        }
    }
}));
const MessNavigator = createAppContainer(createStackNavigator({
    Mess: { screen: Mess,
        navigationOptions: ({ navigation }) => ({ // navigationOptions can be an object or be a function that takes in props 
             headerStyle:{
                 backgroundColor:"black",

                
                
             },
             headerTitleStyle: {
                color: 'white'
            },
            headerLeft:()=> <Icon name='menu' size={30}
                color='white'
                onPress={() => navigation.toggleDrawer()}
            />
        }) }, 
    
}, {
    initialRouteName: 'Mess',
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: 'white'
        }
    }
}));
const TimeTableNavigator = createAppContainer(createStackNavigator({
    TimeTable: { screen: TimeTable,
        navigationOptions: ({ navigation }) => ({ // navigationOptions can be an object or be a function that takes in props 
             headerStyle:{
                 backgroundColor:"#3aa2cf",

                
                
             },
             headerTitleStyle: {
                color: 'white'
            },
            headerLeft:()=> <Icon name='menu' size={30}
                color='white'
                onPress={() => navigation.toggleDrawer()}
            />
        }) }, 
    
}, {
    initialRouteName: 'TimeTable',
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: 'white'
        }
    }
}));
const FacebookNavigator = createAppContainer(createStackNavigator({
    Facebook: { screen: Facebook,
        navigationOptions: ({ navigation }) => ({ // navigationOptions can be an object or be a function that takes in props 
             headerStyle:{
                 backgroundColor:"#012c4d",

                
                
             },
             headerTitleStyle: {
                color: 'white'
            },
            headerLeft:()=> <Icon name='menu' size={30}
                color='white'
                onPress={() => navigation.toggleDrawer()}
            />
        }) }, 
    
}, {
    initialRouteName: 'Facebook',
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: 'white'
        }
    }
}));
const CustomDrawerComponent=(props)=>(<SafeAreaView stle={{flex:1}}>
    <View style={{height:150,backgroundColor:'#b8e4ff'}} ></View>
    <ScrollView><DrawerItems {...props}/></ScrollView>
</SafeAreaView>)

const MainNavigator = createAppContainer(createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name='home'
                    type='font-awesome-5'
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    Map: {
        screen: MapNavigator,
        navigationOptions: {
            title: 'Map',
            drawerLabel: 'Map',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name='map-marked-alt'
                    type='font-awesome-5'
                    size={24}
                    color={tintColor}
                />
            )
        }    
    },
    Library: {
        screen: LibraryNavigator,
        navigationOptions: {
            title: 'Library',
            drawerLabel: 'Library',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name='book-reader'
                    type='font-awesome-5'
                    size={24}
                    color={tintColor}
                />
            )
        }    
    },Mess: {
        screen: MessNavigator,
        navigationOptions: {
            title: 'Mess',
            drawerLabel: 'Mess',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name='utensils'
                    type='font-awesome-5'
                    size={24}
                    color={tintColor}
                />
            )
        }    
    },TimeTable: {
        screen: TimeTableNavigator,
        navigationOptions: {
            title: 'TimeTable',
            drawerLabel: 'TimeTable',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name='clock'
                    type='font-awesome-5'
                    size={24}
                    color={tintColor}
                />
            )
        }    
    },Facebook: {
        screen: FacebookNavigator,
        navigationOptions: {
            title: 'Facebook',
            drawerLabel: 'Facebook',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name='facebook-square'
                    type='font-awesome-5'
                    size={24}
                    color={tintColor}
                />
            )
        }    
    },
    
}, {
    initialRouteName: 'Home',
    drawerBackgroundColor: '#ededed',
    contentComponent:CustomDrawerComponent
}))
const { persistor, store } = ConfigureStore();
class DrawerElements extends Component {

    


    render() {
        return(
            <Provider store={store}>
        <PersistGate
          persistor={persistor}
        >
            <View style={{ flex:1, paddingTop: Platform.OS === 'ios' ? 0 : 0 }}>
                <MainNavigator />
            </View>
        </PersistGate>
        </Provider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60,
    }
});

export default (DrawerElements);