import assert from 'assert';
import { add } from '../src/example';
import { expect } from 'chai'
describe('example', function() {
  it('如果 a 等于 2 ，b 等于 3，当调用 add()，则结果等于 5', function() {
    // assert.equal(add(2, 3), 3);
    expect(add(2,3)).to.equal(5);
  });
});
