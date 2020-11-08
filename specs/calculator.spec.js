import calculator from '../src/calculator';
describe('Calculator', () => {
  test('it loads without error', () => {
    expect(calculator).toBeDefined();
    expect(typeof calculator).toBe('function');
  });
});
