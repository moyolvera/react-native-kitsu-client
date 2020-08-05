export const add = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;
export const multiply = (a: number, b: number) => a * b;
export const divide = (a: number, b: number) => a / b;

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 1)).toEqual(2);
  });
});

describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(1, 1)).toEqual(0);
  });
});

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(1, 2)).toEqual(2);
  });
});

describe('divide', () => {
  it('should divide two numbers', () => {
    expect(divide(6, 3)).toEqual(2);
  });
});

describe('Validation', () => {
  it('should always be true', () => {
    expect(true).toEqual(true);
  });
});

describe('Hello', () => {
  it('should say Hello', () => {
    expect('Hello').toEqual('Hello');
  });
});
