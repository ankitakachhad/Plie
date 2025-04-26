import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {styles} from './styles';
import { Fontfamily } from '../../constants/fontFamily'
import { Colors } from '../../constants/colors';
import axios from 'axios'; // <-- Important!
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation=useNavigation();
  const emailRef = useRef<any>(null);
  const pwdRef = useRef<any>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPass, setShowPass] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleOnChangeEmail = (email: string) => {
    setEmail(email.replace(/\s/g, ''));
  };
  const handleOnChangePwd = (pwd: string) => {
    setPassword(pwd.replace(/\s/g, ''));
  };
  const onSignIn = async () => {
    console.log('Login Called...');
    const emailRegex = /\S+@\S+\.\S+/;
  
    if (email.trim() === '') {
      Alert.alert('Alert', 'Please enter email');
      return;
    } else if (!emailRegex.test(email)) {
      Alert.alert('Alert', 'Please enter a valid email');
      return;
    } else if (password.trim() === '') {
      Alert.alert('Alert', 'Please enter password');
      return;
    }
  
    try {
      setLoading(true);
  
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
  
      const response = await axios.post(
        'http://3.7.81.243/projects/plie-api/public/api/login',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      console.log('Full Response:', response.data);
  
      if (response.data?.success === true) {
        console.log('Login Success:', response.data);
        navigation.navigate('TabNavigator');
      } else {
        console.log('Login Failed:', response.data);
        Alert.alert('Login Failed', response.data?.message || 'Invalid credentials');
      }
  
    } catch (error: any) {
      console.log('Login Failed Catch Block');
      console.log('Error Object:', JSON.stringify(error, null, 2));
  
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        'Something went wrong. Please try again.';
  
      Alert.alert('Error', errorMessage);
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <ScrollView style={styles.vMain}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />

      <ScrollView contentContainerStyle={styles.vScroll}>
        <View style={styles.vLogo}>
          <Image source={require('../../assets/images/plie.png')} style={styles.imgPlie}/>
      
        </View>

        <View style={styles.vLoginFields}>
          <Text style={styles.lblEmail}>Email</Text>
          <View style={styles.vEmail}>
            <TextInput
              style={styles.vEmailTextInput}
              placeholder="email@email.com"
              cursorColor={'#828282'}
              ref={emailRef}
              value={email}
              onChangeText={handleOnChangeEmail}
              returnKeyType="next"
              keyboardType="email-address"
              maxLength={50}
              placeholderTextColor={'#828282'}
              onSubmitEditing={() => pwdRef.current.focus()}
              blurOnSubmit={false}
            />
          </View>

          <Text style={styles.lblPassword}>Password</Text>
          <View style={styles.vPwd}>
            <TextInput
              style={styles.vPwdTextInput}
              placeholder="Password"
              cursorColor={'#828282'}
              ref={pwdRef}
              value={password}
              onChangeText={handleOnChangePwd}
              secureTextEntry={!showPass}
              returnKeyType="done"
              keyboardType="default"
              maxLength={20}
              placeholderTextColor={'#828282'}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setShowPass(!showPass)}
            >
              <Image
                source={
                  showPass
                    ? require('../../assets/images/view.png')
                    : require('../../assets/images/hide.png')
                }
                style={styles.imgEye}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btnForgotPwd} activeOpacity={0.7}>
            <Text style={styles.txtForgotPwd}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnSignIn}
            onPress={onSignIn}
            disabled={loading}
          >
            <Text style={styles.txtSignIn}>
              {loading ? 'Signing In...' : 'Sign In'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSignUp}>
            <Text style={styles.txtNotAMember}>
              Not a member?{' '}
              <Text style={styles.txtSignUp}>Sign Up Here</Text>
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lineContinueView}>
          <View style={styles.lineView}></View>
          <Text style={styles.orSignInWith}>or Sign In with:</Text>
          <View style={styles.lineView}></View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 39,
            justifyContent: 'center',
            gap: 18,
          }}
        >
          <Image
            source={require('../../assets/images/google.png')}
            style={styles.socialiocn}
          />
          <Image
            source={require('../../assets/images/ios.png')}
            style={styles.socialiocn}
          />
          <Image
            source={require('../../assets/images/facebook.png')}
            style={styles.socialiocn}
          />
        </View>

        <Text
          style={{
            alignSelf: 'flex-end',
            marginTop: 20,
            marginRight: 10,
            fontFamily: Fontfamily.robotoregular,
            fontSize: 12,
            color: Colors.gray,
          }}
        >
          Enter as Guest
        </Text>
      </ScrollView>
    </ScrollView>
  );
};

export default Login;
