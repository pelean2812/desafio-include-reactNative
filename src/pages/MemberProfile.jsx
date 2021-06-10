import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';

export default function MemberProfile(props) {
    
    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false} backgroundColor={'#ECECEC'} style={styles.container}>
            <View style={styles.profile}>
                <TouchableOpacity>
                    <View style={styles.image}>
                        <Text style={styles.imageText}>AVATAR</Text>
                        <Feather style={styles.editIcon} name="edit-3" size={24} color="black" />
                    </View>
                </TouchableOpacity>

                <View style={styles.text}>
                    <Text style={styles.profileText}>{props.route.params.nome}</Text>
                    <Text style={styles.profileText}>{props.route.params.diretoria}</Text>
                    <Text style={styles.profileText}>{props.route.params.pontos}</Text>
                </View>
            </View>

            <View style={styles.line}></View>

            <View>
                <Text style={styles.textSection}>SELOS</Text>

                <View style={styles.prizes}>
                    <Image style={styles.prizeImage} source={require('../images/prize1.png')} />
                    <Image style={styles.prizeImage} source={require('../images/prize2.png')} />
                </View>
            </View>

            <View style={styles.line}></View>

            <View style={styles.tasks}>
                <Text style={[styles.textSection, { marginTop: 14, marginBottom: 30 }]}>TAREFAS</Text>

                <TouchableOpacity style={styles.task} onPress={()=>{navigation.navigate('task')}}>
                    <View style={styles.taskTitleData}>
                        <Text style={styles.taskText}>TÍTULO</Text>
                        <Text style={styles.taskText}>DATA</Text>
                    </View>

                    <Text style={[styles.taskText, { marginLeft: 17, marginBottom: 19 }]}>DESCRIÇÃO</Text>

                    <View style={styles.progressBar}>
                        <View style={styles.realProgress}>
                            <Text style={styles.progressText}>12%</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.task}>
                    <View style={styles.taskTitleData}>
                        <Text style={styles.taskText}>TÍTULO</Text>
                        <Text style={styles.taskText}>DATA</Text>
                    </View>

                    <Text style={[styles.taskText, { marginLeft: 17, marginBottom: 19 }]}>DESCRIÇÃO</Text>

                    <View style={styles.progressBar}>
                        <View style={styles.realProgress}>
                            <Text style={styles.progressText}>12%</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.task}>
                    <View style={styles.taskTitleData}>
                        <Text style={styles.taskText}>TÍTULO</Text>
                        <Text style={styles.taskText}>DATA</Text>
                    </View>

                    <Text style={[styles.taskText, { marginLeft: 17, marginBottom: 19 }]}>DESCRIÇÃO</Text>

                    <View style={styles.progressBar}>
                        <View style={styles.realProgress}>
                            <Text style={styles.progressText}>12%</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profile: {
        marginTop: 36,
        marginBottom: 11,
        marginLeft: 56,
        alignItems: 'center',
        flexDirection: 'row'
    },
    imageText: {
        fontFamily: 'Roboto_400Regular',
        marginTop: 45
    },
    editIcon: {
        alignSelf: 'flex-start',
        marginTop: 20,
        marginLeft: 8
    },
    profileText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        color: '#003057'
    },
    text: {
        marginHorizontal: 30
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    line: {
        borderBottomColor: 'rgba(0, 48, 87, 0.6)',
        borderBottomWidth: 1,
        width: 315,
        alignSelf: 'center'
    },
    textSection: {
        marginTop: 11,
        color: '#003057',
        fontSize: 20,
        marginLeft: 59,
        marginBottom: 19
    },
    prizes: {
        flexDirection: 'row',
        marginLeft: 59,
        marginTop: 19,
        marginBottom: 23
    },
    prizeImage: {
        marginRight: 15,
        width: 55,
        height: 55
    },
    task: {
        width: 300,
        height: 130,
        backgroundColor: '#C4C4C4',
        borderRadius: 8,
        alignSelf: 'center',
        elevation: 5,
        marginBottom: 20
    },
    taskTitleData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 17,
        marginTop: 14,
        marginBottom: 13
    },
    taskText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
    },
    progressBar: {
        backgroundColor: '#333533',
        borderRadius: 13,
        width: 260,
        height: 26,
        marginLeft: 21,
        elevation: 5,
    },
    realProgress: {
        backgroundColor: '#FFD343',
        width: 51,
        height: 20,
        borderRadius: 13,
        margin: 3,
        alignItems: 'center'
    },
    progressText: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 14,
    },
});