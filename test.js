/* global beforeEach describe it */
import assert from 'assert'
import { JSDOM } from 'jsdom'

const testScript = 'https://unpkg.com/fetch'
const htmlTemplate = '<!DOCTYPE html><body></body></html>'

function reRequire(module) {
  delete require.cache[require.resolve(module)]
  return require(module)
}

describe('loadScript', () => {
  const jsdom = new JSDOM(htmlTemplate)
  global.document = jsdom.window.document
  let loadScript

  beforeEach(() => {
    global.document.body.innerHTML = '<script></script>'
    loadScript = reRequire('./index').default
  })

  it('should return promise', () => {
    const promise = loadScript(testScript)
    assert(promise instanceof Promise)
  })

  it('should load script successfully', done => {
    loadScript(testScript).then(done)
    const element = document.querySelector('[src]')
    element.onload()
  })

  it('should handle loading error', done => {
    loadScript(testScript).then(() => {}, done)
    const element = document.querySelector('[src]')
    element.onerror()
  })
})
