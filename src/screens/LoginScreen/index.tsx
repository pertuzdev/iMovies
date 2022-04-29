import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';

import {styles} from './styles';

import Button from '../../components/Button';
import {useUser} from '../../hooks/useUser';

const LoginScreen = () => {
  const {login} = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnChangeEmail = (text: string) => {
    setEmail(text);
  };

  const handleOnChangePassword = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    console.log(email, password, 'credentials');
    console.log(typeof login, 'loginType');
    login({email, password});
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logWp}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.formWrapper}>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleOnChangeEmail}
            value={email}
            placeholder="Write your email..."
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleOnChangePassword}
            value={password}
            placeholder="Write your password..."
            secureTextEntry={true}
          />
        </View>
      </View>

      <View style={styles.btnWrapper}>
        <Button label="Login" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
