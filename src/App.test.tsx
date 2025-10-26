import React from 'react';
import { render } from '@testing-library/react';

test('basic smoke test', () => {
  const div = document.createElement('div');
  expect(div).toBeTruthy();
});

test('React rendering works', () => {
  const { container } = render(<div>Test</div>);
  expect(container.firstChild).toBeTruthy();
});
