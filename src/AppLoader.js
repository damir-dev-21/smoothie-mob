import * as Font from 'expo-font'

export async function AppLoader(){
    try{
       await Font.loadAsync({
           
       })
    }catch(e){
        console.log(e)
    }
}