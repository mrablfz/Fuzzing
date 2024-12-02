import { render, screen, fireEvent } from '@testing-library/react'
import SignUp from './SignUp'
import userEvent from '@testing-library/user-event'
import { faker } from '@faker-js/faker' // For random data generation
import { describe, vi } from 'vitest'

describe('SignUp component', () => {
    it('should render SignUp component', async () => {
        render(<SignUp />)

        const username = faker.internet.username()
        const email = faker.internet.email()
        const password = faker.internet.password()
        const repeatPassword = faker.internet.password()
        const checkBox = faker.datatype.boolean()
        const submit = faker.datatype.boolean()
        
        const usernameInput = screen.getByTestId('username-input')
        const emailInput = screen.getByTestId('email-input')
        const passwordInput = screen.getByTestId('password-input')
        const repeatPasswordInput = screen.getByTestId('repeat-password-input')
        const checkBoxInput = screen.getByTestId('terms-input')
        const submitButton = screen.getByTestId('button-submit', { name: '/submit/i' })

        await userEvent.type(usernameInput, username)
        await userEvent.type(emailInput, email)
        await userEvent.type(passwordInput, password)
        await userEvent.type(repeatPasswordInput, repeatPassword)

        await userEvent.click(checkBoxInput)
        await userEvent.click(submitButton)
    })
})
