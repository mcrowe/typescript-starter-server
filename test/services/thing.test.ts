import assert = require('assert')
import Thing from '../../src/services/thing'


suite('thing', () => {})


test('doIt', () => {
  assert.equal(5, Thing.doIt())
})