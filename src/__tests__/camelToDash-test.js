import camelToDash from '../camelToDash.js';
it('works', () => {
  expect(camelToDash('backgroundColor')).toBe('background-color');
});
