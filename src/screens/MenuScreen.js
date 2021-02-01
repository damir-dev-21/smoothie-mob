import React from 'react'
import {View,Image,Dimensions} from 'react-native'
import {Text,Title} from 'react-native-paper'

export const MenuScreen = ({navigation}) =>{

    const {width,height} = Dimensions.get('screen')

    return(
        <View style={{height,backgroundColor:'#fff'}}>
            <Text>MenuScreen</Text>
        </View>
    )
}