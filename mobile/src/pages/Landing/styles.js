import { StyleSheet  } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9a9a9',
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: "100%",
    height: 200,
    resizeMode: 'contain',
    
  },

  title: {
    fontFamily: 'Raleway_400Regular',
    color: "#3f3f38",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },

  subTitle: {
    fontFamily: 'Manrope_700Bold'
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },

  button: {
    height: 150,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between'
  },

  colorPrimary: {
    backgroundColor: '#f26945',
  },

  colorSecondary: {
    backgroundColor: '#87cefa',
  },

  buttonText: {
    fontFamily: 'Raleway_600SemiBold',
    color: '#FFF',
    fontSize: 18,
  },




});