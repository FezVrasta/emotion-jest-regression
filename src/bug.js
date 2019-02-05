import React from 'react';
import styled from '@emotion/styled/macro';

export const Bar = styled.div`
  color: blue;
`;

export const Foo = styled(props => (
  <div {...props}>
    <Bar />
  </div>
))`
  color: red;

  ${Bar} {
      color: yellow;
  }
`;
