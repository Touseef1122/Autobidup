import PropTypes from 'prop-types';
import { LazyMotion } from 'framer-motion';
import { features } from './features';

// ----------------------------------------------------------------------

const loadFeatures = () => import({features}).then((res) => res.default);

MotionLazyContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function MotionLazyContainer({ children }) {
  return (
    <LazyMotion strict features={loadFeatures}>
      {children}
    </LazyMotion>
  );
}
