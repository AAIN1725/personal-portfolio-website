import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from './index'
import portfolio from '../../data/portfolio'

describe('Header', () => {
  it('renders without crashing', () => {
    render(<Header />)
  })

  it('displays portfolio initials as the brand logo', () => {
    render(<Header />)
    expect(screen.getByText(portfolio.initials)).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Projects' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Skills' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('navigation links point to correct section anchors', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
    expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#skills')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('has a nav landmark with accessible label', () => {
    render(<Header />)
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })
})
