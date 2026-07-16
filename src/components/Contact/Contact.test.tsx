import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from './index'
import portfolio from '../../data/portfolio'

describe('Contact', () => {
  it('renders without crashing', () => {
    render(<Contact />)
  })

  it('has a "Contact" section heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders a mailto link with the portfolio email', () => {
    render(<Contact />)
    const link = screen.getByRole('link', { name: portfolio.email })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', `mailto:${portfolio.email}`)
  })
})
