import {render, screen} from '@testing-library/react'
import Login from '../pages/Login/Login'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

describe('Login component', () => {
  it('Should render the Login component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login/>
        </MemoryRouter>
      </Provider>
    )
    const signInText = screen.queryAllByText('Sign in')
    expect(signInText.length).toBe(2)
  })
})