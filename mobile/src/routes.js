import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"
import Casos from "./pages/Casos";
import Detalhe from "./pages/Detalhes";
const AppStack = createStackNavigator();

function Routes() {
    return( 
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown:false}}>
                <AppStack.Screen name='casos' component={Casos}/>
                <AppStack.Screen name='detalhe' component={Detalhe}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
