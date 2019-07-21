import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {({ activateAuth }) => {
      return (
        <Fragment>
          <RegisterMutation>
            {(register, { data, loading, error }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password }
                const variables = { input }
                register({ variables }).then(activateAuth)
              }

              const errorMsg =
                error && 'El usuario ya existe o hay algún problema.'

              return (
                <UserForm
                  error={errorMsg}
                  disabled={loading}
                  title='Registrarse'
                  onSubmit={onSubmit}
                />
              )
            }}
          </RegisterMutation>

          <LoginMutation>
            {(login, { error, data, loading }) => {
              const onSubmit = ({ email, password }) => {
                const input = { email, password }
                const variables = { input }
                login({ variables }).then(activateAuth)
              }

              const errorMsg =
                error && 'La contraseña no es correcta o el usuario no existe.'

              return (
                <UserForm
                  error={errorMsg}
                  disabled={loading}
                  title='Iniciar sesión'
                  onSubmit={onSubmit}
                />
              )
            }}
          </LoginMutation>
        </Fragment>
      )
    }}
  </Context.Consumer>
)
