import * as React from 'react';
import Svg, {Circle, Path, Polygon} from 'react-native-svg';
export const Close = props => (
  <Svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width={28}
    height={28}
    viewBox="0 0 512 512"
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    xmlSpace="preserve"
    {...props}>
    <Circle
      style={{
        fill: '#FF6643',
      }}
      cx={256}
      cy={256}
      r={256}
    />
    <Path
      style={{
        fill: '#FF4F19',
      }}
      d="M256,0v512c141.385,0,256-114.615,256-256S397.385,0,256,0z"
    />
    <Polygon
      style={{
        fill: '#F2F2F4',
      }}
      points="365.904,184.885 327.115,146.096 256,217.211 184.885,146.096 146.096,184.885 217.211,256  146.096,327.115 184.885,365.904 256,294.789 327.115,365.904 365.904,327.115 294.789,256 "
    />
    <Polygon
      style={{
        fill: '#DFDFE1',
      }}
      points="365.904,184.885 327.115,146.096 256,217.211 256,294.789 327.115,365.904 365.904,327.115  294.789,256 "
    />
  </Svg>
);
