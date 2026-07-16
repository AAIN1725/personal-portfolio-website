import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Skills from './index'
import portfolio from '../../data/portfolio'

describe('Skills', () => {
  it('renders without crashing', () => {
    render(<Skills />)
  })

  it('has a "Skills" section heading', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument()
  })

  it('renders every skill name from portfolio data', () => {
    render(<Skills />)
    portfolio.skills.forEach((skill) => {
      expect(screen.getByText(skill.name)).toBeInTheDocument()
    })
  })

  it('labels skills with proficiency >= 80 as Advanced', () => {
    render(<Skills />)
    portfolio.skills
      .filter((s) => s.proficiency >= 80)
      .forEach((s) => {
        // Each skill row contains the name + badge; find the badge within the skill's container
        const nameEl = screen.getByText(s.name)
        const row = nameEl.closest('div')
        expect(row?.textContent).toContain('Advanced')
      })
  })

  it('labels skills with proficiency < 80 as Intermediate', () => {
    render(<Skills />)
    portfolio.skills
      .filter((s) => s.proficiency < 80)
      .forEach((s) => {
        const nameEl = screen.getByText(s.name)
        const row = nameEl.closest('div')
        expect(row?.textContent).toContain('Intermediate')
      })
  })
})
