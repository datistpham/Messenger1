import * as React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useNavigation } from '@react-navigation/native'
const Stack= createNativeStackNavigator()
const Tab= createMaterialTopTabNavigator()
function Feed() {
    return (
        <View style={styles.container}>
            <Text>Feed Screen</Text>
        </View>
    )
}
function Notification() {
    return (
        <View style={styles.container}>
            <Text>Notification Screen</Text>
        </View>
    )
}

function Profile() {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
        </View>
    )
}
const ToTabs= ()=> {
    const navigation= useNavigation()
    
    return (
        <View>
            <Button title="to tabs" onPress={()=> navigation.navigate("Tabs")} />
        </View>
    )
}
const Drawer= createDrawerNavigator()
function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Feed">
            <Drawer.Screen
                name="Feed"
                component={Feed}
                options={{ drawerLabel: "Feed" }}
            />
            <Drawer.Screen
                name="Notification"
                component={Notification}
                options={{ drawerLabel: "Notification" }}
            />
            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{ drawerLabel: "Profile" }}
            />
            <Drawer.Screen
                name="Totaba"
                component={ToTabs}
                options={{ drawerLabel: "To tabs" }}
            />
        </Drawer.Navigator>
    )
}
const TabsNavigator= ()=> {
    return (
        <Tab.Navigator
         initialRouteName="Feed"
         screenOptions={{
            tabBarColor: "#2e89ff",
            tabBarLabel: { fontSize: 12 },
         }}
        >
            <Tab.Screen name="Feed" component={Feed} options={{ tabBarLabel: "Feed" }} />
            <Tab.Screen name="Notification" component={Notification} options={{ tabBarLabel: "Notification" }} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: "Profile" }} />

        </Tab.Navigator>
    )
}
const Root= ()=> {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Drawer' component={MyDrawer} />
            <Stack.Screen name='Tabs' component={TabsNavigator} />
        </Stack.Navigator>
    )
}

export default Root

const styles= StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    }
})