import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
export const Profile = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10 15c-1.631 0-3.064-.792-3.978-2 .914-1.208 2.347-2 3.978-2 1.631 0 3.064.792 3.978 2-.914 1.208-2.347 2-3.978 2zm0-10c1.104 0 2 .897 2 2s-.896 2-2 2-2-.897-2-2 .896-2 2-2zm0-3c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"
      fill="#5C5F62"
    />
  </Svg>
);
