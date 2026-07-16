import { describe, it, expect } from 'vitest'
import portfolio from './portfolio'

describe('portfolio data', () => {
  it('has a non-empty name', () => {
    expect(portfolio.name.trim().length).toBeGreaterThan(0)
  })

  it('has a valid email address', () => {
    expect(portfolio.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  })

  it('has at least one project', () => {
    expect(portfolio.projects.length).toBeGreaterThan(0)
  })

  it('every project has a title and non-empty tech stack', () => {
    portfolio.projects.forEach((p) => {
      expect(p.title.trim().length).toBeGreaterThan(0)
      expect(p.techStack.length).toBeGreaterThan(0)
    })
  })

  it('has at least one skill', () => {
    expect(portfolio.skills.length).toBeGreaterThan(0)
  })

  it('every skill has proficiency between 1 and 100', () => {
    portfolio.skills.forEach((s) => {
      expect(s.proficiency).toBeGreaterThanOrEqual(1)
      expect(s.proficiency).toBeLessThanOrEqual(100)
    })
  })

  it('every skill category is a known value', () => {
    const valid = new Set(['frontend', 'backend', 'tools', 'other'])
    portfolio.skills.forEach((s) => {
      expect(valid.has(s.category)).toBe(true)
    })
  })

  it('project IDs are unique', () => {
    const ids = portfolio.projects.map((p) => p.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
