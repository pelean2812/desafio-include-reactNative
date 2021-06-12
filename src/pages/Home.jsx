import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput, StyleSheet, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Home(props) {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false)

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)
    const [items, setItems] = useState([
        { label: 'PRESIDÊNCIA', value: 'PRESIDÊNCIA' },
        { label: 'ADM/FIN', value: 'ADM/FIN' },
        { label: 'PROJETOS', value: 'PROJETOS' },
        { label: 'GESTÃO DE PESSOAS', value: 'GESTÃO DE PESSOAS' },
    ])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#ECECEC' }}>
            <TouchableOpacity style={styles.filter} onPress={() => setModalVisible(true)}>
                <Feather name="filter" size={35} color="#545050" />
            </TouchableOpacity>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible); }}>
                <View style={styles.modalView}>
                    <Text style={styles.textModal}>VISUALIZAR POR: </Text>

                    <DropDownPicker
                        placeholder="DIRETORIA"
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
                            width: 132,
                            marginLeft: 24
                        }}
                        textStyle={{
                            fontFamily: 'Roboto_400Regular',
                            fontSize: 12,
                            textAlign: 'center',
                            color: '#9E9E9E'
                        }}
                        style={[styles.inputs, { width: 132, height: 38, marginLeft: 24 }]}
                    />

                    <TouchableOpacity style={styles.closeModal}
                    onPress={()=> setModalVisible(!modalVisible)}>
                        <Feather name="check" size={16} color="#333533" />
                    </TouchableOpacity>
                </View>
            </Modal>

            <TouchableOpacity style={[styles.member, { marginTop: -10 }]}
                onPress={() => {
                    navigation.navigate('memberProfile',
                        { nome: 'Jefferson', diretoria: 'Projetos', pontos: 3250, admin: props.route.params.isAdmin })
                }}>
                <Text style={styles.memberCount}>1º</Text>

                <View style={styles.image}>
                    <Text style={styles.textImage}>AVATAR</Text>
                </View>

                <View style={styles.nameScore}>
                    <Text style={styles.memberName}>Jefferson</Text>
                    <Text style={styles.memberPoints}>3.250 pts</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.member}
                onPress={() => {
                    navigation.navigate('memberProfile',
                        { nome: 'NOME', diretoria: 'DIRETORIA', pontos: 'PONTUACAO', admin: props.route.params.isAdmin })
                }}>
                <Text style={styles.memberCount}>2º</Text>

                <View style={styles.image}>
                    <Text style={styles.textImage}>AVATAR</Text>
                </View>

                <View style={styles.nameScore}>
                    <Text style={styles.memberName}>NOME</Text>
                    <Text style={styles.memberPoints}>PONTUAÇÃO</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.member}
                onPress={() => {
                    navigation.navigate('memberProfile',
                        { nome: 'NOME', diretoria: 'DIRETORIA', pontos: 'PONTUACAO', admin: props.route.params.isAdmin })
                }}>
                <Text style={styles.memberCount}>3º</Text>

                <View style={styles.image}>
                    <Text style={styles.textImage}>AVATAR</Text>
                </View>

                <View style={styles.nameScore}>
                    <Text style={styles.memberName}>NOME</Text>
                    <Text style={styles.memberPoints}>PONTUAÇÃO</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.member}
                onPress={() => {
                    navigation.navigate('memberProfile',
                        { nome: 'NOME', diretoria: 'DIRETORIA', pontos: 'PONTUACAO', admin: props.route.params.isAdmin })
                }}>
                <Text style={styles.memberCount}>4º</Text>

                <View style={styles.image}>
                    <Text style={styles.textImage}>AVATAR</Text>
                </View>

                <View style={styles.nameScore}>
                    <Text style={styles.memberName}>NOME</Text>
                    <Text style={styles.memberPoints}>PONTUAÇÃO</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.member}
                onPress={() => {
                    navigation.navigate('memberProfile',
                        { nome: 'NOME', diretoria: 'DIRETORIA', pontos: 'PONTUACAO', admin: props.route.params.isAdmin })
                }}>
                <Text style={styles.memberCount}>5º</Text>

                <View style={styles.image}>
                    <Text style={styles.textImage}>AVATAR</Text>
                </View>

                <View style={styles.nameScore}>
                    <Text style={styles.memberName}>NOME</Text>
                    <Text style={styles.memberPoints}>PONTUAÇÃO</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.member}
                onPress={() => {
                    navigation.navigate('memberProfile',
                        { nome: 'NOME', diretoria: 'DIRETORIA', pontos: 'PONTUACAO', admin: props.route.params.isAdmin })
                }}>
                <Text style={styles.memberCount}>6º</Text>

                <View style={styles.image}>
                    <Text style={styles.textImage}>AVATAR</Text>
                </View>

                <View style={styles.nameScore}>
                    <Text style={styles.memberName}>NOME</Text>
                    <Text style={styles.memberPoints}>PONTUAÇÃO</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.member}
                onPress={() => {
                    navigation.navigate('memberProfile',
                        { nome: 'NOME', diretoria: 'DIRETORIA', pontos: 'PONTUACAO', admin: props.route.params.isAdmin })
                }}>
                <Text style={styles.memberCount}>7º</Text>

                <View style={styles.image}>
                    <Text style={styles.textImage}>AVATAR</Text>
                </View>

                <View style={styles.nameScore}>
                    <Text style={styles.memberName}>NOME</Text>
                    <Text style={styles.memberPoints}>PONTUAÇÃO</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.member}
                onPress={() => {
                    navigation.navigate('memberProfile',
                        { nome: 'NOME', diretoria: 'DIRETORIA', pontos: 'PONTUACAO' })
                }}>
                <Text style={styles.memberCount}>8º</Text>

                <View style={styles.image}>
                    <Text style={styles.textImage}>AVATAR</Text>
                </View>

                <View style={styles.nameScore}>
                    <Text style={styles.memberName}>NOME</Text>
                    <Text style={styles.memberPoints}>PONTUAÇÃO</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    filter: {
        marginTop: 27.75,
        marginLeft: 313.5
    },
    member: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 35,
        marginBottom: 20,
    },
    memberCount: {
        fontFamily: 'Roboto_400Regular',
        marginLeft: 0,
        fontSize: 24
    },
    image: {
        width: 85,
        height: 85,
        borderRadius: 85,
        marginLeft: 8,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5
    },
    textImage: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 12
    },
    nameScore: {
        marginLeft: 17,
        fontFamily: 'Roboto_400Regular'
    },
    memberName: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 20,
        color: '#003057'
    },
    memberPoints: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        color: '#003057'
    },
    modalView: {
        width: 300,
        height: 150,
        backgroundColor: '#ECECEC',
        alignSelf: 'center',
        marginTop: 77,
        borderRadius: 6,
        elevation: 5
    },
    textModal: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
        marginTop: 26,
        marginLeft: 24,
        marginBottom: 11
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
    closeModal:{
        marginLeft: 261
    }
})