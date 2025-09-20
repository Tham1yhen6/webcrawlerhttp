const { normalizeURL } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

test('normalizeURL strip protocol', () => {
  const input = 'https://www.1yhen6.com/path'
  const actual = normalizeURL(input)
  const expected = 'www.1yhen6.com/path'
  expect(actual).toEqual(expected)
})

test('normalizeURL strip trailing slash', () => {
  const input = 'https://www.1yhen6.com/path/'
  const actual = normalizeURL(input)
  const expected = 'www.1yhen6.com/path'
  expect(actual).toEqual(expected)
})

test('normalizeURL capital', () => {
  const input = 'https://BLOG.boot.dev/path'
  const actual = normalizeURL(input)
  const expected = 'blog.boot.dev/path'
  expect(actual).toEqual(expected)
})

test('normalizeURL strip http', () => {
  const input = 'http://blog.boot.dev/path'
  const actual = normalizeURL(input)
  const expected = 'blog.boot.dev/path'
  expect(actual).toEqual(expected)
})