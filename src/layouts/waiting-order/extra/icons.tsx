import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement } from '@ui-kitten/components';

export const CloseIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='close'/>
);

export const SuccessIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='checkmark-outline'/>
);

export const ArrowIosBackIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='arrow-ios-back'/>
);

export const ArrowIosForwardIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='arrow-ios-forward'/>
);



