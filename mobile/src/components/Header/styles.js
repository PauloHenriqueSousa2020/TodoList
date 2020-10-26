import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#a9a9a9'
  },

  topBar:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  topBarTitle: {
    fontFamily: 'Manrope_700Bold',
    color: '#282829',
    fontSize: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  headerText: {
    marginHorizontal: 5,
    fontFamily: "Manrope_700Bold",
    fontSize: 14,
    lineHeight: 27,
    color: '#000',
  },

  headerTitle: {
    fontFamily: 'Manrope_700Bold',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
  },
})
