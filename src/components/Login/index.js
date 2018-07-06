import React, {Component, Fragment } from 'react'
                
class Login extends Component {

    state = {
        login: 'ddd',
        pass: '7777',
        error_pass: '',
        error_login: '',
    }

    onChangeLoginHandler = (e) => {

        const value = e.target.value
        if (value) {
            this.setState({
                error_login: '',
                login: value
                }) 
        } else {
            this.setState({
                error_login: 'Логин должен быть не пустой',
                login: value
                })
            }
    }

    onChangePassHandler = (e) => {

        const value = e.target.value
        if (value.length <= 3) {
            this.setState({
                error_pass: 'Пароль должен быть более 4х символов',
                pass: value
            })
        } else {
            this.setState({
                error_pass: '',
                pass: value
            })
        }
    }

    isValid = () => {
        if (!this.isValidateTest('login')) {
            return false
        }

        if (!this.isValidateTest('pass')) {
            return false
        }

        return true
    }


    isValidateTest = (fieldName) => {
        if (this.state['error_' + fieldName]) {
            return false
        }

        if (!this.state[fieldName]) { //this.state['login']
            return false
        }

        return true
    }

    onSubmitForm = (e) => {
        e.preventDefault()
    }

    render() {

        const { login, pass, error_pass, error_login } = this.state
        const { handleClick, isLoading } = this.props

        return (
            <Fragment>
                <form 
                    onSubmit={this.onSubmitForm}
                >
                    <input 
                        type='text'
                        value={login}
                        onChange={this.onChangeLoginHandler}
                        />
                    <input 
                        type='password'
                        value={pass}
                        onChange={this.onChangePassHandler}
                        />
                    <button
                        disabled={!this.isValid() || isLoading }
                        onClick={handleClick}
                    >
                        Login
                    </button>
               </form>
                <p>{error_pass}</p>
                <p>{error_login}</p>

            </Fragment>

        )
    }
}

export default Login