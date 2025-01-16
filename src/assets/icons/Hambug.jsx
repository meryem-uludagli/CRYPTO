import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const Hambug = props => (
  <Svg
    width={39}
    height={38}
    top={8}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8h15M5 16h22M5 24h22M5 11l3-3-3-3"
    />
  </Svg>
);
