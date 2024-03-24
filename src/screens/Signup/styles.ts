import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 32,
  },
  heading: {
    fontSize: 24,
    color: '#000',
    marginBottom: 32,
    alignSelf: 'center',
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 8,
    width: Dimensions.get('screen').width * 0.9,
    marginBottom: 8,
  },
  submitButton: {
    padding: 12,
    marginTop: 16,
    borderRadius: 10,
    backgroundColor: '#0d94b9',
    alignSelf: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
