import React from 'react';
import { SpinnerOverlay, SpinnerContainer} from './with-spinner.styles';

// We are creating here a HOC - High Order Component. The objective is to return a new component with the isLoading property, which will allow the application to display a spinner till the async call to the back-end is finished!

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
  return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent { ...otherProps } />
    )
}

// This component will be exported to the shop page component, because there is where the collections are updated!

export default WithSpinner;