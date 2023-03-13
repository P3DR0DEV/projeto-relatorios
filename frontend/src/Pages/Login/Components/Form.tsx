import { useState, FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import './Form.css'


function Form() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    user: '',
    pass: ''
  })

  function handleFormChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData(prevFormData => {
      const { name, value } = e.target
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function handleSubmit(e: FormEvent) {
    const { user, pass } = formData
    e.preventDefault();
    login(user, pass)
  }

  const login = (user: string, pass: string) => {
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      body: JSON.stringify({
        user,
        pass
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.token) {
          navigate('/turmas')
          localStorage.setItem('token', JSON.stringify(data.token))
        } else {
          toast.warn(data.errors)
        }
      })
      .catch(e => console.log(e))
  }

  return (
    <div className="login-form">
      <div className='login-form-logo'>
        <img src="/images/logo.png" alt="Claretiano Logo" />
        <h3 className='login-form-logo-h3'>Relatórios Descritivos</h3>
      </div>
      <form className='form-group' onSubmit={handleSubmit} >
        <div className='input-group'>
          <div className='user-box'>
            <input type="text" name="user" id="user" value={formData.user} onChange={handleFormChange} className='' required />
            <label htmlFor="user">Matricula</label>
          </div>
          <div className='user-box'>
            <input type="password" name="pass" id="pass" value={formData.pass} onChange={handleFormChange} className='' required />
            <label htmlFor="pass">Senha</label>
          </div>
          <a href="https://portal.redeclaretiano.edu.br/br/login" className='recuperar-senha' target={'_blank'}>Esqueceu a sua senha?</a>
        </div>
        <button type="submit" className='button-submit'>Log In</button>
      </form>
    </div>
  )
}

export default Form
