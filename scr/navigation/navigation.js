import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { ContactsList, Details } from '../screens';

const {Navigator,Screen}=createStackNavigator()

const Navigation = () =>{
    return(
        <NavigationContainer>
            <Navigator>
                <Screen 
                    name="contacts"
                    component={ContactsList}
                    options={{
                        headerTitleAlign:'center'
                    }}
                />
                <Screen 
                    name="Details"
                    component={Details}
                    options={{
                        headerTitleAlign:'center'
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}

export default Navigation