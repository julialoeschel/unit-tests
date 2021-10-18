import { describe, expect, it } from '@jest/globals'
import { replaceName } from './replaceName'

describe('replaceName', () => {
  it('replaces name in the second handing over with newName in the thrid handing over, still the exact text in the forst handing over', () => {
    const result = replaceName('Hallo Jan, das ist ein Text', 'Jan', 'Julia')
    expect(result).toBe('Hallo Julia, das ist ein Text')
  })
})
