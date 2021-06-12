import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import Login from './pages/Login';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import MemberProfile from './pages/MemberProfile';
import Task from './pages/Task';
import CreateTask from './pages/CreateTask';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen options={{
                    headerShown: false
                }} name="login" component={Login} />

                <Stack.Screen name="home" component={Home}
                    options={{
                        title: 'INCLUDE',
                        headerStyle: {
                            backgroundColor: '#003057'
                        },
                        headerTintColor: '#A0A0B2',
                        headerTintStyle: {
                            fontFamily: 'Roboto_700Bold'
                        },
                        headerTitleStyle: {
                            fontSize: 12
                        },
                        headerTitleAlign: 'center',
                        headerLeft: () => (
                            <TouchableOpacity style={{ marginLeft: 34.38, marginHorizontal: 10.92 }}
                                onPress={() => { }}>
                                <Feather name="home" size={27} color="#A0A0B2" />
                            </TouchableOpacity>
                        )
                    }} 
                    />

                <Stack.Screen name="createAccount" component={CreateAccount}
                    options={{
                        title: 'INCLUDE',
                        headerStyle: {
                            backgroundColor: '#003057',
                        },
                        headerTintColor: '#A0A0B2',
                        headerTintStyle: {
                            fontFamily: 'Roboto_700Bold',
                            fontSize: 12
                        },
                        headerTitleStyle: {
                            fontSize: 12
                        },
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            <Text style={{
                                marginHorizontal: 20,
                                color: '#A0A0B2',
                                fontFamily: 'Roboto_300Light',
                                fontSize: 12,
                                marginVertical: 18,
                                marginRight: 25
                            }}>
                                CADASTRO
                            </Text>
                        )
                    }} />

                <Stack.Screen name="memberProfile" component={MemberProfile}
                    options={{
                        title: 'INCLUDE',
                        headerStyle: {
                            backgroundColor: '#003057',
                        },
                        headerTintColor: '#A0A0B2',
                        headerTintStyle: {
                            fontFamily: 'Roboto_700Bold',
                            fontSize: 12
                        },
                        headerTitleAlign: 'center',
                        headerTitleStyle: {
                            fontSize: 12
                        },
                        headerRight: () => (
                            <Text style={{
                                marginRight: 24,
                                marginVertical: 18,
                                fontSize: 12,
                                color: '#A0A0B2',
                                fontFamily: 'Roboto_300Light'
                            }}>
                                MEMBRO
                            </Text>
                        )
                    }}
                />

                <Stack.Screen name="task" component={Task}
                    options={{
                        title: 'INCLUDE',
                        headerStyle: {
                            backgroundColor: '#003057',
                        },
                        headerTintColor: '#A0A0B2',
                        headerTintStyle: {
                            fontFamily: 'Roboto_700Bold',
                        },
                        headerTitleStyle: {
                            fontSize: 12
                        },
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            <Text style={{
                                marginRight: 20,
                                marginVertical: 18,
                                fontSize: 12,
                                color: '#A0A0B2',
                                fontFamily: 'Roboto_300Light'
                            }}>
                                MEMBRO/ADMIN
                            </Text>
                        )
                    }}
                />

                <Stack.Screen name="createTask" component={CreateTask}
                    options={{
                        title: 'INCLUDE',
                        headerStyle: {
                            backgroundColor: '#003057',
                        },
                        headerTintColor: '#A0A0B2',
                        headerTintStyle: {
                            fontFamily: 'Roboto_700Bold',
                        },
                        headerTitleStyle: {
                            fontSize: 12
                        },
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            <Feather style={{ marginLeft: 34.38, marginHorizontal: 10.92 }} name="save" size={26} color="#A0A0B2" />
                        )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;