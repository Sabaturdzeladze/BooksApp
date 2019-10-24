import React from 'react';
import {HeaderButton as Button} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../../constants/Colors';

const HeaderButton = props => {
  return (
    <Button
      {...props}
      IconComponent={Icon}
      iconSize={23}
      color={Colors.primary}
    />
  );
};

export default HeaderButton;
