import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function CreateTask() {
    return (
        <View style={styles.container}>
            <View style={styles.task}>
                <TextInput placeholder="TÍTULO" placeholderTextColor="#003057" style={[styles.text, { marginTop: 33, marginBottom: 11 }]} />
                <View style={styles.taskDescription}>
                    <TextInput placeholder="DESCRIÇÃO" multiline placeholderTextColor="#333533" style={styles.taskDescriptionText} />
                </View>
            </View>

            <View style={styles.addMembers}>
                <Text style={[styles.text, { marginBottom: 11 }]}>ADICIONAR MEMBRO(s)</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={styles.taskMembers}>
                        <Text style={styles.textBall}>AVATAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.taskMembers}>
                        <Text style={styles.textBall}>AVATAR</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>

            <View style={styles.points}>
                <Text style={[styles.text, { marginBottom: 11 }]}>PONTUAÇÃO</Text>
            </View>

            <View style={styles.prizes}>
                <Text style={[styles.text, { marginBottom: 11 }]}>SELO(s)</Text>

                <TouchableOpacity style={styles.prizeAdd}>
                    <Text style={[styles.text, { fontSize: 24, marginLeft: 0 }]}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 20,
        marginLeft: 3,
        color: '#003057'
    },
    textBall: {
        fontSize: 12,
        marginLeft: 0,
        color: '#333533'
    },
    task: {
        marginLeft: 35,
        marginRight: 40,
        marginBottom: 15
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
        color: '#333533',

    },
    addMembers: {
        marginLeft: 35
    },
    taskMembers: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        marginRight: 13,
        marginLeft: 2,
        marginBottom: 17
    },
    points: {
        marginLeft: 35,
        marginBottom: 15
    },
    prizes: {
        marginLeft: 35,
        marginBottom: 10
    },
    prizeAdd: {
        width: 55,
        height: 55,
        borderColor: '#003057',
        borderWidth: 1,
        borderRadius: 55,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2,
    }
});