import * as React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
export const Search = props => (
  <Svg
    fill="#fff"
    width={22}
    height={22}
    viewBox="0 0 36 36"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Path
      className="clr-i-outline clr-i-outline-path-1"
      d="M16.33,5.05A10.95,10.95,0,1,1,5.39,16,11,11,0,0,1,16.33,5.05m0-2.05a13,13,0,1,0,13,13,13,13,0,0,0-13-13Z"
    />
    <Path
      className="clr-i-outline clr-i-outline-path-2"
      d="M35,33.29l-7.37-7.42-1.42,1.41,7.37,7.42A1,1,0,1,0,35,33.29Z"
    />
    <Rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </Svg>
);
