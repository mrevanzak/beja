import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { BejaViewProps } from './Beja.types';

const NativeView: React.ComponentType<BejaViewProps> =
  requireNativeViewManager('Beja');

export default function BejaView(props: BejaViewProps) {
  return <NativeView {...props} />;
}
