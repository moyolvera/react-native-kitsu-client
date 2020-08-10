import React, { useState, useEffect } from 'react';
import Animated, { Easing } from 'react-native-reanimated';
import styles from '../containers/SliderPlaceholder.styles';

function SliderPlaceholderItem() {
  const [animation] = useState(new Animated.Value(1));

  const handleAnimation = () => {
    Animated.timing(animation, {
      easing: Easing.linear,
      toValue: 0.2,
      duration: 1000,
    }).start(() => {
      Animated.timing(animation, {
        easing: Easing.linear,
        toValue: 1,
        duration: 1000,
      }).start();
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleAnimation();
    }, 2100);
    return () => clearInterval(interval);
  }, []);

  return <Animated.View style={[styles.item, { opacity: animation }]} />;
}

export default SliderPlaceholderItem;
