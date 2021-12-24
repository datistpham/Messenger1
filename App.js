import React, {StrictMode} from 'react'
import Login from './Components/Login'
import Signup from './Components/Signup'
import {NavigationContainer} from '@react-navigation/native'    
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Redux/Reducer'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const store= createStore(
  rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
)
const Stack= createNativeStackNavigator()
const queryClient= new QueryClient()
export default function App() {
  return (
    <StrictMode>
     <Provider store={store}>
       <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false,gestureEnabled: true}} >
          <Stack.Screen  name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />   
        </Stack.Navigator>
      </NavigationContainer>
      </QueryClientProvider>

     </Provider>
    </StrictMode>
    )
  
}

