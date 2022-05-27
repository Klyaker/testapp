import React from "react";
import Main from "./components/Main";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import FullPict from "./components/FullPict";

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="Main"
            component={Main}
            options={
                {
                    title: 'Home', 
                    headerStyle: {backgroundColor: '#7B7B7B', height:70},
                    
                }
            }
            />
            
            <Stack.Screen 
            name="FullPict"
            component={FullPict}
            options={
                {
                    title: 'Information',
                    headerStyle: {backgroundColor: '#7B7B7B', height:70},
                }
            }
            />
        </Stack.Navigator>
    </NavigationContainer>;
}