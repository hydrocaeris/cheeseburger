import React from 'react';

const withTitle = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} title="Aplikasi Produk" />;
  };
};

export default withTitle;