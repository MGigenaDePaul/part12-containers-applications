import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Todo from './Todo'

describe('Todo component', () => {
  it('renders text Test todo', () => {
    const todo = {
      _id: '1',
      text: 'Test todo',
      done: false
    }
    
    render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)
    
    const element = screen.getByText('Test todo')
    expect(element).toBeDefined()
  })

  it('shows "not done" when todo is not completed', () => {
    const todo = {
      _id: '1',
      text: 'Test todo',
      done: false
    }
    
    render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)
    
    const element = screen.getByText('This todo is not done')
    expect(element).toBeDefined()
  })

  it('shows "done" when todo is completed', () => {
    const todo = {
      _id: '1',
      text: 'Test todo',
      done: true
    }
    
    render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}} />)
    
    const element = screen.getByText('This todo is done')
    expect(element).toBeDefined()
  })
})