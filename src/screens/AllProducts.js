import React from 'react'
import {View,Image, Dimensions, FlatList,ScrollView} from 'react-native'
import {Text,Title} from 'react-native-paper'

import {fakeAllProducts} from '../constants'

export const AllProducts = ({navigation}) =>{

    const {width,height} = Dimensions.get('screen')

    const renderItem = ({item}) =>{
        return(
            <View style={{marginHorizontal:15,marginVertical:25}}>
                <View style={{backgroundColor:'#F7F7F7',borderRadius:15,padding:15}}>
                <Image
                    source={item.image}
                    resizeMode="contain"
                    style={{
                        width:120,
                        height:100
                    }}
                />
                </View>

                <View style={{marginTop:10}}>
                    <Title>{item.title}</Title>
                    <Text>{item.detail}</Text>
                </View>
            </View>
        )
    }

    return(
        <ScrollView style={{backgroundColor:'#fff',height}}>
            
                <View style={{justifyContent:'center',alignItems:'center',width,marginTop:20}}>
                <FlatList
                    data={fakeAllProducts}
                    renderItem={renderItem}
                    keyExtractor={item=>item.id}
                    pagingEnabled
                    numColumns={2}
                />
                </View>
        </ScrollView>
    )
}