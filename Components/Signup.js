import React, { useState, useMemo } from "react"
import {TextInput, View, Text, StyleSheet, Pressable, Image} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import { useNavigation } from "@react-navigation/native"
import { Picker } from "@react-native-picker/picker"
import _ from 'lodash'
import { RadioButton } from "react-native-paper"
import { useSelector,useDispatch } from "react-redux"
import allActions from "../Redux/Action"
import ChevronLeft from '../assets/chervon-left.png'
import Dialog, { SlideAnimation, DialogContent, DialogTitle, DialogFooter,DialogButton } from 'react-native-popup-dialog'
import getBirthDay from "../Redux/Action/getBirthDay"
import axios from 'axios'

const Stack= createStackNavigator()
const IconChevronLeft= ()=> {
    const navigation= useNavigation()
    return (
        <Pressable onPress={()=> navigation.goBack()} style={styles.container8}>
            <Image source={ChevronLeft}  style={styles.image2} tintColor="white" />
        </Pressable>
    )
}
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
            <IconChevronLeft />
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
    const dispatch= useDispatch()
    return (
        <View>
            <TextInput style={styles.textInput} onChangeText={_.debounce((e)=> dispatch(allActions.getName.getFirstName(e)), 300)}/>
        </View>
    )
}
const SurNameValue= ()=> {
    const dispatch= useDispatch()
    return (
        <View>
            <TextInput style={styles.textInput} onChangeText={_.debounce((e)=> dispatch(allActions.getName.getSurName(e)), 300)}/>
        </View>
    )
}
const Next= (props)=> {
    const navigation= useNavigation()
    const firstName= useSelector((state)=> state.firstName)
    const surName= useSelector((state)=> state.surName)
    const [show, setShow]= useState(false)
    const showOff= ()=> {
        setShow(false)
    }
    const checkName= ()=> {
        if(surName=="" || firstName==="" ) {
            setShow(true)
        }
        else {
            navigation.navigate("Signup_2")
        }
    }
    return (
        <View style={styles.container4}>
            <DiaLogCustom content="Please don't empty any field" show={show} showOff={showOff} />
            <Pressable style={styles.buttonFake} onPress={()=> checkName()}>
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
    const dispatch= useDispatch()
    const [selectedValue, setSelectedValue] = useState(()=> ({
        date: '',
        month: '',
        year: date.getFullYear(),
    }))
    const [check,setCheck]= useState({
        checkdate: true,
        checkmonth: true,
        checkpress: true
    })
    const [show, setShow]= useState(false)
    const checkDate= ()=> {
        setCheck((prev)=> ({...prev,checkdate: false}))
        if(check.checkdate === false && check.checkmonth=== false) {
            setCheck((prev)=> ({...prev, checkpress: false}))
        }
    }
    const checkMonth= ()=> {
        setCheck((prev)=> ({...prev,checkmonth: false}))
        if(check.checkdate === false && check.checkmonth=== false) {
            setCheck((prev)=> ({...prev, checkpress: false}))
        }
    }
    const checkYear= ()=> {
        if(check.checkdate === false && check.checkmonth=== false) {
            setCheck((prev)=> ({...prev, checkpress: false}))
        }
    }

    const [message, setMessage]= useState(()=> ("Please enter valid date of birth."))
    const checkCondition= ()=> {
            
            if(((selectedValue.date== 30 || selectedValue.date== 31) && selectedValue.month==2)
                
                ) {
                setMessage("Please enter valid date of birth.")
                  setShow(true) 
            }
            else if((selectedValue.date== 31 && (selectedValue.month== 4 || selectedValue.month== 6 || selectedValue.month==9 || selectedValue.month== 11))) {
                setMessage("Please enter valid date of birth.")
                
                setShow(true)
            }
            else if((selectedValue.date== 29 && parseInt(selectedValue.year) %4!== 0)) {
                setMessage("Please enter valid date of birth.")
                
                setShow(true)
            }
            else if(selectedValue.date== "" || selectedValue.month=="") {
                setMessage("Please choose your date of birth.")
                setShow(true)
            }
        else {
            navigation.navigate("Signup_3")
            
            dispatch(getBirthDay.getDate(selectedValue.date))
            dispatch(getBirthDay.getMonth(selectedValue.month))
            dispatch(getBirthDay.getYear(selectedValue.year))
        }
    }
    const showOff= ()=> {
        setShow(false)
    }
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear() || 0;
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    return (
        <View style={styles.container4}>
            <DiaLogCustom content={message} show={show} showOff={showOff} />
            <Text>Date of Birth</Text>
            <View style={[styles.container3, styles.container6]}>
                <View style={styles.container9}>
                    <Text style={{paddingBottom: 10}}>Date</Text>
                    <Pressable style={styles.stylePicker} >
                        <Picker
                            
                            selectedValue={selectedValue.date}
                            style={styles.stylePicker1}
                            onValueChange={(itemValue, itemIndex) => {checkDate(),setSelectedValue((prev)=> ({...prev,date: itemValue}))}}
                        >
                            <Picker.Item label="1" value={1} />
                            <Picker.Item label="2" value={2} />
                            <Picker.Item label="3" value={3} />
                            <Picker.Item label="4" value={4} />
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
                    </Pressable>
                </View>

                <View style={styles.container9}>
                    <Text style={{paddingBottom: 10}}>Month</Text>
                    <Pressable style={styles.stylePicker} >
                        <Picker
                            selectedValue={selectedValue.month}
                            style={styles.stylePicker1}
                            onValueChange={(itemValue, itemIndex) => {checkMonth(),setSelectedValue((prev)=> ({...prev,month: itemValue}))}}
                        >
                        {_.range(1,13).map(item=> <Picker.Item key={item} label={`${item}`} value={item}/>)}
                
                        </Picker>
                    </Pressable>
                </View>

                <View style={styles.container9}>
                    <Text style={{paddingBottom: 10}}>Year</Text>
                    <Pressable style={styles.stylePicker} >
                        <Picker
                            selectedValue={selectedValue.year}
                            style={styles.stylePicker1}
                            onValueChange={(itemValue, itemIndex) => {checkYear(),setSelectedValue((prev)=> ({...prev,year: itemValue}))}}
                        >
                            {_.range(2021,1912,-1).map(item=> <Picker.Item key={item} label={`${item}`} value={item}/>)}
                        </Picker>
                    </Pressable>
                </View>

            </View>
            {/*  */}
            <View>
                <Text style={{margin: 10}}> { getAge(`${selectedValue.year}/${selectedValue.month}/${selectedValue.date}`) } years old</Text>
            </View>
            <View style={styles.container4}>
                <Pressable style={styles.buttonFake} onPress={()=> checkCondition()}>
                    <Text style={styles.textFake}>Next</Text>
                </Pressable>
            </View>
        </View>
    )
}
const DiaLogCustom= (props)=> {
    return (
        <View style={styles.container}>
            <Dialog
                visible={props.show}
                dialogTitle={<DialogTitle title="Messenger" />}
                dialogAnimation={new SlideAnimation({
                slideFrom: 'bottom',
                })}
                footer={
                    <DialogFooter>
                        <DialogButton 
                        text="Ok" 
                        onPress={props.showOff}
                        />
                    </DialogFooter>
                }
                onTouchOutside={props.showOff}
            >
                <DialogContent>
                    <Text style={styles.container2}>{props.content}</Text>
                </DialogContent>
            </Dialog>
        </View>
    )
}

const PhoneNumber= ()=> {
    const navigation= useNavigation()
    const dispatch= useDispatch()
    const phoneNumber= useSelector(state=> state.isphonenumber1)
    function validPhoneNumber(phoneNumber) {
        const regex= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        return regex.test(phoneNumber)
    }
    const [show, setShow]= useState(false)
    const [content, setContent]= useState(()=> "")
    const showOff= ()=> {
        setShow(false)
    }
    const checkPhoneNumber= ()=> {
        console.log(phoneNumber)
        if(phoneNumber== "") {
            setShow(true)
            setContent("Please don't empty any field.")
        }
        else if(validPhoneNumber(phoneNumber)== true) {
            navigation.navigate("Signup_4")
        }
        else {
            setContent("Please enter valid phone number.")
            setShow(true)
        }
        
    }
    return (
        <View>
            <DiaLogCustom show={show} content={content} showOff={showOff} />
            <Header />
            <Title styleAdd={styles.container4} title1="Enter your phone number" title2="Enter the mobile number on which you can be contacted. You can hide this from your profile later."/>
            <View style={{margin: 16}}>
                <Text style={{marginBottom: 10}}>Phone number</Text>
                <TextInput onChangeText={_.debounce((e)=> dispatch(allActions.getPhoneNumber(e)),500)} style={styles.textInput} />
            </View>
            <View style={styles.container4}>
                <Pressable style={styles.buttonFake} onPress={()=> checkPhoneNumber()}>
                    <Text style={styles.textFake}>Next</Text>
                </Pressable>
            </View>

        </View>
    )
}
const Gender= ()=> {
    const [checked, setChecked]= useState("gvyhjb")
    const dispatch= useDispatch()
    const navigation= useNavigation()
    const [show, setShow]= useState(false)
    const showOff= ()=> {
        setShow(false)
    }
    const checkGender= ()=> {
        if(checked == "" ) {
            setShow(true)
        }
        else {
            dispatch(allActions.getGenderspe(checked))
            navigation.navigate("Signup_5")
        }
    }
    return (
        <View>
            <DiaLogCustom show={show} showOff={showOff} content="Please choose your gender." />
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
                <Pressable style={styles.buttonFake} onPress={()=> checkGender()}>
                    <Text style={styles.textFake}>Next</Text>
                </Pressable>
            </View>
        </View>
    )
}
const PassWord= ()=> {
    const navigation= useNavigation()
    const dispatch= useDispatch()
    const [password, setPassword]= useState("")
    function validPassword(password) {
        const regex= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/gim
        return regex.test(password)
    }
    const [content, setContent]= useState("")
    const [show, setShow]=useState(false)
    const showOff= ()=> {
        setShow(false)
    }
    const checkPassword= ()=> {
        if(password== "") {
            setContent("Please don't empty any field.")
            setShow(true)
        }
        else if(validPassword(password)== false) {
            setShow(true)
            setContent("Please enter valid password.")
        }
        else {
            dispatch(allActions.getPassword(password))
            navigation.navigate("Signup_6")
        }
    }
    return (
        <View >
            <DiaLogCustom show={show} content={content} showOff={showOff} />
            <Header />
            <Title styleAdd={styles.container4} title1="Choose a password" title2="Create a password with at least 6 characters. It should be something that others couldn't guess"/>
            <View style={{marginTop: 15,paddingHorizontal: 16}} >
                <Text style={{marginBottom: 10}}>New password</Text>
                <TextInput onChangeText={_.debounce((e)=> setPassword(e), 500)} secureTextEntry={true} style={styles.textInput} />
                <Text style={{marginTop: 15}}>
                    By tapping Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notification from use and can opt out at any time.
                </Text>
            </View>
            <View style={styles.container4}>
                <Pressable style={styles.buttonFake} onPress={()=> checkPassword()}>
                    <Text style={styles.textFake}>Next</Text>
                </Pressable>
                <Text style={{marginTop: 15}} onPress={()=> navigation.navigate("Login")}>
                    Already have an account ?
                </Text>
            </View>
        </View>
    )
}
const Email= ()=> {
    const [show, setShow]=useState(false)
    const email= useSelector(state=> state.isemail1)
    const [content, setContent]= useState(()=> "")
    const navigation= useNavigation()
    const dispatch= useDispatch()
    const url= useMemo(()=> ("http://192.168.1.5:4000/email/authentication?code"),[url])
    const validEmail= (email)=> {
        const re= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(email.toLowerCase())
    }
    const showOff= ()=> {
        setShow(false)
    }
    const checkEmail= ()=> {
        if(email== "") {
            setContent("Please don't empty any field")
            setShow(true)

        }
        else if(validEmail(email)=== true) {
            navigation.navigate("Signup_7")
            axios({
                url: url,
                method: "POST",
                data: {
                    email: email
                }      
            })
            
        }       
        else {
            setContent("Email is invalid, please try again")
            setShow(true)
        }
    }
    return (
        <View >
            <DiaLogCustom show={show} content={content} showOff={showOff} />
            <Header />
            <Title styleAdd={styles.container4} title1="Enter your email" title2="Enter you email to signup account. This will help you when you forgot password"/>
            <View style={{marginTop: 15,paddingHorizontal: 16}} >
                <Text style={{marginBottom: 10}}>Enter your email</Text>
                <TextInput onChangeText={_.debounce((e)=> dispatch(allActions.getEmail(e)), 400)} style={styles.textInput} />
                
            </View>
            <View style={styles.container4}>
                <Pressable style={styles.buttonFake} onPress={()=> checkEmail()}>
                    <Text style={styles.textFake}>Next</Text>
                </Pressable>
                
            </View>
        </View>

    )
}
const VerifyUser= ()=> {
    const [code, setCode]= useState()
    const [show, setShow]= useState(false)
    const showOff= ()=> {
        setShow(false)
    }
    const checkCodeVerif= async ()=> {
        await axios({
            url: 'http://192.168.1.5:4000/authentication',
            method: "POST",
            data: {
                code: code
            }
        })
        .then(res=> console.log(res.data))
    }
    const checkVerify= ()=> {
        if(code =="") {
            setShow(true)
        }
        else {

        }
    }
    return (
        <View >
            <DiaLogCustom show={show} showOff={showOff} content="Please dont't empty any fields." />
            <Header />
            <Title styleAdd={styles.container4} title1="Verify accout" title2="We've just sent to your email a code including 6 digits verify, Please check your email and enter code into below filed."/>
            <View style={{marginTop: 15,paddingHorizontal: 16}} >
                <Text style={{marginBottom: 10}}>Enter verify code</Text>
                <TextInput onChangeText={_.debounce((e)=> setCode(e), 200)} style={styles.textInput} />
                
            </View>
            <View style={styles.container4}>
                <Pressable style={styles.buttonFake} onPress={()=> checkVerify()}>
                    <Text style={styles.textFake}>Verify</Text>
                </Pressable>
                
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
            <Stack.Screen name="Signup_6" component={Email} />
            <Stack.Screen name="Signup_7" component={VerifyUser} />

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
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 35
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
        borderColor: 'rgba(0,0,0,0.2)',
        backgroundColor: '#fff'
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
        width: '100%',
        backgroundColor: '#fff'
    },
    stylePicker1: {
        width: '100%',
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.2)",
        borderRadius: 5,
        padding: 10
    },  
    inputRadio: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 5
    },
    container8: {
        position: 'absolute',
        zIndex: 3,
        left: 0,
        marginLeft: 10,
        width: 40,
        height: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container9: {
        width: '30%'
    },
    image2: {
        width: 20,
        height: 20
    },
})