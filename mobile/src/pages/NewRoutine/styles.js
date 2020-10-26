import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  containerList: {
    marginTop: -60,
    width: "90%",
    alignSelf: 'center'
  },

  todoList: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#e6e6f0",
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },

  todoTitle: {
    fontFamily: 'Manrope_700Bold',
    color: '#32264d',
    fontSize: 18,
    marginLeft: 16,
    marginBottom: 15,
    marginTop: 10
  },

  todoDescription:{ 
    marginHorizontal: 16,
    fontFamily: "Raleway_400Regular",
    fontSize: 14,
    lineHeight: 27,
    color: '#6a6180',
  },

  todoFooter: {
    marginTop: 24,

  },

  todoActivity: {
    fontFamily: 'Raleway_600SemiBold',
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
  },

  todoDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 24,
  },

  todoDetailsText: {
    fontFamily: 'Manrope_400Regular',
    paddingHorizontal: 16,
    fontSize: 16,
  },

  todoButton: {
    backgroundColor: '#00afef',
    height: 60,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  todoButtonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  todoButtonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Raleway_400Regular',
    fontSize: 16,
  },

  inputContainer: {
    width: "90%",
    alignSelf: 'center'
  },

  input: {
    height: 60,
    backgroundColor: '#f2f2f2',
    textShadowColor: '#000',
    marginBottom: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
    fontSize: 16,
  },

  inputSelect: {
    height: 60,
    backgroundColor: '#f2f2f2',
    marginBottom: 8,
    paddingHorizontal: 15,
    paddingTop: 4,
    borderRadius: 8,
  },


})