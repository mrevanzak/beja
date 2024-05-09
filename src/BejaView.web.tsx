import * as React from 'react';

import { BejaViewProps } from './Beja.types';

export default function BejaView(props: BejaViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
