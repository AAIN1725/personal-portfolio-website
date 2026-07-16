import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './index'
import portfolio from '../../data/portfolio'

describe('Hero', () => {
  it('renders without crashing', () => {
    render(<Hero />)
  })

  it('displays the portfolio owner name as a heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: portfolio.name })).toBeInTheDocument()
  })

  it('displays the role as a subheading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 2, name: portfolio.role })).toBeInTheDocument()
  })

  it('displays the tagline', () => {
    render(<Hero />)
    expect(screen.getByText(portfolio.tagline)).toBeInTheDocument()
  })

  it('renders "View Projects" CTA linking to #projects', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: 'View Projects' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#projects')
  })

  it('renders "Contact Me" CTA linking to #contact', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: 'Contact Me' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#contact')
  })
})
