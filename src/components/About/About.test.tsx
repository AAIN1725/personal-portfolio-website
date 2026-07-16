import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from './index'
import portfolio from '../../data/portfolio'

describe('About', () => {
  it('renders without crashing', () => {
    render(<About />)
  })

  it('has an "About" section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
  })

  it('displays the bio text', () => {
    render(<About />)
    expect(screen.getByText(portfolio.bio)).toBeInTheDocument()
  })

  it('displays the location', () => {
    render(<About />)
    expect(screen.getByText(`Location: ${portfolio.location}`)).toBeInTheDocument()
  })

  it('shows "Open to new opportunities" badge when openToWork is true', () => {
    render(<About />)
    if (portfolio.openToWork) {
      expect(screen.getByText('Open to new opportunities')).toBeInTheDocument()
    }
  })
})
