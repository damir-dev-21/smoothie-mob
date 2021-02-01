import React from 'react'
import {View,Image, TextInput,Dimensions,FlatList} from 'react-native'
import {Text,Title} from 'react-native-paper'

import {fakeRecipes} from '../constants'

import Icon from 'react-native-vector-icons/Ionicons'

export const HomeScreen = ({navigation}) =>{

    const {width,height} = Dimensions.get('screen')

    const renderItem = ({item}) =>{
        return(
            <View style={{marginHorizontal:20,marginTop:30}}>
                 <View style={{borderRadius:20}}>
                <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{
                        width:width-40,
                        height:250,
                        borderRadius:20
                    }}
                />
                </View>

                <View style={{marginTop:15}}>
                    <Text style={{textAlign:'left',fontSize:21,width:"99%"}}>{item.title}</Text>
                    <View style={{marginTop:15,flexDirection:'row',alignItems:'flex-start'}}>
                        <Image
                            source={require('../../assets/image/like.png')}
                            resizeMode="contain"
                            style={{
                                width:25,
                                height:25
                            }}
                        />
                        <View style={{flexDirection:'column',marginLeft:15}}>
                            <Text style={{fontWeight:'bold',fontSize:17}}>{item.likes}</Text>
                            <Text style={{marginTop:3}}>{item.auth}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }


    return(
        <View style={{height,backgroundColor:'#fff'}}>

            <View style={{marginTop:10}}>
                <View style={{flexDirection:'row',alignItems:'center',padding:20}}>
                    <Title style={{fontSize:40,paddingTop:13,marginRight:15}}>Recipes</Title>
                    <Image
                        source={require('../../assets/image/hmm.png')}
                        resizeMode="contain"
                        style={{
                            width:50,height:50
                        }}
                    />
                </View>
            </View>

            <View style={{marginHorizontal:20,marginTop:10}}>
                <TextInput
                    placeholder="Search something tasty"
                    selectTextOnFocus={false}
                    style={{
                        position:'relative',
                        textDecorationLine:'none',
                        height:60,
                        paddingLeft:60,
                        borderRadius:10,
                        fontSize:18,
                        backgroundColor:'#F3F3F3'
                    }}
                />
                <Icon
                    name="search"
                    size={26}
                    color="#000"
                    style={{
                        position:'absolute',
                        top:15,
                        left:15
                    }}
                />
            </View>

            <View style={{justifyContent:'center',alignItems:'center'}}>

                    <FlatList
                        data={fakeRecipes}
                        renderItem={renderItem}
                        keyExtractor={item=>item.id}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                    />

                    <View style={{position:'absolute',bottom:20,right:30}}>
                        <Image
                            source={require('../../assets/image/filter.png')}
                            resizeMode="contain"
                            style={{
                                width:60,
                                height:50
                            }}
                        />
                    </View>

            </View>
           
        </View>
    )
}