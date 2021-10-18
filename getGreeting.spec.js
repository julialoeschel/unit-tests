import { describe, expect, it } from '@jest/globals'
import { getGreeting } from './getGreeting'

describe('getGreeting', () => {
  it('returns a string "Hello you!" if calles without arguments', () => {
    const result = getGreeting()
    expect(result).toBe('Hello you!')
  })

  it('returns "Hello Jane!" when called with getGreeting("Jane")', () => {
    const result = getGreeting('Jane')
    expect(result).toBe('Hello Jane!')
  })
})
