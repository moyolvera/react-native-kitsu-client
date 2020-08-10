import { StyleSheet, StyleProp } from 'react-native';

const CommonStyles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  bigFont: {
    fontSize: 18,
  },
  largeFont: {
    fontSize: 20,
  },
  marginTop5: {
    marginTop: 5,
  },
  marginTop10: {
    marginTop: 10,
  },
  marginTop20: {
    marginTop: 20,
  },
  marginTop40: {
    marginTop: 40,
  },
  marginBottom5: {
    marginBottom: 5,
  },
  marginBottom10: {
    marginBottom: 10,
  },
  marginBottom20: {
    marginBottom: 20,
  },
  paddingVertical10: {
    paddingVertical: 10,
  },
  paddingHorizontal10: {
    paddingHorizontal: 10,
  },
  paddingHorizontal20: {
    paddingHorizontal: 20,
  },
  paddingTop10: {
    paddingTop: 10,
  },
  paddingTop20: {
    paddingTop: 20,
  },
  paddingLeft10: {
    paddingLeft: 10,
  },
  padding10: {
    padding: 10,
  },
  padding20: {
    padding: 20,
  },
});

export default CommonStyles;

export function createDynamicStyles<T>(styles?: StyleProp<T>) {
  if (!styles) {
    return {};
  }

  return StyleSheet.create({ styles }).styles as StyleProp<T>;
}
