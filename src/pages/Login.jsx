import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Touchable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.logo} />

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="USUÁRIO" autoCorrect={false}
          onChangeText={user => setUser(user)} />
        <TextInput style={styles.input} placeholder="SENHA" secureTextEntry={true} autoCorrect={false}
          onChangeText={password => setPassword(password)} />
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('createAccount') }}>
            <Text style={styles.btnText}>Cadastro</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={() => {
            if (user == 'admin' && password == 'AdmiN') {
              navigation.navigate('home', {isAdmin: true})
            } else if (user == 'user' && password == 'user'){
              navigation.navigate('home', {isAdmin: false})
            } else {
              alert('Usuário ou senha incorretos')
            }
          }}>
            <Text style={styles.btnText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: 75,
    width: 250,
    height: 231
  },
  form: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  input: {
    backgroundColor: '#FFF',
    color: '#000',
    width: 257,
    height: 45,
    elevation: 5,
    borderRadius: 8,
    marginBottom: 10,
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
    textAlign: 'center'
  },
  buttons: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  btn: {
    backgroundColor: '#002F55',
    borderRadius: 6,
    width: 85,
    height: 30,
    marginVertical: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 43.5,
    elevation: 7
  },
  btnText: {
    color: '#C4C4C4',
    fontFamily: 'Roboto_700Bold',
    fontSize: 12
  }
});
