import React from 'react'

import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import App from './App'

describe('App component', () => {
    it('should render App component', () => {
        render(<App />)
    })
})

describe('A truthy statement', () => {
    it('should be equal to 2', () => {
        expect(1 + 1).toEqual(2)
    })
})

describe('A falsy statement', () => {
    it('should be equal to 2', () => {
        expect(1 + 1).not.toEqual(3)
    })
})