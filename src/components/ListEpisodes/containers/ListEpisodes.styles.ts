import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flexDirection: 'row',
  },
  rowWrapper: {
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconWrapper: {
    width: 50,
    alignItems: 'center',
  },
  list: {
    height: 250,
    borderWidth: 1,
  },
  seasonEpisodeWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'flex-end',
  },
  titleWrapper: {
    flex: 4,
  },
});

export default styles;
