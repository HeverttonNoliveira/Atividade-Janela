
import {Pressable, StyleSheet, View, Text, Image } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'

export default props => {
    return(
        <View style={{flex:1, justifyContent:"center", justifyContent:"space-between", alignItems:"center", padding:24}}>
            <Text style={
                {
                    color: 'black',
                    fontSize:48,
                    fontWeight:"bold",
                }}>Gamer on</Text>

            <Image style={style.image} 
            source={require('../image/splash.png')}/>

            <Pressable style={
                {   
                    justifyContent:"space-between",
                    borderRadius: 8,
                    width:'100%',
                    paddingTop: 16,
                    paddingBottom: 16,
                    paddingLeft: 32,
                    paddingRight: 32,
                    flexDirection:"row",
                    backgroundColor: '#6b63ff',
                }
            }>
            <Text style={
                {
                    color: 'white',
                    fontSize:18,
                    fontWeight:"bold"
                }}>let's Begin</Text>
                <Icon name="chevron-forward-outline" size={18} color='white'/>
            </Pressable>

        </View>
    )
}

const style = StyleSheet.create(
    {
        image:{
            height:400,
            width:400,
        }
    }
)