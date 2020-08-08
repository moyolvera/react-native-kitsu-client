import { StyleSheet, Platform } from 'react-native';
import LOCAL_DIMENSIONS from '../../../constants/dimensions';

const styles = StyleSheet.create({
  headerWrapper: {
    height: Platform.OS === 'ios' ? 45 : 57,
    borderBottomColor: '#e3e3e3',
  },
  leftWrapperForce: {
    maxWidth: 40,
  },
  leftWrapper: {
    width: 40,
  },
  backWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    left: Platform.OS === 'ios' ? -7 : 0,
    color: Platform.OS === 'ios' ? '#147EFB' : '#000',
    fontSize: Platform.OS === 'ios' ? 35 : 24,
  },
  backText: {
    left: -11,
    color: '#147EFB',
  },
  rightText: {
    left: -2,
    color: '#147EFB',
  },
  bodyWrapper: {
    flex: Platform.OS === 'ios' ? 4 : 2,
  },
  inputWrapper: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 30 : 45,
    borderRadius: Platform.OS === 'ios' ? 15 : 3,
    paddingHorizontal: 5,
  },
  inputSearchIcon: {
    fontSize: Platform.OS === 'ios' ? 15 : 20,
    alignSelf: 'center',
    color: '#adadaf',
  },
  input: {
    flex: 1,
    height: Platform.OS === 'ios' ? 30 : 45,
    paddingHorizontal: 5,
  },

  inputClearIcon: {
    fontSize: Platform.OS === 'ios' ? 15 : 20,
    alignSelf: 'center',
    color: '#adadaf',
  },
  searchWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    left: Platform.OS === 'ios' ? -18 : 0,
    color: Platform.OS === 'ios' ? '#147EFB' : '#000',
    fontSize: 24,
  },
  recentWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: '#2b2b2b',
    borderBottomWidth: 1,
  },
  recentIcon: {
    fontSize: 18,
    marginRight: 10,
    color: '#7d7d7d',
  },
  recentText: {
    color: '#4f4f4f',
  },
  itemsWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  recentListWrapper: {
    position: 'absolute',
    top: 0,
    zIndex: 99,
    width: '100%',
    height: LOCAL_DIMENSIONS.HEIGHT - 120,
  },
  itemStyle: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 20,
  },
});

export default styles;
