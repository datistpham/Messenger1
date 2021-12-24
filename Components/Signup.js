import React, { useState } from "react"
import {TextInput, Button, View, Text, StyleSheet, Pressable} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import { useNavigation } from "@react-navigation/native"
import { Picker } from "@react-native-picker/picker"
import _ from 'lodash'
import { RadioButton } from "react-native-paper"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import allActions from "../Redux/Action"
const Stack= createStackNavigator()
const Signup= (props)=> {
    return (
        <View style={styles.container}>
            <Header />
            <Intro/>
        </View>
    )
}
const Header= ()=> {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Join Messenger </Text>
        </View>
    )
}
const Intro= (props)=> {
    return (
        <View style={styles.container2}>
            <Title title1="What's your name ?" title2="Enter the name you use in real life"  />
            
            <View style={styles.container3}>
                <EnterName title="Firstname" textName={<FirstNameValue />} />
                <EnterName title="Surname" textName={<SurNameValue />} />
            </View>
            <View>
                <Next navigateLink="Signup_2" />
            </View>
        </View>
    )
}
const Title= (props)=> {
    return (
        <View style={props.styleAdd}>
            <Text style={[styles.IntroText, styles.IntroText2]}>
               {props.title1}
            </Text>
            <Text style={styles.IntroText}>
                {props.title2}
            </Text>
        </View>
    )
}
const EnterName= (props)=> {
    return (
        <View style={styles.container5} >
            <Text style={{marginBottom: 5}}>{props.title}</Text>
            {props.textName}
        </View>
    )
}
const FirstNameValue= ()=> {
    const firstName= useSelector((state)=> state.firstName)
    const dispatch= useDispatch()
    return (
        <View>
            <TextInput style={styles.textInput} onChangeText={_.debounce((e)=> dispatch(allActions.getName.getFirstName(e)), 300)}/>
        </View>
    )
}
const SurNameValue= ()=> {
    const surName= useSelector((state)=> state.surName)
    const dispatch= useDispatch()
    return (
        <View>
            <TextInput style={styles.textInput} onChangeText={_.debounce((e)=> dispatch(allActions.getName.getSurName(e)), 300)}/>
        </View>
    )
}
const Next= (props)=> {
    const navigation= useNavigation()
    return (
        <View style={styles.container4}>
            <Pressable style={styles.buttonFake} onPress={()=> navigation.navigate(props.navigateLink)}>
                <Text style={styles.textFake}>Next</Text>
            </Pressable>
        </View>
    )
}
const DateMonthYear= ()=> {
    return (
        <View style={styles.container}>
            <Header />
            <Title styleAdd={styles.container4} title1="What's your date of birth ?" title2="Choose your date of birth. You can always make thid private later."/>
            <ChooseDateofBirth />
        </View>
    )
}
const ChooseDateofBirth= (props)=> {
    const navigation= useNavigation()
    const date= new Date()
    const [selectedValue, setSelectedValue] = useState(()=> ({
        date: '',
        month: '',
        year: date.getFullYear(),
    }));
    return (
        <View style={styles.container4}>
            <Text>Date of Birth</Text>
            <View style={[styles.container3, styles.container6]}>
                <Picker
                    selectedValue={selectedValue.date}
                    style={styles.stylePicker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue((prev)=> ({...prev,date: itemValue}))}
                >
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={1} />
                    <Picker.Item label="3" value={1} />
                    <Picker.Item label="4" value={1} />
                    <Picker.Item label="5" value={5} />
                    <Picker.Item label="6" value={6} />
                    <Picker.Item label="7" value={7} />
                    <Picker.Item label="8" value={8} />
                    <Picker.Item label="9" value={9} />
                    <Picker.Item label="10" value={10} />
                    <Picker.Item label="11" value={11} />
                    <Picker.Item label="12" value={12}/>
                    <Picker.Item label="13" value={13} />
                    <Picker.Item label="14" value={14} />
                    <Picker.Item label="15" value={15} />
                    <Picker.Item label="16" value={16} />
                    <Picker.Item label="17" value={17} />
                    <Picker.Item label="18" value={18} />
                    <Picker.Item label="19" value={19} />
                    <Picker.Item label="20" value={20} />
                    <Picker.Item label="21" value={21} />
                    <Picker.Item label="22" value={22} />
                    <Picker.Item label="23" value={23} />
                    <Picker.Item label="24" value={24} />
                    <Picker.Item label="25" value={25} />
                    <Picker.Item label="26" value={26} />
                    <Picker.Item label="27" value={27} />
                    <Picker.Item label="28" value={28} />
                    <Picker.Item label="29" value={29} />
                    <Picker.Item label="30" value={30} />
                    <Picker.Item label="31" value={31} />
                    </Picker>
                    <Picker
                        selectedValue={selectedValue.month}
                        style={styles.stylePicker}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue((prev)=> ({...prev,month: itemValue}))}
                    >
                    {_.range(1,12).map(item=> <Picker.Item key={item} label={`${item}`} value={item}/>)}
            
                    </Picker>
                <Picker
                    selectedValue={selectedValue.year}
                    style={styles.stylePicker}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue((prev)=> ({...prev,year: itemValue}))}
                >
                    {_.range(2021,1912,-1).map(item=> <Picker.Item key={item} label={`${item}`} value={item}/>)}
                </Picker>
            </View>
            <View>
                <Text style={{margin: 10}}>{ date.getFullYear() - selectedValue.year} years old</Text>
            </View>
            <View style={styles.container4}>
                <Pressable style={styles.buttonFake} onPress={()=> navigation.navigate("Signup_3")}>
                    <Text style={styles.textFake}>Next</Text>
                </Pressable>
            </View>
        </View>
    )
}

const PhoneNumber= ()=> {
    const navigation= useNavigation()
    return (
        <View>
            <Header />
            <Title styleAdd={styles.container4} title1="Enter your phone number" title2="Enter the mobile number on which you can be contacted. You can hide this from your profile later."/>
            <View style={{margin: 16}}>
                <Text style={{marginBottom: 10}}>Phone number</Text>
                <TextInput style={styles.textInput} />
            </View>
            <View style={styles.container4}>
                <Pressable style={styles.buttonFake} onPress={()=> navigation.navigate("Signup_4")}>
                    <Text style={styles.textFake}>Next</Text>
                </Pressable>
            </View>

        </View>
    )
}
const Gender= ()=> {
    const [checked, setChecked]= useState("")
    const navigation= useNavigation()
    return (
        <View>
            <Header />
            <Title styleAdd={styles.container4} title1="What's your gender ?" title2="You can change who sees your gender on your profile later."/>
            <View style={styles.container7}>
                <View style={styles.inputRadio}>
                    <Text style={{fontSize: 18}}>Female</Text>
                    <RadioButton value="female"
                    status={checked=== "female" ? "checked": "unchecked"}
                    onPress={()=>setChecked("female")} 
                    
                    />
                    
                </View>
                <View style={styles.inputRadio}>
                    <Text style={{fontSize: 18}}>Male</Text>
                    <RadioButton value="Male"
                    status={checked=== "Male" ? "checked": "unchecked"}
                    onPress={()=>setChecked("Male")} 
                    
                    />
                    
                </View>
                <View style={styles.inputRadio}>
                    <Text style={{fontSize: 18}}>Custom</Text>
                    <RadioButton value="Custom"
                    status={checked=== "Custom" ? "checked": "unchecked"}
                    onPress={()=>setChecked("Custom")} 

                    />
                    
                </View>
            </View>
            <View style={styles.container4}>
                <Pressable style={styles.buttonFake} onPress={()=> navigation.navigate("Signup_5")}>
                    <Text style={styles.textFake}>Next</Text>
                </Pressable>
            </View>
        </View>
    )
}
const PassWord= ()=> {
    const navigation= useNavigation()
    return (
        <View >
            <Header />
            <Title styleAdd={styles.container4} title1="Choose a password" title2="Create a password with at least 6 characters. It should be something that others couldn't guess"/>
            <View style={{marginTop: 15,paddingHorizontal: 16}} >
                <Text style={{marginBottom: 10}}>New password</Text>
                <TextInput style={styles.textInput} />
            <Text style={{marginTop: 15}}>
                By tapping Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notification from use and can opt out at any time.
            </Text>
            </View>
            <View style={styles.container4}>
                <Pressable style={styles.buttonFake} onPress={()=> navigation.navigate("Signup_5")}>
                    <Text style={styles.textFake}>Sign Up</Text>
                </Pressable>
            <Text style={{marginTop: 15}} onPress={()=> navigation.navigate("Login")}>
                Already have an account ?
            </Text>
            </View>
        </View>
    )
}
const RootSignup= ()=> {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}  > 
            <Stack.Screen name="Signup_1" component={Signup} />
            <Stack.Screen name="Signup_2" component={DateMonthYear} />
            <Stack.Screen name="Signup_3" component={PhoneNumber} /> 
            <Stack.Screen name="Signup_4" component={Gender} />  
            <Stack.Screen name="Signup_5" component={PassWord} />  

        </Stack.Navigator>  
    )
}
export default RootSignup
const styles= StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'stretch'
    },
    container2: {
        marginTop: 16
    },
    container3: {
        marginTop: 16,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    container4: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        width: '100%'
    },
    container5: {
        width: '46%',
        margin: 10,
    },
    container6: {
        width: '100%',
        justifyContent: 'space-evenly'
    },
    container7: {
        width: '100%',
        paddingHorizontal: '12%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },  
    header: {
        width: '100%',
        height: 60,
        backgroundColor: '#2e89ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        color: "rgb(255,255,255)",
        textAlign: 'center'
    },
    IntroText: {
        fontSize: 18,
        color: "#000",
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    IntroText2: {
        fontSize: 24,
        fontWeight: "600"
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        padding: 10,
        borderColor: 'rgba(0,0,0,0.2)'
    },
    buttonFake: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        width: '60%',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#2e89ff',
    },
    textFake: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    stylePicker: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        borderRadius: 5,
        padding: 10,
        width: '30%'
    },
    inputRadio: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 5
    }
})