import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './WithSpinnerStyles';

const WithSpinner = WrappedComponent => ({ isLoading, ...props }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...props} />
  );
};

export default WithSpinner;
