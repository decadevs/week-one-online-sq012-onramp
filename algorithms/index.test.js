const secondLargest = require('./challenge-1')
const filterArray = require('./challenge-2')
const sumMix = require('./challenge-3')
const sumTwoSmallestNums = require('./challenge-4')
const filterList = require('./challenge-5')

describe('Challenge 1 Tests', () => {
  test('basic tests', () => {
    expect(secondLargest([6, 3, 0, 30, 7])).toBe(7)
    expect(secondLargest([71, 33, 3, 51, 18, 6])).toBe(51)
    expect(secondLargest([42, 68, 22, 60, 7])).toBe(60)
    expect(secondLargest([19, 2, 73, 44, 27, 9])).toBe(44)
    expect(secondLargest([10, 9, 69, 30, 10])).toBe(30)
    expect(secondLargest([0, 1, 2, 3, 4])).toBe(3)
    expect(secondLargest([2, 30, 4, 57, 6, 9, 100])).toBe(57)
  })
})

describe('Challenge 2 Tests', () => {
  test('basic tests', () => {
    expect(filterArray([1, 2, "a", "b"])).toEqual([1,2])
    expect(filterArray([4, "z", "f", 5])).toEqual([4,5])
    expect(filterArray(["$%^", 567, "&&&"])).toEqual([567])
    expect(filterArray(["w", "r", "u", 43, "s", "a", 76, "d", 88])).toEqual([43, 76, 88])
    expect(
      filterArray([16, "op", 20, "[[", 24, 26, "yy"])
    ).toEqual([16, 20, 24, 26 ])
    expect(filterArray([1, "a", "b", 0, 15])).toEqual([1, 0, 15])
    expect(filterArray([1, 2, "aasf", "1", "123", 123])).toEqual([1, 2, 123])
  })
})

describe('Challenge 3 Tests', () => {
  test('basic tests', () => {
    expect(sumMix([9, 3, '7', '3'])).toStrictEqual(22)
    expect(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])).toStrictEqual(42)
    expect(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])).toStrictEqual(41)
    expect(sumMix([1, '5', 6, 7])).toStrictEqual(19)
    expect(
      sumMix([10, 60, '80', 10])
    ).toStrictEqual(160)
    expect(sumMix(['1', 2, 3, '9', 10])).toStrictEqual(25)
    expect(sumMix(['5', 6, '7'])).toStrictEqual(18)
  })
})

describe('Challenge 4 Tests', () => {
  test('basic tests', () => {
    expect(sumTwoSmallestNums([19, 5, 42, 2, 77])).toBe(7)
    expect(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])).toBe(3453455)
    expect(sumTwoSmallestNums([2, 9, 6, -1])).toBe(8)
    expect(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])).toBe(563)
    expect(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])).toBe(4519)
    expect(sumTwoSmallestNums([-1, -1, 1, 1])).toBe(2)
    expect(sumTwoSmallestNums([1, 1, 1, 1])).toBe(2)
  })
})


describe('Challenge 5 Tests', () => {
    test('basic tests', () => {
        expect(filterList([1,2,'a','b'])).toEqual([1,2])
        expect(filterList([1,'a','b',0,15])).toEqual([1,0,15])
        expect(filterList([1,2,'aasf','1','123',123])).toEqual([1,2,123])
        expect(filterList(['wk', 4, 5, 6, 'yl', 'to' ])).toEqual([4,5,6])
        expect(filterList([3, "Pop", 8, 9, 7,"learn" ])).toEqual([3, 8, 9,7])
        expect(filterList(["t", 9]) ).toEqual([9])

      })
})