import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';

export default function Home(props) {

    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#ECECEC' }}>
            <TouchableOpacity style={styles.filter}>
                <Feather name="filter" size={35} color="#545050" />
            </TouchableOpacity>

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
    }
})