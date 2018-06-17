import * as React from 'react'
import {ChangeEvent, Component, FormEvent, FormEventHandler} from 'react'

import API from '../../lib/API'

import './Register.css'

class Register extends Component<any, {
  email: string, name: string, password: string, passwordAgain: string, responseMessage: string
}> {
  private readonly onSubmitEvent: FormEventHandler<HTMLFormElement>

  constructor(props: any) {
    super(props)
    this.state = {
      email: '',
      name: '',
      password: '',
      passwordAgain: '',
      responseMessage: ''
    }
    this.onSubmitEvent = this.onSubmit.bind(this)
  }

  public onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!e.currentTarget.checkValidity()) {
      return
    }
    if (this.state.password !== this.state.passwordAgain) {
      this.setState({
        responseMessage: '密码不一致'
      })
      return
    }
    API.register(this.state.name, this.state.email, this.state.password, (message: string) => {
      this.setState({
        responseMessage: message
      })
    })
  }

  public setInput(key: string) {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const changed = {}
      changed[key] = e.target.value
      this.setState(changed)
    }
  }

  public componentDidMount() {
    document.title = '摊位申请 - 现场摊位 - 彩虹火箭队基地'
  }

  public render() {
    return (<div>
      <h2>{this.state.responseMessage}</h2>
      <form className="register-form" onSubmit={this.onSubmitEvent}>
        <input required={true} onChange={this.setInput('name')} value={this.state.name} type="text"
               className="register-input" placeholder="摊位名"/>
        <input required={true} onChange={this.setInput('email')} value={this.state.email} type="email"
               className="register-input" placeholder="邮箱"/>
        <input required={true} onChange={this.setInput('password')} value={this.state.password} type="password"
               className="register-input" placeholder="密码"/>
        <input required={true} onChange={this.setInput('passwordAgain')} value={this.state.passwordAgain}
               type="password" className="register-input" placeholder="确认密码"/>
        <button className="register-button">注册</button>
      </form>
    </div>)
  }
}

export default Register
