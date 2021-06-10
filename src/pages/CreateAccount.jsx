import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native'

export default function CreateAccount() {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.twoItemsForm}>
                <View style={styles.nameForm}>
                    <Text style={styles.labels}>NOME</Text>
                    <TextInput style={[styles.inputs, { width: 132, height: 43 }]} autoCorrect={false} onChangeText={() => { }} />
                </View>

                <View style={styles.nameForm}>
                    <Text style={styles.labels}>SOBRENOME</Text>
                    <TextInput style={[styles.inputs, { width: 132, height: 43 }]} autoCorrect={false} onChangeText={() => { }} />
                </View>
            </View>

            <View style={styles.userDataForm}>
                <Text style={styles.labels}>USUÁRIO</Text>
                <TextInput style={styles.inputs} autoCorrect={false} onChangeText={() => { }} />
                <Text style={styles.labels}>EMAIL</Text>
                <TextInput style={styles.inputs} autoCorrect={false} onChangeText={() => { }} />
                <Text style={styles.labels}>SENHA</Text>
                <TextInput style={styles.inputs} autoCorrect={false} onChangeText={() => { }} />
            </View>

            <View style={[styles.twoItemsForm, { marginTop: 0, marginBottom: 12 }]}>
                <View style={styles.nameForm}>
                    <Text style={styles.labels}>DIRETORIA</Text>
                    <TextInput style={[styles.inputs, { width: 132, height: 43 }]} autoCorrect={false} onChangeText={() => { }} />
                </View>

                <View style={styles.nameForm}>
                    <Text style={styles.labels}></Text>
                    <TextInput placeholder="CARGO" style={[styles.inputs, { width: 132, height: 43 }]} autoCorrect={false} onChangeText={() => { }} />
                </View>
            </View>

            <View style={styles.line}>
                <Text style={{ alignSelf: 'flex-end', marginBottom: 10 }}>+ DIRETORIA</Text>
            </View>

            <View style={styles.final}>
                <Text style={styles.finalText}>Administrador</Text>

                <TouchableOpacity style={[styles.btn, { alignSelf: 'center' }]} onPress={() => { }}>
                    <Text style={styles.btnText}>ENVIAR</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECECEC',
        flex: 1
    },
    twoItemsForm: {
        justifyContent: 'space-around',
        marginTop: 27,
        marginBottom: 11,
        marginHorizontal: 23,
        flexDirection: 'row'
    },
    inputs: {
        backgroundColor: '#FFF',
        color: '#000',
        elevation: 5,
        borderRadius: 6,
        height: 38,
        marginBottom: 11,
        marginTop: 11,
        fontFamily: 'Roboto_400Regular',
        fontSize: 12,
        textAlign: 'center'
    },
    labels: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        color: '#333533'
    },
    userDataForm: {
        marginHorizontal: 44,
        marginBottom: 12,
    },
    line: {
        borderBottomColor: 'white',
        borderBottomWidth: 1.5,
        width: 330,
        alignSelf: 'center'
    },
    final: {
        marginTop: 23
    },
    finalText:{
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        marginLeft: 45.4,
    },
    btn: {
        backgroundColor: '#002F55',
        borderRadius: 6,
        width: 85,
        height: 30,
        marginTop: 37,
        marginBottom: 20,
        paddingHorizontal: 0,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 7
    },
    btnText: {
        color: '#C4C4C4',
        fontFamily: 'Roboto_700Bold',
        fontSize: 12
    }
})