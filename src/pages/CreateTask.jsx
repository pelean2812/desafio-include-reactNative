import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function CreateTask() {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)
    const [items, setItems] = useState([
        { label: 'PONTUALIDADE', value: 'PONTUALIDADE' },
        { label: 'ASSIDUIDADE', value: 'ASSIDUIDADE' },
        { label: 'DENTRO DO PRAZO', value: 'DENTRO DO PRAZO' },
        { label: 'PERSONALIZADO', value: 'PERSONALIZADO' },
    ])

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
                <DropDownPicker
                    placeholder="CATEGORIA"
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    dropDownContainerStyle={{
                        backgroundColor: "#FFF",
                        borderWidth: 0,
                        marginVertical: 10,
                        fontFamily: 'Roboto_400Regular',
                        fontSize: 12,
                        textAlign: 'center',
                        width: 150
                    }}
                    textStyle={{
                        fontFamily: 'Roboto_400Regular',
                        fontSize: 12,
                        textAlign: 'center',
                        color: '#9E9E9E'
                    }}
                    style={[styles.inputs, { width: 150, height: 38 }]}
                />
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
    inputs: {
        backgroundColor: '#FFF',
        color: '#000',
        elevation: 5,
        borderRadius: 8,
        height: 38,
        marginBottom: 11,
        marginTop: 11,
        fontFamily: 'Roboto_400Regular',
        fontSize: 12,
        textAlign: 'center',
        borderWidth: 0
    },
    prizes: {
        marginLeft: 35,
        marginBottom: 10,
        zIndex: -1
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