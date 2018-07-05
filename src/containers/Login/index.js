import React, {Component, Fragment } from 'react'
                
class Login extends Component {

    errorsData = []

    state={
        login:'',
        pass:'',
        error_pass:'',
        error_login: ''
        // initialRender: false
    }

    handleOnChange = (e) => {
        const value = e.target.value
        if(value) {
            this.setState({
                error_login: '',
                login: value
            }) 
        } else {
            this.setState({
                error_login: 'логин - обязательное поле',
                login: value
            }) 
        }
    }

    handleOnChangePass = (e) => {
        const value = e.target.value
        if (value.length <= 3) {
            this.setState({
                error_pass: 'пароль должен быть более трех символов',
                pass: value
                
            }) 
        } else {
            this.setState({
                error_pass: '',
                pass: value
            }) 
        }
    }
    

    onSubmitForm = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    isValid = () => {

        if (!this.testValidate('login')) {
            return false
        }

        if (!this.testValidate('pass')) {
            return false
        }

        return true
        
    }

    testValidate = (fieldName) => {

        if (this.state['error_' + fieldName]) {
            return false
        }

        if (!this.state[fieldName]) { //this.state['login']
            return false
        }

        return true
    }


    render() {
        const { pass, login, error_pass, error_login } = this.state

        return (
            <Fragment>
                <form
                    onSubmit={this.onSubmitForm} 
                >
                    <input
                        type='text'
                        value={login}
                        onChange={this.handleOnChange}
                    />
                    <input
                        type='password'
                        value={pass}
                        onChange={this.handleOnChangePass}
                    />
                    <button
                        disabled={!this.isValid()}
                    >Log in</button>
                </form>
                <p>{error_pass}</p>
                <p>{error_login}</p>
                    
            </Fragment>
        )
    }
}

export default Login