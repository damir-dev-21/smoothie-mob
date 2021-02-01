import React from 'react'
import {View,Image,Dimensions} from 'react-native'
import {Text,Title} from 'react-native-paper'

export const SaveScreen = ({navigation}) =>{

    const {width,height} = Dimensions.get('screen')

    return(
        <View style={{height,backgroundColor:'#fff'}}>
            <Text>SaveScreen</Text>
        </View>
    )
}