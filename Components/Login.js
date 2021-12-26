import React from "react"
import {View, Text, Image, StyleSheet, TextInput ,Pressable} from 'react-native'
import ImageAvatar from '../assets/Facebook-Messenger-Logo-PNG-High-Quality-Image.png'
import { useNavigation } from "@react-navigation/native"
import {useState} from 'react'
import { useGetPosts } from "../Api/useRequest"

const Login= (props)=> {  
    const { status, data, error, isFetching } = useGetPosts()

    return (
        <View style={styles.container}>
            <ImageRepresent />      
            <EnterInput />
        </View>
    )
}

export default React.memo(Login)

const ImageRepresent= ()=> {
    return (
        <View style={styles.container1}>
            <Image style={styles.image} source={ImageAvatar}   />
        </View>
    )
}
const EnterInput= ()=> {
    const [account,setAccount]= useState(()=> "")
    const [password, setPassword]= useState(()=> "")
    
    return (
        <View style={styles.container2}> 
            <TextInput style={[styles.inputText, styles.inputTextSeparate]} placeholder='Phone number or email' onChangeText={(e)=> setAccount(e)} />
            <TextInput secureTextEntry={true} style={styles.inputText} placeholder='Password' onChangeText={(e)=> setPassword(e)} />
            <PerformAction account={account} password={password} />
        </View>
    )
}
const PerformAction= (props)=> {
    const navigation= useNavigation()
    return (
        <View style={styles.container3}>
            <View style={styles.container4}>
                <Pressable disabled={(props.account !== "" && props.password !== "" ? false: true)} style={[styles.buttonFake, (props.account!== "" && props.password!== "") ? styles.buttonFake2 : (styles.buttonFake1) ]}>
                    <Text style={[styles.textFake, (props.account!== "" && props.password!== "") ? styles.textFake4 : (styles.textFake3) ]}>Log in</Text>
                </Pressable>
            </View>
            <View style={styles.container4}>
                <Pressable style={[styles.buttonFake,styles.buttonFake1]} onPress={()=> navigation.navigate("Signup")}>
                    <Text style={[styles.textFake,styles.textFake1]}>Create a new account</Text>
                </Pressable>
            </View>
            <View style={styles.container4}>
                <Pressable style={[styles.buttonFake, styles.buttonFake1]}>
                    <Text style={[styles.textFake, styles.textFake2]}>Forgot password</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff"
    },
    container1: {
        flex: 2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container2: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginBottom: 30
    },
    container3: {
        width: '100%',
        marginTop: 20
    },
    container4: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        width: '100%'
    },
    image: {
        width: 100,
        height: 100
    },

    inputText: {
        width: '100%',
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 16
    },
    inputTextSeparate: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.2)',

    },
    styleButton: {
        width: '100%',
        borderRadius: 20,
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 10
    },
    buttonFake: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#2e89ff',
    },
    buttonFake1: {
        backgroundColor: '#f5f5f5'
    },
    buttonFake2: {
        backgroundColor: "#2e89ff"
    },  
    textFake3: {
        color: "#d7d7d7"
    },
    textFake4: {
        color: "#fff"
    },
    textFake: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: '600',
        letterSpacing: 0.25,
        color: 'white',
        textTransform: 'uppercase'
    },
    textFake1: {
        color: "#000"
    },
    textFake2: {
        color: '#1879e8'
    }
})