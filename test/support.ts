export import assert = require('assert')


export function assertResolve(expectedValue, promise, done) {
  promise.then(value => {
    done()
    assert.equal(expectedValue, value)
  }).catch(done)
}


export function assertMatches(regex, value) {
  assert(regex.test(value), `Expected '${value}' to match '${regex}'`)
}


export function assertIn(array, value) {
  assert(array.indexOf(value) >= 0, `Expected to find '${value}' in '${JSON.stringify(array)}'`)
}
