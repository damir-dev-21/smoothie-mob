import React from 'react'
import {View,Image,Dimensions,TouchableOpacity} from 'react-native'
import {Text,Title} from 'react-native-paper'

export const Intro = ({navigation}) =>{
    
    const {width,height} = Dimensions.get('screen')
    
    return(
        <View style={{backgroundColor:'#FFFFFF',height,justifyContent:'center'}}>
            <View>
                <Image
                    source={require('../../assets/image/apple.png')}
                    style={{
                        width:280,
                        height:380,
                        alignItems:'flex-start'
                    }}
                    resizeMode="contain"
                />
            </View>
            <View style={{paddingLeft:25}}>
                <Title style={{fontSize:50,paddingTop:50}}>Smoothie</Title>
                <Text style={{fontSize:20,marginVertical:25}}>More than 286+ original recipes for
                smoothies from the world's leading
                experts on detox.
                </Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                <View style={{paddingLeft:25,marginBottom:40,flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}>
                        Get Started
                    </Text>
                    <Image
                        source={require('../../assets/image/arrow.png')}
                        style={{
                            width:20,
                            height:10,
                            marginLeft:10,
                            marginTop:7
                        }}
                        resizeMode="contain"
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}