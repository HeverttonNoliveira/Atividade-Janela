import React, { useState } from "react"
import { View, Text, Image, StyleSheet, Pressable } from "react-native"
import { TextInput } from 'react-native-paper';
import Iconn from 'react-native-vector-icons/Ionicons'


export default props => {

    const [text, setText] = useState('');
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 24 }}>
            <Image style={style.image}
                source={require('../image/register.png')}
            />

            <View style={{ justifyContent: "flex-start", justifyContent: "space-evenly", width: "100%", flex: 1 }}>
            <Text style={
                    {
                        color: 'black',
                        fontSize: 32,
                        fontWeight: "bold",
                    }}>Register</Text>
            <View style={{ flexDirection: "row", justifyContent: "center", justifyContent: "space-between" }}>
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

                <TextInput
                    style={
                        {
                            backgroundColor: 'none',
                        }
                    }
                    left={<TextInput.Icon icon="account-outline" />}
                    label="Full name"
                    value={text}
                    onChangeText={text => setText(text)}
                />

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
                    label="Password"
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
                    label="Confirme Password"
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <TextInput
                    style={
                        {
                            backgroundColor: 'none',
                        }
                    }
                    left={<TextInput.Icon icon="calendar" />}
                    label="Date of Birth"
                    value={text}
                    onChangeText={text => setText(text)}
                />

                
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