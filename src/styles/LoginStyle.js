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
    top: 12,
  },
  crypto: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    top: 12,
  },
  text: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    bottom: 60,
  },
  span: {
    color: '#915eff',
  },
  formContainer: {
    marginTop: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#1c1c1e',
    marginBottom: 15,
    paddingHorizontal: 15,
    position: 'relative',
    top: 30,
  },
  inputContainerFocused: {
    borderColor: '#915eff',
    borderWidth: 2,
  },
  input: {
    flex: 1,
    color: '#ffffff',
    fontSize: 16,
    paddingVertical: 15,
  },
  icon: {
    marginRight: 10,
  },

  forgotPassword: {
    color: '#915eff',
    textAlign: 'right',
    marginBottom: 20,
    top: 30,
  },
  button: {
    backgroundColor: '#915eff',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    top: 190,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginStyle;
