import { Dimensions } from 'react-native';

const LOCAL_DIMENSIONS = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
};

export default LOCAL_DIMENSIONS;
