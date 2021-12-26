import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

function Feed() {
    return (
        <View style={styles.container}>
            <Text>Feed Screen</Text>
        </View>
    )
}
function Notifications() {
    return (
        <View style={styles.container}>
            <Text>Notifications Screen</Text>
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
                name="Notifications"
                component={Notifications}
                options={{ drawerLabel: "Notifications" }}
            />
            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{ drawerLabel: "Profile" }}
            />
        </Drawer.Navigator>
    )
}

export default MyDrawer
const styles= StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    }
})