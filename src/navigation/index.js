import React from 'react'
import {Image, View,Text} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'

import {HomeScreen} from '../screens/HomeScreen'
import {MenuScreen} from '../screens/MenuScreen'
import {SaveScreen} from '../screens/SaveScreen'
import {AllProducts} from '../screens/AllProducts'

import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/FontAwesome5'

import { TouchableOpacity } from 'react-native-gesture-handler'

const Tab = createBottomTabNavigator();

const SaveStackScreen = createStackNavigator()
const ProductsStackScreen = createStackNavigator()
const RecipesStackScreen = createStackNavigator()
const MenuStackScreen = createStackNavigator()


const optionsTabs = {
    
    style:{
        height:'10%',
        backgroundColor: '#ffffff',
    },
    labelStyle:{
        fontSize:15,
        color:'#000',
        fontWeight:'bold'
    }
}


const BtnLeft = ({nav}) =>(
        <TouchableOpacity onPress={()=>nav.goBack()}>
            <View style={{marginLeft:20}}> 
            <Icon name="ios-chevron-back" size={26} color="black" />
            </View>
        </TouchableOpacity>
)


const MainTabs = () =>{
    return(
        <Tab.Navigator tabBarOptions={optionsTabs} initialRouteName="Recipes" 
        screenOptions={({route})=>({
            tabBarIcon:({focused})=>{
                const tintColor = focused ? '#0E0E0F' :'#A7A7A7';
                
                switch(route.name){
                    case 'Saved':
                        return(
                            <Icon name="md-bookmark-outline" size={25} color={tintColor}/>
                        )
                    case 'Products':
                        return(
                            <Icon3 name="carrot" size={25} color={tintColor}/>

                        )  
                    case 'Recipes':
                        return(
                            <Icon2 name="chef-hat" size={25} color={tintColor}/>

                        )    
                    case 'Menu':
                        return(
                            <Icon name="menu-outline" size={25} color={tintColor}/>

                        )      
                }
            },
        })}
    >

        <Tab.Screen name="Saved" component={SaveHandlerScreen}/>
        <Tab.Screen name="Products" component={ProductHandlerScreen} options={{tabBarLabel:'Products',title:'Make a Smoothie'}}/>
        <Tab.Screen name="Recipes" component={RecipesHandlerScreen}/>
        <Tab.Screen name="Menu" component={MenuHandlerScreen}/>

    </Tab.Navigator>

    )    
}

export default MainTabs

const SaveHandlerScreen = ({navigation}) =>(
    <SaveStackScreen.Navigator >
        <SaveStackScreen.Screen name="Saved" component={SaveScreen} options={{
            title:'Saved',
            headerStyle:{
                shadowOpacity:0,
                elevation:0
            },
            headerLeft:()=>(<BtnLeft nav={navigation}/>)
        }}/>
    </SaveStackScreen.Navigator>
)


const ProductHandlerScreen = ({navigation}) =>(
    <SaveStackScreen.Navigator>
        <SaveStackScreen.Screen name="Products" component={AllProducts} options={{
            title:'Make a Smoothie',
            headerStyle:{
                shadowOpacity:0,
                elevation:0
            },
            headerLeft:()=>(<BtnLeft nav={navigation}/>)
        }}/>
    </SaveStackScreen.Navigator>
)


const RecipesHandlerScreen = ({navigation}) =>(
    <SaveStackScreen.Navigator>
        <SaveStackScreen.Screen name="Recipes" component={HomeScreen} options={{
            headerTitle:false,
            headerStyle:{
                shadowOpacity:0,
                elevation:0
            },
            headerLeft:()=>(<BtnLeft nav={navigation}/>),
            headerRight:()=>(
                <View style={{flexDirection:'row',alignItems:'center',marginRight:15}}>
                    <Icon name="search-outline" size={24} color="#000" style={{marginRight:20}}/>
                    <TouchableOpacity>
                        <View style={{width:30,height:30,borderRadius:50,borderColor:'grey',borderWidth:1}}>
                            <Text style={{textAlign:'center',lineHeight:30,fontSize:25,color:'#4B55C8'}}>
                                +
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }}/>
    </SaveStackScreen.Navigator>
)


const MenuHandlerScreen = ({navigation}) =>(
    <SaveStackScreen.Navigator>
        <SaveStackScreen.Screen name="Menu" component={MenuScreen} options={{
            headerTitle:'Menu',
            headerStyle:{
                shadowOpacity:0,
                elevation:0
            },
            headerLeft:()=>(<BtnLeft nav={navigation}/>)
        }}/>
    </SaveStackScreen.Navigator>
)