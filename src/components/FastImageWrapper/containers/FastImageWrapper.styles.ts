import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#e0e0e0',
    marginRight: 10,
  },
  titleItemWrapper: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    width: '100%',
  },
  gradient: {
    flex: 1,
    paddingBottom: 4,
    paddingTop: 42,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    width: '100%',
  },
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    fontSize: 34,
    color: '#fff',
    alignSelf: 'center',
  },
});

export default styles;
