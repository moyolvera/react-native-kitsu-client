import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 160,
    height: 240,
  },
  imageWrapper: {
    width: 160,
    height: 240,
    backgroundColor: 'gray',
  },
  synopsisWrapper: {
    marginVertical: 30,
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  starWrapper: {
    width: 50,
    alignItems: 'flex-end',
  },
});

export default styles;
