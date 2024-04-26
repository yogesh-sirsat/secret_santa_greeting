// PoliceBadgeAnimation.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const PoliceBadgeAnimation = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'rotate(-45deg) scale(0)' },
    to: { opacity: 1, transform: 'rotate(0deg) scale(1)' },
  });

  return <animated.div style={props}>Police Badge Animation</animated.div>;
};

export default PoliceBadgeAnimation;
