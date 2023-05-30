import dev from './dev';
import live from './live';

const configs = { dev, live };

export const getRunTypeConfig = ({ RUN_TYPE }, defaultRunType = 'live') => {
  return configs[RUN_TYPE] || configs[defaultRunType] || {};
};
