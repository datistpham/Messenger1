import ChevronLeft from '../assets/chervon-left.png'
import { Image, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const IconChevronLeft= ()=> {
    const navigation= useNavigation()
    return (
        <Pressable onPress={()=> navigation.goBack()} style={styles.container}>
            <Image source={ChevronLeft} style={styles.image} />
        </Pressable>
    )
}
const styles= StyleSheet.create({
    
})
export default IconChevronLeft