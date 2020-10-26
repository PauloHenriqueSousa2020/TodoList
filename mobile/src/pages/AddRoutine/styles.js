import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5'
  },

  containerList: {
    marginTop: -60,
    marginBottom: 250,
    padding: 20
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
    fontSize: 20,
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

  todoButtonPrimary: {
    backgroundColor: '#00afef',
    height: 60,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
  },
  
  todoButtonSecundary: {
    backgroundColor: '#ff0000',
    height: 60,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
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



})