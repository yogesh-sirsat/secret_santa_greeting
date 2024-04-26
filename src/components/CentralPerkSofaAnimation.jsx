// CentralPerkSofaAnimation.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const CentralPerkSofaAnimation = () => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  });

  return <animated.div style={props}>Central Perk Sofa Animation</animated.div>;
};

export default CentralPerkSofaAnimation;
