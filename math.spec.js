import { describe, expect } from '@jest/globals'
import { isOdd } from './math'

describe('math', () => {
  describe('isOdd', () => {
    it('returns true, if a number is odd', () => {
      const result = isOdd(1)
      expect(result).toBe(true)
    })

    it('returns true, if a negative number is odd', () => {
      const result = isOdd(-3)
      expect(result).toBe(true)
    })

    it('returns false, if a number is even', () => {
      const result = isOdd(2)
      expect(result).toBe(false)
    })

    it('returns false, if a negative number is even', () => {
      const result = isOdd(-4)
      expect(result).toBe(false)
    })
  })
})
