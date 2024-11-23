/*
Created by Franz Zemen 11/23/2024
License Type: 
*/

import 'mocha';
import {expect} from 'chai';
import {helloWorld} from '#project';

describe('dummy test', () => {
  it('should pass', () => {
    expect(helloWorld()).to.equal(' World!');
  });
});
