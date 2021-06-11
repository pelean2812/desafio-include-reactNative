import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function Task(props) {

    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    const [toggleCheckBox3, setToggleCheckBox3] = useState(false)

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

                <Text style={[styles.text, { marginBottom: 14 }]}>CHECKLIST DAS ATIVIDADES</Text>

                <View style={styles.checkBoxItem}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox1}
                        onValueChange={(newValue) => setToggleCheckBox1(newValue)}
                        tintColors={{ true: '#003057', false: '#C4C4C4'  }} />
                    <Text style={[styles.text, { marginLeft: 18 }]}>ATIVIDADE 1</Text>
                </View>

                <View style={styles.checkBoxItem}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox2}
                        onValueChange={(newValue) => setToggleCheckBox2(newValue)}
                        tintColors={{ true: '#003057', false: '#C4C4C4'  }} />
                    <Text style={[styles.text, { marginLeft: 18 }]}>ATIVIDADE 2</Text>
                </View>

                <View style={styles.checkBoxItem}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox3}
                        onValueChange={(newValue) => setToggleCheckBox3(newValue)}
                        tintColors={{ true: '#003057', false: '#C4C4C4' }} />
                    <Text style={[styles.text, { marginLeft: 18 }]}>ATIVIDADE 3</Text>
                </View>

                <View style={styles.progressBar}>
                    <View style={styles.realProgress}>
                        <Text style={styles.progressText}>50%</Text>
                    </View>
                </View>
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
    },
    checkBoxItem: {
        flexDirection: 'row',
        marginLeft: 3,
        marginBottom: 18,
        alignItems: 'center'
    },
    progressBar: {
        backgroundColor: '#333533',
        borderRadius: 13,
        width: 336,
        height: 26,
        marginLeft: -5,
        elevation: 5,
        marginBottom: 20,
        marginTop: 60
    },
    realProgress: {
        backgroundColor: '#FFD343',
        width: 186,
        height: 20,
        borderRadius: 13,
        margin: 3,
        alignItems: 'center'
    },
    progressText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
    }
})