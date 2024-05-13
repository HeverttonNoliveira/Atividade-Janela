import React, { useState } from "react"
import { View, Text, Image, StyleSheet, Pressable } from "react-native"
import { TextInput } from 'react-native-paper';
import Iconn from 'react-native-vector-icons/Ionicons'


export default props => {

    const [text, setText] = useState('');
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
            <Image style={style.image}
                source={require('../image/login.png')}
            />



            <View style={{ justifyContent: "flex-start", justifyContent: "space-evenly", width: "100%", flex: 1 }}>
                <Text style={
                    {
                        color: 'black',
                        fontSize: 32,
                        fontWeight: "bold",
                    }}>Login</Text>

                <TextInput
                    style={
                        {
                            backgroundColor: 'none',
                        }
                    }
                    left={<TextInput.Icon icon="at" />}
                    label="Email ID"
                    value={text}
                    onChangeText={text => setText(text)}
                />

                <TextInput
                    style={
                        {
                            backgroundColor: 'none',
                        }
                    }
                    left={<TextInput.Icon icon="lock" />}
                    right={<Text>olá</Text>}
                    label="Password"
                    value={text}
                    onChangeText={text => setText(text)}
                />

                <Pressable style={
                    {
                        justifyContent: "center",
                        borderRadius: 8,
                        paddingTop: 16,
                        paddingBottom: 16,
                        paddingLeft: 32,
                        paddingRight: 32,
                        flexDirection: "row",
                        backgroundColor: '#6b63ff',
                    }
                }>
                    <Text style={
                        {
                            textAlign: "center",
                            color: 'white',
                            fontSize: 18,
                            fontWeight: "bold"
                        }}>Login</Text>
                </Pressable>

                <Text style={
                    {
                        textAlign: "center",
                        color: '#a7a7a7',
                        fontSize: 18,
                        fontWeight: "bold"
                    }}>or, login with ...</Text>

                <View style={{ flexDirection: "row", justifyContent: "center", justifyContent: "space-evenly" }}>
                    <Pressable
                        style={
                            {
                                borderWidth: 1,
                                borderColor: '#a7a7a7',
                                padding: 8,
                                borderRadius: 8,
                            }
                        }
                    >
                        <Iconn name="logo-google" size={32} color="#6b63ff" />
                    </Pressable>

                    <Pressable
                        style={
                            {
                                borderWidth: 1,
                                borderColor: '#a7a7a7',
                                padding: 8,
                                borderRadius: 8,
                            }
                        }
                    >
                        <Iconn name="logo-facebook" size={32} color="#6b63ff" />
                    </Pressable>

                    <Pressable
                        style={
                            {
                                borderWidth: 1,
                                borderColor: '#a7a7a7',
                                padding: 8,
                                borderRadius: 8,
                            }
                        }
                    >
                        <Iconn name="logo-twitter" size={32} color="#6b63ff" />
                    </Pressable>
                </View>
                <Text style={
                    {
                        textAlign: "center",
                        color: '#a7a7a7',
                        fontSize: 18,
                        fontWeight: "bold"
                    }}>New to the app ? Register</Text>

            </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        image: {
            height: 300,
            width: 300,
        }
    }
)