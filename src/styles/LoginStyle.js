import {StyleSheet} from 'react-native';

const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0d',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 33,
    height: 45,
    marginRight: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  span: {
    color: '#915eff',
  },
  formContainer: {
    marginTop: 30,
  },
  input: {
    backgroundColor: '#0b0b0d',
    padding: 15,
    borderRadius: 50,
    marginBottom: 15,
    color: '#ffffff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#1c1c1e',
  },
  inputFocused: {
    borderColor: '#915eff',
  },

  forgotPassword: {
    color: '#915eff',
    textAlign: 'right',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#915eff',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginStyle;
