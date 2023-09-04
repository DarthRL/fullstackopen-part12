import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from './Todo'

describe('<Todo />', () => {
  let container
  let deleteTodo = jest.fn()
  let completeTodo = jest.fn()

  beforeEach(() => {
    const todo = {
      _id: '64f5344b94db332d3e4d3828',
      text: 'Write code',
      done: false,
    }
    container = render(
      <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    ).container
  })

  test('renders undone todo correctly', async () => {
    expect(container).toHaveTextContent('Write code')
    expect(container).toHaveTextContent('This todo is not done')
    expect(container).toHaveTextContent('Set as done')
    expect(container).toHaveTextContent('Delete')
  })

  test('renders done todo correctly', async () => {
    const todo = {
      _id: '64f5344b94db332d3e4d3828',
      text: 'Write code',
      done: true,
    }
    container = render(
      <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    ).container
    expect(container).toHaveTextContent('Write code')
    expect(container).toHaveTextContent('This todo is done')
    expect(container).not.toHaveTextContent('Set as done')
    expect(container).toHaveTextContent('Delete')
  })

  test('clicking the delete button calls the event handler', async () => {
    const user = userEvent.setup()
    const button = screen.getByText('Delete')
    await user.click(button)
    expect(deleteTodo.mock.calls).toHaveLength(1)
  })

  test('clicking the Set as done button calls the event handler', async () => {
    const user = userEvent.setup()
    const button = screen.getByText('Set as done')
    await user.click(button)
    expect(completeTodo.mock.calls).toHaveLength(1)
  })
})

