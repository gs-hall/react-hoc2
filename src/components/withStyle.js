// оборачивает один компонент другим

import React from "react";

export const withStyle = (WrappedComponent, WrappingComponent) => (props) => {
  if (!WrappingComponent) {return <WrappedComponent {...props} />};
  return (
    <WrappingComponent>
      <WrappedComponent {...props} />
    </WrappingComponent>
  )};