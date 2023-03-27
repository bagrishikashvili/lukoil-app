import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

const HomeIcon = ({color}) => {

    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M12 18V15" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M10.07 2.81997L3.14001 8.36997C2.36001 8.98997 1.86001 10.3 2.03001 11.28L3.36001 19.24C3.60001 20.66 4.96001 21.81 6.40001 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.98997 20.86 8.36997L13.93 2.82997C12.86 1.96997 11.13 1.96997 10.07 2.81997Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
    )
}
export default HomeIcon;