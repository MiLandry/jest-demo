import { add2 } from './math';

describe('math', () => {
  describe('add2', () => {
    it('adds 2 to numbers', () => {
      expect(add2(2)).toEqual(4)
    });
  });
})
