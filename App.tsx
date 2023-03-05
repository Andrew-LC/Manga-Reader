import React from "react";
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Box, Text, Image, Input, HStack } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./screens/home";
import Browse from "./screens/browse";


function Extensions() {
    return (
        <Box mt="1" p="4" background="red">
            <StatusBar backgroundColor="purple" />
            <Input placeholder="Search Extension" />
        </Box>
    );
}

const Tab = createBottomTabNavigator();

function CustomHeader({ value }) {
    return (
        <HStack>
            <Text fontWeight="600" fontSize="25" color="white">{value}</Text>
        </HStack>
    );
}


export default function App() {
    return (
        <NavigationContainer>
            <NativeBaseProvider>
                <Tab.Navigator screenOptions={{
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: "#2b2b2b"
                    },
                    headerTintColor: "#f3e7e9"
                }}>
                    <Tab.Screen name="Library"
                        component={Home}
                        options={{ headerTitle: (props) => <CustomHeader {...props} value="Library" /> }}></Tab.Screen>
                    <Tab.Screen name="Browse"
                        component={Browse}
                        options={{ headerTitle: (props) => <CustomHeader {...props} value="Browse" /> }}></Tab.Screen>
                </Tab.Navigator>
            </NativeBaseProvider>
        </NavigationContainer>
    );
}
