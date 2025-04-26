import { Dimensions, StatusBar, StyleSheet,Platform } from 'react-native';
import { Colors } from '../../constants/colors';
import { Fontfamily } from '../../constants/fontFamily'

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 44 : StatusBar.currentHeight || 0;

export const styles = StyleSheet.create({
  vMain: {
    flex: 1,
    backgroundColor: 'white',
  },
  vScroll: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  vLogo: {
    backgroundColor: '#cccccc',
    height: 363 - STATUSBAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgPlie: {
    height: 255,
    width: 146,
    paddingTop:-20,

  },
  vLoginFields: {
    marginHorizontal: 46,
    marginTop: 38,
  },
  lblEmail: {
    fontFamily: Fontfamily.robotoregular,
    fontSize: 16,
    color: 'Colors.black',
  },
  vEmail: {
    marginTop: 4,
    borderRadius: 4,
    backgroundColor: 'white',
    shadowColor: '#000000',
    elevation: 7,
    flexDirection: 'row',
    height: 32,
  },
  vEmailTextInput: {
    backgroundColor: 'white',
    borderRadius: 4,
    flex: 1,
    margin: 0,
    padding: 0,
    height: 32,
    paddingHorizontal: 12,
    color: 'Colors.black',
  },
  lblPassword: {
    fontFamily: Fontfamily.robotoregular,
    fontSize: 16,
    color: 'Colors.black',
    marginTop: 15,
  },
  vPwd: {
    marginTop: 4,
    borderRadius: 4,
    backgroundColor: 'white',
    shadowColor: '#000000',
    elevation: 7,
    flexDirection: 'row',
    height: 32,
    gap: 4,
    alignItems: 'center',
  },
  vPwdTextInput: {
    backgroundColor: 'white',
    borderRadius: 4,
    flex: 1,
    margin: 0,
    padding: 0,
    height: 32,
    paddingHorizontal: 12,
    color: 'Colors.black',
  },
  imgEye: {
    height: 16,
    width: 16,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnForgotPwd: {
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  txtForgotPwd: {
    color: Colors.gray,
    fontFamily: Fontfamily.robotoregular,
    fontSize: 12,
  },
  btnSignIn: {
    height: 35,
    alignSelf: 'flex-end',
    marginTop: 27,
    marginRight: 4,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: '#21D393',
    borderRadius: 4,
  },
  txtSignIn: {
    color: 'white',
    fontSize: 15,
    fontFamily: Fontfamily.robotomedium
  },
  btnSignUp: {
    marginTop: 15,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  txtNotAMember: {
    fontSize: 12,
    color: '#000000',
    fontFamily: Fontfamily.robotoregular,
  },
  txtSignUp: {
    textDecorationLine: 'underline',
    fontSize: 12,
    color: '#000000',
    fontFamily: Fontfamily.robotoregular,
  },
  lineContinueView: {
    marginHorizontal: 37,
    marginTop: 64,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  lineView: {
    borderColor: Colors.darkGrayLine,
    backgroundColor: Colors.darkGrayLine,
    flex: 0.5,
    borderWidth: 0.5,
    height: 1,

  },
  orSignInWith: {
    color: Colors.darkGrayLine,
    fontFamily: Fontfamily.robotoregular,
    fontSize: 12,
    marginHorizontal: 5,
  },
  socialiocn: {
    height: 56,
    width: 56,
    resizeMode: 'contain'
  },
  socialview: {
    flexDirection: 'row',
    marginTop: 39,
    justifyContent: 'center',
    gap: 18
  },
  guesttext: {
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 10,
    fontFamily: Fontfamily.robotoregular,
    fontSize: 12,
    color: Colors.gray
  }
});