/**
  *
  *
  * ComponentName Component
  *
  *
*/

import React from 'react';
import { Container } from './styled';
import IProps from './index.interface';

/**
  * the `componentName` comes from prompets actions
  * properCase to captalize each word first Letter 
*/

const ComponentName: React.FC<IProps> = (props): JSX.Element => {

  return (
    <Container>
      ComponentName
    </Container>
  );
};

export default  React.memo(ComponentName) ;
