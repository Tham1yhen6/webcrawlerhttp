const { sortPages } = require('./report.js')
const { test, expect } = require('@jest/globals')

test('sortPages 3 pages', () => {
  const input = {
    'https://wagslane.dev/path': 2,
    'https://wagslane.dev': 4,
    'https://wagslane.dev/path2': 3
  }
  const actual = sortPages(input)
  const expected = [
    ['https://wagslane.dev', 4],
    ['https://wagslane.dev/path2', 3],
    ['https://wagslane.dev/path', 2]
  ]
  expect(actual).toEqual(expected)
})

test('sortPages 6 pages', () => {
  const input = {
    'https://wagslane.dev/path': 2,
    'https://wagslane.dev': 4,
    'https://wagslane.dev/path2': 3,
    'https://wagslane.dev/path3': 5,
    'https://wagslane.dev/path4': 12,
    'https://wagslane.dev/path5': 8
  }
  const actual = sortPages(input)
  const expected = [
    ['https://wagslane.dev/path4', 12],
    ['https://wagslane.dev/path5', 8],
    ['https://wagslane.dev/path3', 5],
    ['https://wagslane.dev', 4],
    ['https://wagslane.dev/path2', 3],
    ['https://wagslane.dev/path', 2]
  ]
  expect(actual).toEqual(expected)
})