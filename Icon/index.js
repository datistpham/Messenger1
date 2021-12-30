import ChevronLeft from '../assets/chervon-left.png'
import { Image, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const IconChevronLeft= ()=> {
    const navigation= useNavigation()
    return (
        <Pressable onPress={()=> navigation.goBack()} style={styles.container}>
            <Image source={ChevronLeft} style={styles.image} />
        </Pressable>
    )
}
export const MessengerIcon= ()=> {
    return (
        <MaterialCommunityIcons name="facebook-messenger" size={24} color="#2e89ff" />
    )
}
export const GoogleIcon= ()=> {
    return (
        <MaterialCommunityIcons name="google" size={24} />
    )
}
export const FacebookIcon= ()=> {
    return (
        <MaterialCommunityIcons name="facebook" size={24} color="#2e89ff" />
    )
}
export const GithubIcon= ()=> {
    return (
        <MaterialCommunityIcons name="github" size={24} />
    )
}
const styles= StyleSheet.create({
    
})
export default IconChevronLeft