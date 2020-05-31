/**
  *
  *
  * NewPage Component
  *
  *
*/

import React from 'react';
// import useLabelsRequest from 'customHooks/useLabelsRequest';
// import useTheme from 'customHooks/useAppTheme';
import { Container } from './styled';
import IProps from './index.interface';

/**
  * the `componentName` comes from prompts actions
  * properCase to captalize each word first Letter 
*/

const NewPage: React.FC<IProps> = (props): JSX.Element => {

  // useLabelsRequest(newPage);
  
  // const { colors } = useTheme()
  

  

  return (
    <Container
      // bgColor={colors.main}
    >
      NewPage
    </Container>
  );
};

export default  React.memo(NewPage) ;
