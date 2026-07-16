import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Projects, { ProjectCard } from './index'
import portfolio, { type Project } from '../../data/portfolio'

describe('Projects', () => {
  it('renders without crashing', () => {
    render(<Projects />)
  })

  it('has a "Projects" section heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument()
  })

  it('renders a card for every project in portfolio data', () => {
    render(<Projects />)
    portfolio.projects.forEach((p) => {
      expect(screen.getByRole('heading', { name: p.title })).toBeInTheDocument()
    })
  })

  it('renders all tech stack tags for every project', () => {
    render(<Projects />)
    portfolio.projects.forEach((p) => {
      p.techStack.forEach((tech) => {
        expect(screen.getAllByText(tech).length).toBeGreaterThan(0)
      })
    })
  })
})

describe('ProjectCard', () => {
  const base: Project = {
    id: 99,
    title: 'Test Project',
    description: 'A test project description.',
    techStack: ['TypeScript', 'React'],
  }

  it('renders title, description, and tech tags', () => {
    render(<ProjectCard project={base} />)
    expect(screen.getByRole('heading', { name: 'Test Project' })).toBeInTheDocument()
    expect(screen.getByText('A test project description.')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('does not render a "Live Demo" link when liveUrl is absent', () => {
    render(<ProjectCard project={base} />)
    expect(screen.queryByRole('link', { name: 'Live Demo' })).not.toBeInTheDocument()
  })

  it('renders a "Live Demo" link when liveUrl is provided', () => {
    const withLive = { ...base, liveUrl: 'https://example.com' }
    render(<ProjectCard project={withLive} />)
    const link = screen.getByRole('link', { name: 'Live Demo' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://example.com')
  })
})
