import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from './index'
import portfolio from '../../data/portfolio'

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />)
  })

  it('displays the portfolio owner name', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(portfolio.name))).toBeInTheDocument()
  })

  it('displays the current year in the copyright notice', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('mentions the tech stack', () => {
    render(<Footer />)
    expect(screen.getByText(/React \+ TypeScript \+ Tailwind CSS/)).toBeInTheDocument()
  })
})
