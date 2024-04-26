import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useSpring, animated } from '@react-spring/web';
import InteractiveItem from './InteractiveItem';
import CentralPerkSofaAnimation from './CentralPerkSofaAnimation';
import PoliceBadgeAnimation from './PoliceBadgeAnimation';
import DundieAwardAnimation from './DundieAwardAnimation';

const LivingRoom = () => {
  // Spring animation for flickering fireplace
  const fireplaceProps = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0.8 },
    loop: { reverse: true },
    config: { duration: 1000 },
  });

  return (
    <ParallaxProvider>
      <div className="living-room-container">
        {/* Background */}
        <div className="background-image"></div>

        {/* Furniture */}
        <div className="furniture">
          {/* Animated Fireplace */}
          <animated.div className="fireplace" style={fireplaceProps}></animated.div>

          {/* Parallax Sofa */}
          <Parallax y={[-20, 20]}>
            <div className="parallax-sofa"></div>
          </Parallax>

          {/* Festive Tree */}
          <Parallax y={[-10, 10]}>
            <div className="festive-tree"></div>
          </Parallax>
        </div>

        {/* Interactive Elements */}
        <InteractiveItem
          item="Central Perk Sofa"
          animation={<CentralPerkSofaAnimation />}
          quote="Could I BE any more comfortable?"
        />
        <InteractiveItem
          item="Police Badge"
          animation={<PoliceBadgeAnimation />}
          quote="Noice!"
        />
        <InteractiveItem
          item="Dundie Award"
          animation={<DundieAwardAnimation />}
          quote="World's Best Boss"
        />
      </div>
    </ParallaxProvider>
  );
};

export default LivingRoom;
