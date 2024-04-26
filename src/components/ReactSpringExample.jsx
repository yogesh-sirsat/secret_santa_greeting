// ReactSpringMultipleLayers.jsx
import { useSpring, animated } from '@react-spring/web';

const ReactSpringMultipleLayers = () => {
  const props1 = useSpring({
    from: { transform: 'translate3d(0, -20%, 0)' },
    to: { transform: 'translate3d(0, 20%, 0)' },
    config: { mass: 1, tension: 170, friction: 26 },
  });

  const props2 = useSpring({
    from: { transform: 'translate3d(0, -40%, 0)' },
    to: { transform: 'translate3d(0, 40%, 0)' },
    config: { mass: 1, tension: 170, friction: 26 },
  });

  const props3 = useSpring({
    from: { transform: 'translate3d(0, -60%, 0)' },
    to: { transform: 'translate3d(0, 60%, 0)' },
    config: { mass: 1, tension: 170, friction: 26 },
  });

  return (
    <div style={{ height: '300vh', overflow: 'hidden' }}>
      <animated.div
        style={{
          height: '50vh',
          background: '#FFCC80',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2em',
          ...props1,
        }}
      >
        Layer 1 - React Spring Parallax!
      </animated.div>
      <animated.div
        style={{
          height: '50vh',
          background: '#FFA54F',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2em',
          ...props2,
        }}
      >
        Layer 2 - More React Spring Parallax!
      </animated.div>
      <animated.div
        style={{
          height: '50vh',
          background: '#FF7F00',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2em',
          ...props3,
        }}
      >
        Layer 3 - Keep going!
      </animated.div>
    </div>
  );
};

export default ReactSpringMultipleLayers;
