import { render, screen, fireEvent } from '@testing-library/react'
import ShowMessage from './ShowMessage'
import HandleShowMessage from './HandleShowMessage' // Ensure this is imported correctly
import { vi } from 'vitest'
import { BrowserRouter as Router } from 'react-router-dom'

describe('ShowMessage component', () => {
  it('should render ShowMessage component', () => {
    render(
      <Router>
        <ShowMessage />
      </Router>
    )

    // Check if the 'Back to home' button is rendered
    const backHomeButton = screen.getByText(/Back to home/i)
    expect(backHomeButton).toBeInTheDocument()

    // Check if HandleShowMessage is rendered initially (before message close)
    const handleShowMessage = screen.getByTestId('handle-show-message')
    expect(handleShowMessage).toBeInTheDocument()
  })

  it('should not show HandleShowMessage when closeMessage is true', async () => {
    render(
      <Router>
        <ShowMessage />
      </Router>
    )

    // Initially check if HandleShowMessage is rendered
    const handleShowMessage = screen.getByTestId('handle-show-message')
    expect(handleShowMessage).toBeInTheDocument()

    // Simulate closing the message
    const closeButton = screen.getByRole('button', { name: /Back to home/i })
    fireEvent.click(closeButton)

    // Check if HandleShowMessage is no longer rendered
    expect(handleShowMessage).not.toBeInTheDocument()
  })

  it('should navigate to home when Back to home button is clicked', () => {
    const navigate = vi.fn()

    render(
      <Router>
        <ShowMessage />
      </Router>
    )

    // Mock the navigate function
    const backHomeButton = screen.getByText(/Back to home/i)
    fireEvent.click(backHomeButton)

    // Verify that the navigate function was called with the expected route
    expect(navigate).toHaveBeenCalledWith('/')
  })
})
