import React from "react";

export const withStyle = (WrappedComponent, WrappingComponent) => (props) => {
  //const {...args} = prettyFunction(props);
  return (
    <WrappingComponent>
      <WrappedComponent {...props} />
    </WrappingComponent>
  )};