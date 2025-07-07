import React from 'react';

const MockImage = (props: any) => {
  return React.createElement('img', { ...props, src: 'test-file-stub' });
};

module.exports = MockImage;