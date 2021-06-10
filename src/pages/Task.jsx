import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Task(props) {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.task}>
                <Text style={[styles.text, { marginTop: 33, marginBottom: 9 }]}>TÍTULO</Text>

                <View style={styles.taskDescription}>
                    <Text style={styles.taskDescriptionText}>DESCRIÇÃO</Text>
                </View>

                <Text style={[styles.text, { marginBottom: 18 }]}>MEMBROS ENVOLVIDOS</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.taskMembers}>
                        <Text style={styles.taskDescriptionText}>AVATAR</Text>
                    </View>

                    <View style={styles.taskMembers}>
                        <Text style={styles.taskDescriptionText}>AVATAR</Text>
                    </View>

                    <View style={styles.taskMembers}>
                        <Text style={styles.taskDescriptionText}>AVATAR</Text>
                    </View>

                    <View style={styles.taskMembers}>
                        <Text style={styles.taskDescriptionText}>AVATAR</Text>
                    </View>

                </ScrollView>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECECEC'
    },
    task: {
        marginLeft: 35,
        marginRight: 40
    },
    text: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 20,
        marginLeft: 3,
        color: '#003057'
    },
    taskDescription: {
        backgroundColor: '#C4C4C4',
        borderRadius: 8,
        elevation: 5,
        width: '100%',
        height: 130,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    taskDescriptionText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        color: '#333533'
    },
    taskMembers: {
        width: 85,
        height: 85,
        borderRadius: 85,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        marginLeft: 10,
        marginRight: 20,
        marginBottom: 34
    }
})